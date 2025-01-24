import Navbar from "./navbar/navbar";

export default function Engagebay() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="text-center px-[5%] py-16 bg-gradient-to-br from-red-50 to-white">
        <h1 className="text-5xl text-gray-800 mb-4 font-bold">
          Market better. Sell faster.
          <br />
          Support smarter
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          One platform for all your Marketing, Sales, and Support teams
        </p>

        <form className="flex max-w-lg mx-auto gap-4">
          <input
            type="email"
            placeholder="Your email address"
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
