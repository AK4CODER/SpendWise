# 💸 SpendWise – Smart Expense Tracker 💡

SpendWise is a sleek, modern expense tracking web app built with **Next.js 14**, **TailwindCSS**, **Shadcn/UI**, and **Clerk Authentication**. It helps you manage budgets and expenses efficiently with a beautiful, user-friendly dashboard.

---

## ✨ Features

- ⚡ Built with **Next.js 14 (App Router)**
- 🎨 Styled using **TailwindCSS + Shadcn/UI**
- 🔐 **Clerk Authentication** (Sign In / Sign Up)
- 📊 Budget and Expense Management Dashboard
- 📈 Interactive **Bar Chart Visualization**
- 📦 **Drizzle ORM + PostgreSQL** for database
- 💡 Light Theme Matching the Brand
- 🔍 Organized Dashboard: Budgets, Expenses, Overview
- 🧩 Fully Responsive Design
- 🚀 Deployed on **Vercel**

---

## 📌 About the Project

SpendWise helps you track your budgets and spending habits in a simple and intuitive way. Whether you're saving up or trying to control daily expenses, SpendWise gives you real-time insights and financial clarity.

---

## 🔗 Live App

👉 Visit SpendWise Live on Vercel: [SpendWise](https://spend-wise-woad-omega.vercel.app/)

---

## 🛠️ Tech Stack

| Tech         | Description                        |
|--------------|------------------------------------|
| Next.js      | React Framework with App Router    |
| Clerk        | Authentication (Email & Social)    |
| Drizzle ORM  | Type-safe SQL ORM for PostgreSQL   |
| PostgreSQL   | Relational Database                |
| TailwindCSS  | Utility-first CSS framework        |
| Shadcn/UI    | Accessible component library       |
| Vercel       | Deployment Platform                |

---


## 🖼️ Screenshots

![Screenshot](https://github.com/user-attachments/assets/969b8c21-4fb0-4fce-bb11-87183fb93ee6)  
![Screenshot](https://github.com/user-attachments/assets/2c3294ed-3a52-4366-ba95-f7113104bfb3)  
![Screenshot](https://github.com/user-attachments/assets/521722db-154a-464d-a799-01b250701dc1)  
![Screenshot](https://github.com/user-attachments/assets/a5f70d68-c4b1-4d37-a772-bec773fa1826)  
![Screenshot](https://github.com/user-attachments/assets/2731d851-463b-48c5-98fb-478fac9054f3)  

---

## 🛠️ .env.local Setup

Create a `.env.local` file in the root directory and add the following:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHJvLWphd2Zpc2gtMi5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_roVzaKRgxpnju56lSBfP58oM3OpHD9T4C1TXrptQXo
NEXT_PUBLIC_CLERK_SIGN_IN_URL=http://localhost:3000/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=http://localhost:3000/sign-up
NEXT_PUBLIC_DATABASE_URL=postgresql://postgres:1234@localhost:5432/spendwise_db
```


