import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-pink-600 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold">
          <Link to="/">Breast Care Foundation</Link>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-pink-200">Home</Link>
          <Link to="/about" className="hover:text-pink-200">About</Link>
          <Link to="/services" className="hover:text-pink-200">Programs</Link>
          <Link to="/blog" className="hover:text-pink-200">Blog</Link>
          <Link
            to="/donate"
            className="bg-white text-pink-600 px-4 py-1 rounded-full font-semibold hover:bg-pink-100"
          >
            Donate
          </Link>
          <Link to="/contact" className="hover:text-pink-200">Contact</Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-pink-700 px-6 pb-6 space-y-4">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/services" className="block">Programs</Link>
          <Link onClick={() => setMenuOpen(false)} to="/blog" className="block">Blog</Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/donate"
            className="block bg-white text-pink-600 text-center py-2 rounded-full font-semibold"
          >
            Donate
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
