# 💸 S-Pay — A Simplified Payment Platform

S-Pay is a modern payment web application inspired by Paytm, built with **Next.js 15**, **TypeScript**, **NextAuth**, **Prisma**, and a reusable **monorepo architecture**.  
It allows users to register, log in, add money to their balance, and view transaction history — all in a clean, modern UI.

---

## 🚀 Features

- 🔐 **User Authentication** with NextAuth & Credential Provider  
- 💳 **Add Money** via Bank (HDFC, AXIS, SBI demo options)  
- 💰 **Balance Tracking** with Locked/Unlocked funds  
- 📜 **On-Ramp Transactions** using Prisma ORM  
- ⚙️ **Reusable Monorepo Setup** (`apps/`, `packages/`)  
- 🧠 **Global State Management** using Zustand  
- 🖥️ **Clean Dashboard UI** with Tailwind CSS  

---

## 🧩 Tech Stack

| Category | Tech |
|-----------|------|
| Framework | [Next.js 15 (App Router + Turbopack)](https://nextjs.org) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Auth | [NextAuth.js](https://next-auth.js.org) |
| Database ORM | [Prisma](https://www.prisma.io) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) |
| Backend | Express.js (for bank webhook simulation) |
| Monorepo Tools | [Turborepo](https://turbo.build/repo) |

---

## 📁 Project Structure
S-Pay/
│
├── apps/
│ ├── web/ # Next.js frontend app
│ └── bank-webhook/ # Express.js webhook receiver
│
├── packages/
│ ├── db/ # Shared Prisma client & schema
│ ├── store/ # Zustand stores (user, balance, etc.)
│ └── ui/ # Shared UI components (Sidebar, Icons, etc.)
│
├── prisma/
│ └── schema.prisma # Prisma schema
│
└── README.md
