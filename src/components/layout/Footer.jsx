import { Link } from "react-router-dom";
import {
  Landmark,
  Mail,
  ArrowUp,
  ExternalLink,
  Heart,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //hello

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Website */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">

                <Landmark
                  className="text-white"
                  size={22}
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  Maha Yojana Guide
                </h2>

                <p className="text-sm text-gray-400">
                  Maharashtra Government Schemes
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
              An independent information platform that explains
              Maharashtra Government schemes in a simple,
              organized, and easy-to-understand format.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/ladki-bahin"
                  className="hover:text-white transition"
                >
                  Majhi Ladki Bahin
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Legal
            </h3>

            <ul className="space-y-3">

              <li>

                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>

              </li>

              <li>

                <Link
                  to="/disclaimer"
                  className="hover:text-white transition"
                >
                  Disclaimer
                </Link>

              </li>

              <li>

                <a
                  href="#"
                  className="hover:text-white transition inline-flex items-center gap-2"
                >
                  Accessibility

                  <ExternalLink size={15} />

                </a>

              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="flex items-start gap-3">

              <Mail
                className="mt-1"
                size={18}
              />

              <div>

                <p>Email</p>

                <p className="text-gray-400">
                  rohanphysics123@gmail.com
                </p>

              </div>

            </div>

            <button
              onClick={scrollTop}
              className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl text-white inline-flex items-center gap-2"
            >

              <ArrowUp size={18} />

              Back to Top

            </button>

          </div>

        </div>

      </div>

      {/* Middle Notice */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-4 py-8">

          <div className="bg-yellow-900/30 border border-yellow-700 rounded-2xl p-6">

            <h3 className="text-yellow-300 font-semibold">
              Important Notice
            </h3>

            <p className="mt-3 text-gray-300 leading-7">
              Maha Yojana Guide is an independent informational website.
              We are <strong>not affiliated with</strong> the Government of
              India, Government of Maharashtra, or any government department.
              Always verify important information through official government
              notifications and websites before applying for any scheme.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400 text-center md:text-left">
            © {year} Maha Yojana Guide. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-400">

            Made with

            <Heart
              className="text-red-500"
              size={16}
            />

            for the people of Maharashtra

          </p>
          <p className="text-sm text-gray-400 text-center md:text-right">
            Independent informational resource for Maharashtra citizens.
          </p>

        </div>

      </div>

    </footer>
  );
}