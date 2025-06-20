"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DollarSign, PieChart, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="bg-[#0d1117] text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center px-6 py-28">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Spend Smarter with <span className="text-white">SpendWise</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Track your expenses, stay on budget, and grow your savings — all in one sleek dashboard.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/sign-in">
            <span className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition shadow-md">
              Get Started
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <div className="bg-[#161b22] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <motion.div
            className="p-6 rounded-lg shadow-md hover:shadow-xl transition bg-[#21262d] border border-blue-700/40"
            whileHover={{ scale: 1.05 }}
          >
            <DollarSign className="mx-auto text-blue-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Track Every Rupee</h3>
            <p className="text-gray-400 text-sm">
              Log your expenses in seconds and see where your money is going.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-md hover:shadow-xl transition bg-[#21262d] border border-blue-700/40"
            whileHover={{ scale: 1.05 }}
          >
            <PieChart className="mx-auto text-blue-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Smart Budgeting</h3>
            <p className="text-gray-400 text-sm">
              Set limits, monitor your progress, and avoid overspending.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-md hover:shadow-xl transition bg-[#21262d] border border-blue-700/40"
            whileHover={{ scale: 1.05 }}
          >
            <ShieldCheck className="mx-auto text-blue-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Privacy First</h3>
            <p className="text-gray-400 text-sm">
              Your financial data is secure, encrypted, and never shared.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0d1117] text-gray-400 text-center py-6 text-sm border-t border-gray-800">
  Designed and developed by <span className="text-white font-semibold">Akshit Nair</span>
</footer>

    </section>
  );
}

export default Hero;
