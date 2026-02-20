import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) =>
    location.pathname === path
      ? "text-yellow-400 font-semibold"
      : "text-white";

  return (
    <nav className="bg-[#1e1e1e] text-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <h2 className="text-xl sm:text-2xl font-bold hover:text-yellow-400 transition-colors z-50">
          Md Anas
        </h2>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-end mr-6 lg:mr-10 items-center gap-4">
          <ul className="flex space-x-4 lg:space-x-6 text-base lg:text-lg">
            <li>
              <Link to="/about" className={`${isActive("/about")} hover:opacity-75 transition-opacity`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`${isActive("/projects")} hover:opacity-75 transition-opacity`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`${isActive("/blog")} hover:opacity-75 transition-opacity`}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/services" className={`${isActive("/services")} hover:opacity-75 transition-opacity`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isActive("/contact")} hover:opacity-75 transition-opacity`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className={`${isActive("/login")} hover:opacity-75 transition-opacity text-yellow-400`}>
                Admin
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-all"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-300 hover:text-yellow-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-[#1e1e1e] shadow-lg transform transition-transform duration-300 border-r border-gray-700/50 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700/50">
          <h2 className="text-lg font-bold text-yellow-400">Menu</h2>
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col text-base px-4 py-2">
          <li>
            <Link
              to="/hero"
              className={`${isActive("/hero")} hover:text-yellow-400 py-3 block transition-colors border-b border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${isActive("/about")} hover:text-yellow-400 py-3 block transition-colors border-b border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${isActive("/projects")} hover:text-yellow-400 py-3 block transition-colors border-b border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${isActive("/blog")} hover:text-yellow-400 py-3 block transition-colors border-b border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${isActive("/services")} hover:text-yellow-400 py-3 block transition-colors border-b border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${isActive("/contact")} hover:text-yellow-400 py-3 block transition-colors border-b border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`${isActive("/login")} hover:text-yellow-400 py-3 block transition-colors text-yellow-400`}
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          </li>
          <li className="py-3 border-t border-gray-700/30">
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 text-yellow-400 hover:opacity-75 transition-opacity"
            >
              {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
