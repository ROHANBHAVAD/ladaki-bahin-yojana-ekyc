import {
  ArrowRight,
  BookOpen,
  Bell,
  FileText,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-purple-700/20 to-cyan-700/20" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">

        <div className="rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">

                <Bell size={16} />

                STAY INFORMED

              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                Get Accurate Government Scheme Information
                <br />
                In One Place
              </h2>

              <p className="mt-6 text-slate-300 text-lg leading-8">
                Browse detailed guides, document checklists, eligibility
                information, FAQs, timelines, and the latest updates—all
                presented in a simple, easy-to-understand format.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-2">

                  Explore Guides

                  <ArrowRight size={18} />

                </button>

                <button className="bg-white text-slate-900 hover:bg-slate-100 transition px-7 py-4 rounded-xl font-semibold flex items-center gap-2">

                  Latest Updates

                  <ExternalLink size={18} />

                </button>

              </div>

            </div>

            {/* Right */}

            <div className="grid gap-5">

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">

                    <BookOpen size={26} />

                  </div>

                  <div>

                    <h3 className="text-white font-semibold text-xl">
                      Detailed Guides
                    </h3>

                    <p className="text-slate-300 mt-1">
                      Step-by-step explanations for schemes.
                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center text-white">

                    <FileText size={26} />

                  </div>

                  <div>

                    <h3 className="text-white font-semibold text-xl">
                      Document Checklists
                    </h3>

                    <p className="text-slate-300 mt-1">
                      Prepare before you begin your application.
                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center text-white">

                    <ShieldCheck size={26} />

                  </div>

                  <div>

                    <h3 className="text-white font-semibold text-xl">
                      Trusted Information
                    </h3>

                    <p className="text-slate-300 mt-1">
                      Always verify important details using official government
                      notifications.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Notice */}

          <div className="mt-14 border-t border-white/10 pt-8">

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6">

              <h4 className="text-yellow-300 font-bold text-lg">
                Important Notice
              </h4>

              <p className="text-slate-300 mt-3 leading-8">
                This website is an independent information platform created to
                simplify government schemes. It is not an official Government
                of Maharashtra website. Always verify eligibility, required
                documents, deadlines, benefits, and application procedures
                through the relevant official government portal before taking
                action.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}