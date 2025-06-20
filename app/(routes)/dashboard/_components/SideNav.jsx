"use client";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav({ isSideNavOpen, onClose }) {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen w-full md:w-64 p-5 border-r shadow-md bg-blue-50">
      {/* Header with BIG SpendWise */}
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl md:text-4xl font-extrabold text-blue-700 hover:text-blue-900">
  SpendWise
</Link>

        <button className="md:hidden p-2 text-gray-700" onClick={onClose}>
          <X />
        </button>
      </div>

      {/* Menu Items */}
      <div className="mt-10">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id} onClick={onClose}>
            <h2
              className={`flex gap-3 items-center text-base font-medium rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                path === menu.path
                  ? "bg-blue-200 text-blue-900"
                  : "text-gray-600 hover:bg-blue-100 hover:text-blue-800"
              }`}
            >
              <menu.icon size={20} />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Footer with User Info */}
      <div className="absolute bottom-10 left-5 flex items-center gap-3">
        <UserButton />
        <span className="text-gray-700 text-sm font-medium">Profile</span>
      </div>
    </div>
  );
}

export default SideNav;
