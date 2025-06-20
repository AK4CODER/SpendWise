"use client";

import React, { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

function Header() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <header className="bg-white text-gray-900 px-6 py-4 flex justify-between items-center shadow-sm border-b border-gray-200">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-700">
          SpendWise
        </h1>
      </Link>

      {/* Auth Button */}
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-base font-semibold">
            Sign In
          </Button>
        </Link>
      )}
    </header>
  );
}

export default Header;
