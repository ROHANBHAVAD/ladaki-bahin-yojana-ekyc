import { Link } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
} from "lucide-react";
import SEO from "../components/common/SEO";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4">
<SEO
title="404 - Page Not Found"
description="The page you requested does not exist."
url="/404"
/>
      <div className="max-w-3xl w-full">

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">

          {/* Icon */}

          <div className="mx-auto w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">

            <AlertTriangle
              className="text-red-600"
              size={60}
            />

          </div>

          {/* 404 */}

          <h1 className="text-7xl md:text-8xl font-black text-blue-700 mt-8">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900">
            Page Not Found
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-2xl mx-auto">
            Sorry, the page you are looking for doesn't exist,
            may have been moved, or is currently unavailable.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              <Home size={20} />

              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition"
            >
              <ArrowLeft size={20} />

              Go Back
            </button>

          </div>

          {/* Search Suggestion */}

          <div className="mt-12 border-t pt-10">

            <div className="flex items-center justify-center gap-3 text-blue-700 font-semibold">

              <Search size={22} />

              Popular Pages

            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-6">

              <Link
                to="/"
                className="px-5 py-3 rounded-full bg-blue-100 hover:bg-blue-200 transition text-blue-700 font-medium"
              >
                Home
              </Link>

              <Link
                to="/ladki-bahin"
                className="px-5 py-3 rounded-full bg-pink-100 hover:bg-pink-200 transition text-pink-700 font-medium"
              >
                Ladki Bahin
              </Link>

              <Link
                to="/about"
                className="px-5 py-3 rounded-full bg-green-100 hover:bg-green-200 transition text-green-700 font-medium"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="px-5 py-3 rounded-full bg-yellow-100 hover:bg-yellow-200 transition text-yellow-700 font-medium"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}