import { useState } from "react";
import {
  Mail,
  Bell,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();

    if (!email.trim()) return;

    // Future API call goes here

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">

      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">

              <Bell size={18} />

              NEVER MISS AN UPDATE

            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">
              Subscribe for Latest
              <br />
              Government Scheme Updates
            </h2>

            <p className="mt-6 text-blue-100 leading-8 text-lg">
              Receive important notifications, application deadlines,
              eligibility changes, document updates, and newly published
              government schemes directly in your inbox.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <CheckCircle2 size={22} />

                <span>Important government updates</span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2 size={22} />

                <span>Application deadline reminders</span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2 size={22} />

                <span>New scheme announcements</span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck size={22} />

                <span>Your email will never be shared.</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-gray-900">
              Join Our Newsletter
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Stay informed with the latest guides and government
              announcements.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8"
            >

              <div className="relative">

                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={22}
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email address"
                  className="w-full border rounded-xl pl-14 pr-4 py-4 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-blue-700 hover:bg-blue-800 transition text-white py-4 rounded-xl font-semibold text-lg"
              >
                Subscribe Now
              </button>

            </form>

            {success && (

              <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4">

                <p className="text-green-700 font-medium">
                  Thank you for subscribing! You'll receive future
                  updates once the newsletter service is connected.
                </p>

              </div>

            )}

            <p className="text-sm text-gray-500 mt-6 leading-7">
              By subscribing, you agree to receive informational emails.
              You can unsubscribe at any time. This website is an
              independent information platform and is not affiliated with
              the Government of Maharashtra.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}