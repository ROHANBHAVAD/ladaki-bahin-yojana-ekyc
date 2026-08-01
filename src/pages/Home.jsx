import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import SearchBox from "../components/home/SearchBox";
import AdsenseAd from "../components/common/AdsenseAd";
import StructuredData from "../common/StructuredData";

export default function Home() {
  return (
      <>
    <SEO
        title="Maha Yojana Guide | Maharashtra Government Schemes"
        description="Latest Maharashtra Government schemes, eligibility, benefits, required documents, and application guides."
        keywords="Maharashtra Government Schemes, Ladki Bahin, Government Schemes"
      />
      <StructuredData
        pageName="Maha Yojana Guide Home"
        pageDescription="Independent information guide for Maharashtra Government schemes, including eligibility, documents, and eKYC guidance."
        pageUrl="/"
      />
 
      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                Maharashtra Government Scheme Portal
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight">

                Complete Ladki Bahin eKYC Guide

              </h1>

              <p className="mt-8 text-lg text-blue-100 leading-8">

                Everything about eligibility,
                documents,
                eKYC,
                payment,
                FAQs,
                and official resources
                in one place.

              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  to="/ladki-bahin"
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-7 py-4 rounded-xl"
                >
                  Read Complete Guide
                </Link>

                <a
                 href="#latest"
                 className="border-2 border-white px-7 py-4 rounded-xl text-center"
                >
                 Latest Updates
                </a>

              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">

                <div>

                  <h2 className="text-3xl font-bold">
                    10+
                  </h2>

                  <p>
                    Guides
                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    50+
                  </h2>

                  <p>
                    FAQs
                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    24×7
                  </h2>

                  <p>
                    Information
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-800">

                <h2 className="text-3xl font-bold">

                  Quick Search

                </h2>

                <SearchBox />

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="bg-blue-50 rounded-xl p-5">

                    📄 Documents

                  </div>

                  <div className="bg-green-50 rounded-xl p-5">

                    ✅ Eligibility

                  </div>

                  <div className="bg-yellow-50 rounded-xl p-5">

                    🏦 Payment

                  </div>

                  <div className="bg-pink-50 rounded-xl p-5">

                    ❓ FAQ

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <AdsenseAd slot="1234567890" className="mx-auto" style={{ maxWidth: "728px" }} />
        </div>
      </section>
       
            {/* POPULAR GUIDES */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-slate-800">

              Popular Guides

            </h2>

            <p className="text-gray-600 mt-4">

              Everything you need to understand the scheme in simple language.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <Link
              to="/ladki-bahin"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 hover:-translate-y-2"
            >

              <div className="text-5xl">📄</div>

              <h3 className="text-2xl font-bold mt-6">

                Documents

              </h3>

              <p className="mt-4 text-gray-600">

                Required documents before completing eKYC.

              </p>

            </Link>

            <Link
              to="/ladki-bahin"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 hover:-translate-y-2"
            >

              <div className="text-5xl">✅</div>

              <h3 className="text-2xl font-bold mt-6">

                Eligibility

              </h3>

              <p className="mt-4 text-gray-600">

                Check who may be eligible for the scheme.

              </p>

            </Link>

            <Link
              to="/ladki-bahin"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 hover:-translate-y-2"
            >

              <div className="text-5xl">🏦</div>

              <h3 className="text-2xl font-bold mt-6">

                Payment Guide

              </h3>

              <p className="mt-4 text-gray-600">

                Understand payment-related information and common issues.

              </p>

            </Link>

            <Link
              to="/ladki-bahin"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 hover:-translate-y-2"
            >

              <div className="text-5xl">❓</div>

              <h3 className="text-2xl font-bold mt-6">

                FAQs

              </h3>

              <p className="mt-4 text-gray-600">

                Frequently asked questions answered clearly.

              </p>

            </Link>

          </div>

        </div>

      </section>

      {/* LATEST UPDATES */}

      <section
        id="latest"
        className="py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>

              <h2 className="text-4xl font-bold">

                Latest Updates

              </h2>

              <p className="text-gray-600 mt-3">

                Stay informed with recent information and guidance.

              </p>

            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

              Updated Regularly

            </span>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">

            <div className="bg-blue-50 rounded-2xl p-8">

              <h3 className="text-2xl font-bold">

                eKYC Information

              </h3>

              <p className="mt-4 text-gray-700 leading-7">

                Learn how to complete the eKYC process step by step.

              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-8">

              <h3 className="text-2xl font-bold">

                Payment Information

              </h3>

              <p className="mt-4 text-gray-700 leading-7">

                Guidance about payment-related topics and common questions.

              </p>

            </div>

            <div className="bg-yellow-50 rounded-2xl p-8">

              <h3 className="text-2xl font-bold">

                Official Resources

              </h3>

              <p className="mt-4 text-gray-700 leading-7">

                Find official websites and important contacts in one place.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* WHY CHOOSE MAHAGUIDE */}

      <section className="py-20 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-slate-800">

              Why Choose MahaGuide?

            </h2>

            <p className="text-gray-600 mt-4">

              Simple, organized and easy-to-understand information.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mt-6">

                Fast Information

              </h3>

              <p className="text-gray-600 mt-4">

                Important information is presented clearly without unnecessary complexity.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <div className="text-5xl">
                📱
              </div>

              <h3 className="text-2xl font-bold mt-6">

                Mobile Friendly

              </h3>

              <p className="text-gray-600 mt-4">

                Designed to work well on mobile phones, tablets and desktops.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <div className="text-5xl">
                🔒
              </div>

              <h3 className="text-2xl font-bold mt-6">

                Independent Guide

              </h3>

              <p className="text-gray-600 mt-4">

                We provide informational guidance. Always verify important details through official government sources.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* WEBSITE STATS */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>

              <h2 className="text-5xl font-bold">
                10+
              </h2>

              <p className="mt-3">
                Guides
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                50+
              </h2>

              <p className="mt-3">
                Questions Answered
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                24×7
              </h2>

              <p className="mt-3">
                Online Access
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                100%
              </h2>

              <p className="mt-3">
                Free Information
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FAQ PREVIEW */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">

            Frequently Asked Questions

          </h2>

          <div className="mt-12 space-y-6">

            <div className="border rounded-xl p-6">

              <h3 className="font-bold text-xl">

                Who may be eligible?

              </h3>

              <p className="mt-3 text-gray-600">

                Eligibility depends on the current official rules. Always check the latest government notification before applying.

              </p>

            </div>

            <div className="border rounded-xl p-6">

              <h3 className="font-bold text-xl">

                Which documents are required?

              </h3>

              <p className="mt-3 text-gray-600">

                Required documents vary. Refer to the latest official guidance before submitting any application.

              </p>

            </div>

            <div className="border rounded-xl p-6">

              <h3 className="font-bold text-xl">

                How do I complete eKYC?

              </h3>

              <p className="mt-3 text-gray-600">

                Follow the official process and verify each step using the relevant government portal or authorized service.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">

            Start Exploring Maharashtra Government Schemes

          </h2>

          <p className="mt-6 text-xl text-blue-100">

            Find guides, eligibility information, required documents,
            FAQs and useful resources.

          </p>

          <Link
            to="/ladki-bahin"
            className="inline-block mt-10 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition"
          >

            Read the Guide

          </Link>

        </div>

      </section>

    </>
  );
}