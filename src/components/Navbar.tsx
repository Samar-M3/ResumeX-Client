import Logo from "../assets/logooo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Features", path: "/features" },
    { name: "How it Works", path: "/howitworks" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            className="w-10 h-10 object-contain rounded-xl bg-slate-900 p-1 group-hover:scale-105 transition-transform"
            src={Logo}
            alt="ResumeX"
          />
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            Resume<span className="text-indigo-600">X</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-slate-600 font-medium text-sm lg:text-base hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Auth CTA buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/login"
            className="text-sm sm:text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors px-3 py-2"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-sm sm:text-base font-semibold bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-full shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

