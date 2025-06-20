"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CardInfo from "../dashboard/_components/CardInfo";
import BarChartDashboard from "./_components/BarChartDashboard";
import { db } from "../../../utils/dbConfig";
import { Budgets, expenses } from "../../../utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";

function Dashboard() {
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
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Let’s Take Control, {user?.fullName} 💪</h2>
<p className="text-gray-600 text-sm mt-1">
  Smart budgeting starts here. Track, plan, and grow your savings.
</p>

      </header>

      {/* Overview Cards */}
      <section>
        <CardInfo budgetList={budgetList} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Left Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">Budget Overview</h3>
            <BarChartDashboard budgetList={budgetList} />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md mt-6">
            <h3 className="text-lg font-semibold mb-4">Latest Expenses</h3>
            <ExpenseListTable
              expensesList={expensesList}
              refreshData={() => getBudgetList()}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-md h-full">
            <h3 className="text-lg font-semibold mb-4">Latest Budgets</h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
