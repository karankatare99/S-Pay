"use server"

import { getServerSession } from "next-auth";
import { authProvider } from "../../app/lib/route";
import { prisma } from "@repo/db/client";


export async function getUser() {

    try {
        const session = await getServerSession(authProvider);

        const user = await prisma.user.findUnique({
            where: { email: session.user.email! },
        });
        
        const id = user?.id ?? "";
        const name = user?.name ?? "";
        const email = user?.email ?? "";

        return { id, name, email };
    } catch(e) {
        console.error("Pls log in")
        return { id: "", name: "", email: ""}
    }

}

export async function getBalance() {
    const user = await getUser()
    const balance = await prisma.balance.findFirst({
        where: {
            userId: user?.id
        }
    })

    const balAmount = balance?.amount ?? 0;
    const locked = balance?.locked ?? 0;

    return { balAmount, locked };
}

export async function getOnRampTxns() {
    const { id } = await getUser()
    const transactions = await prisma.onRampTransaction.findMany({
        where: {
            userId: id
        }
    })

    return transactions
}

export async function getp2pTxns() {
    const { id } = await getUser()
    const [sentTxns, receivedTxns] = await Promise.all([
        prisma.p2pTransaction.findMany({
            where: { senderId: id },
            orderBy: { timeStamp: "desc" },
        }),
        prisma.p2pTransaction.findMany({
            where: { receiverId: id },
            orderBy: { timeStamp: "desc" },
        }),
    ])

    return { sentTxns, receivedTxns }
}