import {
  Search,
  ArrowRight,
  ShieldCheck,
  Bell,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl"></div>

      {/* Main Content */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6">

              <ShieldCheck size={18} />

              Trusted Government Scheme Information

            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">

              Maharashtra Government
              <br />
              Scheme Information
              <br />
              Made Simple

            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8 max-w-2xl">

              Learn about eligibility,
              required documents,
              eKYC,
              application process,
              payment information,
              FAQs,
              and official resources through easy-to-understand guides.

            </p>

            {/* Search */}

            <div className="mt-10 bg-white rounded-2xl shadow-2xl overflow-hidden">

              <div className="flex">

                <div className="flex items-center px-5 text-gray-500">

                  <Search size={22} />

                </div>

                <input
                  type="text"
                  placeholder="Search schemes, eKYC, payment status..."
                  className="flex-1 py-5 outline-none text-gray-700"
                />

                <button className="bg-blue-700 hover:bg-blue-800 transition px-8 text-white font-semibold">

                  Search

                </button>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-white text-blue-700 px-7 py-4 rounded-xl font-semibold hover:shadow-2xl transition">

                Explore Guides

              </button>

              <button className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">

                Latest Updates

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-white rounded-3xl text-gray-800 shadow-2xl overflow-hidden">

              <div className="bg-blue-700 text-white px-8 py-5">

                <h2 className="text-2xl font-bold">

                  Quick Access

                </h2>

              </div>

              <div className="p-8 space-y-4">

                <QuickItem
                  icon={<FileText className="text-blue-700" />}
                  title="Ladki Bahin Guide"
                />

                <QuickItem
                  icon={<CheckCircle2 className="text-green-600" />}
                  title="Eligibility Checker"
                />

                <QuickItem
                  icon={<Bell className="text-orange-500" />}
                  title="Latest Government Updates"
                />

                <QuickItem
                  icon={<ShieldCheck className="text-purple-700" />}
                  title="Required Documents"
                />

                <QuickItem
                  icon={<ArrowRight className="text-blue-700" />}
                  title="Application Process"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function QuickItem({ icon, title }) {
  return (
    <button
      className="w-full flex items-center justify-between rounded-xl bg-slate-100 hover:bg-blue-50 transition p-5"
    >
      <div className="flex items-center gap-4">

        {icon}

        <span className="font-semibold">

          {title}

        </span>

      </div>

      <ArrowRight size={20} />
    </button>
  );
}