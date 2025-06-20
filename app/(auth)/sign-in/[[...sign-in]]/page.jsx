"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-blue-50 text-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-xl bg-white border border-blue-200 shadow-xl">
        {/* Logo / Branding */}
        <div className="mb-6 text-center">
          <Link href="/" className="text-3xl font-extrabold text-blue-600">
            SpendWise
          </Link>
          <p className="text-gray-600 mt-2 text-sm">
            Welcome back! Sign in to manage your expenses.
          </p>
        </div>

        {/* Clerk Sign In Component */}
        <div className="mt-4">
          <SignIn
            appearance={{
              elements: {
                card: "shadow-none bg-transparent border-none",
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold",
              },
              variables: {
                colorPrimary: "#3b82f6",
                colorText: "#1e293b",
                colorBackground: "#ffffff",
              },
            }}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600 hover:underline">
            Sign up for free
          </Link>
        </div>
      </div>
    </section>
  );
}
