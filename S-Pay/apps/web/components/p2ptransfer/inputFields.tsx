"use client"

import { useState } from "react"
import { SendReq } from "./sendReq"

export const InputFields = () => {
    const [toUser, setToUser] = useState("")
    const [amount, setAmount] = useState(0)
    return (
        <div className="flex flex-col gap-4 border rounded px-8 py-4 max-w-screen-sm">
            <div className="text-lg font-medium">Send Money</div>
            <div className="flex flex-col gap-1.5">
                <div className="text-sm">To</div>
                <input onChange={(e) => setToUser(e.target.value)} className="text-slate-400 text-sm rounded border py-2 px-3 focus:outline-none focus:text-black focus:ring-2 focus:ring-purple-500 max-w-sm" type="text" placeholder="Email"/>
            </div>
            <div className="flex flex-col gap-1.5">
                <div className="text-sm">Amount</div>
                <input onChange={(e) => setAmount(Number(e.target.value))} className="text-slate-400 text-sm rounded border py-2 px-3 focus:outline-none focus:text-black focus:ring-2 focus:ring-purple-500 max-w-sm" type="text" placeholder="Amount"/>
            </div>
            <SendReq toUser={toUser} amount={amount} />
        </div>
    )
}