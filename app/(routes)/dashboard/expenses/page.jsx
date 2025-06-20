"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/dbConfig";
import { Budgets, expenses } from "../../../../utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import ExpenseListTable from "./_components/ExpenseListTable";

function ExpensesPage() {
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) getBudgetList();
  }, [user]);

  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(expenses, eq(Budgets.id, expenses.budgetId))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
    getAllExpenses();
  };

  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: expenses.id,
        name: expenses.name,
        amount: expenses.amount,
        createdAt: expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(expenses, eq(Budgets.id, expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(expenses.id));

    setExpensesList(result);
  };

  return (
    <div className="p-6 sm:p-10 bg-blue-50 min-h-screen text-gray-800">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Your Expenses 💸</h2>
        <p className="text-sm text-gray-600 mt-1">
          Review and manage all your spending in one place.
        </p>
      </header>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Latest Expenses</h3>
        <ExpenseListTable
          expensesList={expensesList}
          refreshData={() => getBudgetList()}
        />
      </div>
    </div>
  );
}

export default ExpensesPage;
