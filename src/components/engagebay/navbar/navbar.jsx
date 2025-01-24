import Navlinks from "./navlinks";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-[5%] py-4 bg-white">
      <div className="text-2xl font-bold text-primary">engagebay</div>

      <div className="flex items-center gap-5">
        <Navlinks href="#" text="Products" />
        <Navlinks href="#" text="Pricing" />
        <Navlinks href="#" text="Resources" />
        <Navlinks href="#" text="Blog" />
        <Navlinks href="#" text="Login" />
        <button className="px-6 py-2  border border-secondary text-secondary hover:bg-red-50">
          Demo
        </button>
        <button className="px-6 py-2 bg-secondary text-white hover:bg-opacity-90">
          Free Signup
        </button>
      </div>
    </nav>
  );
}
