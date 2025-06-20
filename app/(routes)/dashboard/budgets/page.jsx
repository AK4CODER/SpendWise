"use client";

import React from "react";
import BudgetList from "./_components/BudgetList";

function BudgetsPage() {
  return (
    <div className="p-6 sm:p-10 bg-blue-50 min-h-screen text-gray-800">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">My Budgets 💼</h2>
        <p className="text-sm text-gray-600 mt-1">
          Track your monthly budgets and stay in control of your spending.
        </p>
      </header>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <BudgetList />
      </div>
    </div>
  );
}

export default BudgetsPage;
