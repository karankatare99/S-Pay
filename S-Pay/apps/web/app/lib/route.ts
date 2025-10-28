import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@repo/db/client";

export const authProvider = {
    providers: [

        CredentialsProvider({
            name: "email",
            credentials: {
            name: { label: "Name", type: "text", placeholder: "name" },
            email: { label: "Email", type: "text", placeholder: "your@gmail.com" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                interface credProps {
                    name: string;
                    email: string;
                    password: string;
                }
                const { name, email, password } = <credProps>credentials

                const hashPass = await bcrypt.hash(password, 10)

                const user = await prisma.user.findFirst({
                        where: {
                            email: email
                        }
                    })

                if (user) {
                    const validPass = await bcrypt.compare(password, user.password)

                    if (validPass) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    } else {
                        return null
                    }
                } else {

                    try {
                        const newUser = await prisma.user.create({
                            data: {
                                name: name,
                                email: email,
                                password: hashPass
                            }
                        })

                        return {
                            id: newUser.id,
                            name: newUser.name,
                            email: newUser.email
                        }                        
                    } catch(e) {
                        return null
                    }

                    }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({token, session} : any) {
            session.userId = token.sub
            return session
        }
    }
}