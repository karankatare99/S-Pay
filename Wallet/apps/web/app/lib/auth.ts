import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@repo/db/client";
import { JWT } from "next-auth/jwt";

export const authOptions = {
    providers: [
        Credentials({
            name: "Email",
            credentials: {
                name: { label : "Name", type: "text", placeholder: "name"},
                username: { label : "Username", type: "text", placeholder: "email"},
                password: { label : "Password", type: "password"}
            },
            async authorize(credentials, req) {

                if (!credentials) {
                    return null
                }

                const { name, username, password } = credentials as {
                    name: string,
                    username: string,
                    password: string
                };

                try {
                    const existingUser = await prisma.user.findFirst({
                        where: {
                            email: username
                        }
                    })
                    if (existingUser) {
                        const passwordValidation = await bcrypt.compare(password, existingUser.password)
                        if (passwordValidation) {
                            return {
                                id : existingUser.id,
                                name: existingUser.name,
                                email: existingUser.email
                            }
                        } else {
                            return null
                        }
                    } else {
                        const hashedPass = await bcrypt.hash(password, 10)
                        const user = await prisma.user.create({
                            data: {
                                name: name,
                                email: username,
                                password: hashedPass
                            }
                        })

                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    }
                } catch(e) {
                    console.log(e)
                }
                return null
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ token, session }: {
            token: JWT,
            session: any
        }) {
            session.user.id = token.sub
            return session
        }
    }
}