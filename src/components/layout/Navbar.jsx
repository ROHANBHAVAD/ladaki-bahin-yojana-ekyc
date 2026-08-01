import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Landmark,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [schemeOpen, setSchemeOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-blue-700"
        : "text-gray-700 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-blue-700 flex items-center justify-center">

              <Landmark
                className="text-white"
                size={22}
              />

            </div>

            <div>

              <h1 className="font-bold text-lg text-gray-900">
                Maha Yojana Guide
              </h1>

              <p className="text-xs text-gray-500">
                Government Scheme Information
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setSchemeOpen(true)}
              onMouseLeave={() => setSchemeOpen(false)}
            >

              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium">

                Schemes

                <ChevronDown size={18} />

              </button>

              {schemeOpen && (

                <div className="absolute top-8 left-0 w-72 bg-white rounded-xl shadow-xl border py-3">

                  <NavLink
                    to="/ladki-bahin"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Majhi Ladki Bahin Yojana
                  </NavLink>

                  <div className="px-5 py-3 text-gray-400">
                    More schemes coming soon...
                  </div>

                </div>

              )}

            </div>

            <NavLink
              to="/about"
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
            >
              Contact
            </NavLink>

          </nav>

          {/* Search */}

          <div className="hidden lg:flex items-center">
            <Link
              to="/search"
              className="rounded-lg p-2 hover:bg-gray-100"
              aria-label="Search the site"
            >
              <Search size={20} />
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >

            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="lg:hidden bg-white border-t">

          <div className="px-4 py-4 space-y-3">

            <NavLink
              to="/"
              className="block"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/ladki-bahin"
              className="block"
              onClick={() => setMobileOpen(false)}
            >
              Majhi Ladki Bahin
            </NavLink>

            <NavLink
              to="/about"
              className="block"
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="block"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>

          </div>

        </div>

      )}

    </header>
  );
}