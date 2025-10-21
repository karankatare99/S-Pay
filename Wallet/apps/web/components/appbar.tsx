"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const session = useSession()
    const user = session.data?.user
    return (
        <div className="flex justify-between items-center border-slate-300 border-b px-8 py-4">
            <div className="flex gap-2.5">
                <img className="size-8" src="./Logo.png" alt="" />
                <div className="text-lg font-bold">S-PAY</div>
            </div>
            <button onClick={() => {
                if(user) {
                    signOut()
                } else {
                    signIn()
                }
            }} className="cursor-pointer text-xs text-white px-4 py-1.5 font-medium focus:outline-none rounded bg-purple-400">
                {user ? "Logout" : "Login"}
            </button>
        </div>
    )
}