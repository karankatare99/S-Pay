"use server"
import { prisma } from "@repo/db/client";
import { getUser } from "../../../components/helper/getUserDetails";

export async function createOnRampTxn(txnAmount: number, provider: string) {
    const { id } = await getUser()
    const token = Math.random().toString()
    // get actual token from mock bank server

    await prisma.onRampTransaction.create({
        data: {
            userId: id,
            status: "Processing",
            token,
            provider,
            amount: txnAmount * 100,
            startTime: new Date()
        }
    })
}