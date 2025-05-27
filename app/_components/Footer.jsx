import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-indigo-600">Finly</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="hover:text-indigo-600 transition">Landing Page</Link>
            <Link href="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link>
            <Link href="/dashboard/budgets" className="hover:text-indigo-600 transition">Budgets</Link>
            <Link href="/upgrade" className="hover:text-indigo-600 transition">Upgrade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
