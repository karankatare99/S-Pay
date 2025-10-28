import express from "express";
import { prisma } from "@repo/db/client";

const app = express()

app.use(express.json())

app.post("/bankhook", async (req, res) => {
    interface payInfoProps {
        userId: string;
        token: string;
        amount: string;
    }
    const { userId, token, amount } = <payInfoProps>req.body

    try {
        await prisma.$transaction([
            prisma.balance.upsert({
                where: {
                    userId: userId
                },
                update: {
                    amount: {
                        increment: Number(amount) * 100
                    }
                },
                create: {
                    userId,
                    amount: Number(amount) * 100,
                    locked: 0
                }
            }),

            prisma.onRampTransaction.update({
                where: {
                    token: token
                },
                data: {
                    status: "Success"
                }
            })
        ])
        return res.json({
            msg: "Captured"
        })
    } catch(e) {
        console.error("Webhook error" + e)
        return res.status(500).json({
            msg: "Error while fetching webhook!"
        })
    }     
})

app.listen(8080)