export default function Navbar() {
  return (
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
  );
}
