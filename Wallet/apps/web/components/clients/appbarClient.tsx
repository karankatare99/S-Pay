"use client"

import { SessionProvider } from "next-auth/react"
import { Appbar } from "../appbar"

export const AppBarClient = () => {
    return (
        <SessionProvider>
            <Appbar />
        </SessionProvider>
    )
}