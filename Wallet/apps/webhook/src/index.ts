import { prisma } from "@repo/db/client";
import express from "express";

const app = express()

app.post("/webhook", async (req, res) => {
    interface paymentInfoProps {
        token: string;
        userId: string;
        amount: number;
    }

    const paymentInfo = <paymentInfoProps>{
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    }

    try {
        await prisma.$transaction([

            prisma.balance.updateMany({
                where: {
                    userId: paymentInfo.userId
                },
                data: {
                    amount: {
                        increment: Number(paymentInfo.amount)
                    }
                }
            }),

            prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInfo.token
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
        console.error(e)
        return res.status(411).json({
            msg: "Error while processing webhook"
        })
    }
})

app.listen(8787)