import React, { useState } from "react";

export default function Engagebay() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-[5%] py-4 bg-white">
        <div className="text-2xl font-bold text-primary">
          engage<span className="text-secondary">bay</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-primary">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Pricing
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Resources
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Login
          </a>
          <button className="px-6 py-2 rounded-full border border-secondary text-secondary hover:bg-red-50">
            Demo
          </button>
          <button className="px-6 py-2 rounded-full bg-secondary text-white hover:bg-opacity-90">
            Free Signup
          </button>
        </div>
      </nav>

      <div className="text-center px-[5%] py-16 bg-gradient-to-br from-red-50 to-white">
        <h1 className="text-5xl text-gray-800 mb-4 font-bold">
          Market better. Sell faster.
          <br />
          Support smarter
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          One platform for all your Marketing, Sales, and Support teams
        </p>

        <form onSubmit={handleSubmit} className="flex max-w-lg mx-auto gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-secondary text-white hover:bg-opacity-90"
          >
            Get Started
          </button>
        </form>

        <div className="flex justify-center gap-12 mt-8">
          <div className="flex items-center gap-2 text-gray-600 before:content-['✓'] before:text-primary before:font-bold">
            Free for 15 users
          </div>
          <div className="flex items-center gap-2 text-gray-600 before:content-['✓'] before:text-primary before:font-bold">
            No credit card required
          </div>
        </div>
      </div>
    </div>
  );
}
