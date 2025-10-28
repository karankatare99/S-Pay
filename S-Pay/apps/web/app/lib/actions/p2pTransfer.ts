"use server"

import { prisma } from "@repo/db/client"
import { getBalance, getUser } from "../../../components/helper/getUserDetails"

export const p2pTransfer = async (toUser: string, amount : number) => {
    const { id } = await getUser()
    
    if (!id) {
        return {
            msg: "Log In please"
        }
    }

    if (!toUser) {
        return {
            msg: "User not found"
        }
    }

    const { balAmount } = await getBalance()

    if (!balAmount || balAmount < amount) {
        throw new Error("Insufficient funds")
    }

    const toUserData = await prisma.user.findFirst({
        where: {
            email: toUser
        }
    })

    if (!toUserData) {
        throw new Error("User not found")
    }

    try {
    await prisma.$transaction(async (tx) => {

        await tx.$executeRawUnsafe(
                `SELECT * FROM "BALANCE" WHERE "userId" = $1 FOR UPDATE`,
                id
            )

        await prisma.balance.update({
            where: {
                userId: id
            },
            data: {
                amount: {
                    decrement: amount * 100
                }
            }
        }),

        await prisma.balance.upsert({
            where: {
                userId: toUserData?.id
            },
            update: {
                amount: {
                    increment: amount * 100
                }
            },
            create: {
                userId: toUserData.id,
                amount: amount * 100,
                locked: 0
            }
        }),

        await prisma.p2pTransaction.create({
            data: {
                amount: Number(amount),
                senderId: id,
                receiverId: toUserData.id,
                timeStamp: new Date()
            }
        })
    })
    } catch(e) {
        console.error("Transaction Failed")
    }

}