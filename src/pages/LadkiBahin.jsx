import {
  Heart,
  IndianRupee,
  FileText,
  UserCheck,
  Calendar,
  ShieldCheck,
  ExternalLink,
  Clock,
  BookOpen,
  Bell,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/common/SEO";
import AdsenseAd from "../components/common/AdsenseAd";
import StructuredData from "../common/StructuredData";

export default function LadkiBahin() {
  const sections = [
    {
      icon: UserCheck,
      title: "Eligibility",
      description:
        "Learn who can apply, age criteria, residency requirements, and other eligibility conditions.",
    },
    {
      icon: FileText,
      title: "Required Documents",
      description:
        "Find the list of documents required before submitting an application.",
    },
    {
      icon: IndianRupee,
      title: "Benefits",
      description:
        "Understand the financial assistance and benefits available under the scheme.",
    },
    {
      icon: Calendar,
      title: "Application Process",
      description:
        "Step-by-step guide explaining how to apply online and offline.",
    },
    {
      icon: Clock,
      title: "Latest Updates",
      description:
        "Stay informed about notifications, circulars, and important announcements.",
    },
    {
      icon: BookOpen,
      title: "Frequently Asked Questions",
      description:
        "Answers to the most commonly asked questions regarding the scheme.",
    },
  ];

  return (
    <main className="bg-gray-50">
<SEO
title="Majhi Ladki Bahin Yojana | Maha Yojana Guide"
description="Complete guide to Majhi Ladki Bahin Yojana."
keywords="Majhi Ladki Bahin Yojana"
url="/ladki-bahin"
/>
  <StructuredData
    pageName="Majhi Ladki Bahin Yojana"
    pageDescription="Detailed informational guide covering eligibility, documents, benefits, and application guidance for Majhi Ladki Bahin Yojana."
    pageUrl="/ladki-bahin"
  />
  {/* Hero */}

      <section className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-4">

          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Heart size={18} />
            Maharashtra Government Scheme
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold">
            Majhi Ladki Bahin Yojana
          </h1>

          <p className="mt-8 text-xl text-pink-100 max-w-3xl leading-9">
            Everything you need to know about the Majhi Ladki Bahin Yojana in
            one place—eligibility, required documents, benefits, application
            process, FAQs, and official resources.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#overview"
              className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Explore Guide
            </a>

            <a
              href="#official"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-purple-700 transition"
            >
              Official Links
            </a>

          </div>

        </div>

      </section>

      {/* Overview */}

      <section
        id="overview"
        className="py-20"
      >

        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-4xl font-bold">
              Scheme Overview
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              This page is dedicated to providing organized and easy-to-understand
              information about the Majhi Ladki Bahin Yojana. Our detailed guide
              is currently being expanded with verified information from official
              government sources.
            </p>

            <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-6">

              <div className="flex items-center gap-3">

                <Bell className="text-blue-700" />

                <h3 className="text-xl font-bold text-blue-700">
                  Content Update in Progress
                </h3>

              </div>

              <p className="mt-4 text-gray-700 leading-8">
                We are preparing comprehensive content including eligibility,
                required documents, application process, payment status,
                important dates, FAQs, and official circulars.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <AdsenseAd slot="2345678901" className="mx-auto" style={{ maxWidth: "728px" }} />
        </div>
      </section>

      {/* Feature Cards */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center">
            What You'll Find Here
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {sections.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">

                    <Icon
                      className="text-purple-700"
                      size={30}
                    />

                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center gap-2 mt-6 text-purple-700 font-semibold">
                    Coming Soon
                    <ArrowRight size={18} />
                  </span>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Official */}

      <section
        id="official"
        className="pb-20"
      >

        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="flex items-center gap-4">

              <ShieldCheck
                className="text-green-600"
                size={36}
              />

              <h2 className="text-3xl font-bold">
                Official Resources
              </h2>

            </div>

            <p className="mt-6 text-gray-600 leading-8">
              Always verify important information through official Government
              of Maharashtra portals before submitting any application.
            </p>

            <div className="mt-8">

              <button
                disabled
                className="bg-gray-200 text-gray-500 cursor-not-allowed px-6 py-3 rounded-xl inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Official Portal (Coming Soon)
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-gradient-to-r from-purple-700 to-pink-600 rounded-3xl text-white p-12 text-center">

            <h2 className="text-4xl font-bold">
              More Government Schemes Coming Soon
            </h2>

            <p className="mt-6 text-purple-100 text-lg leading-8 max-w-3xl mx-auto">
              We are building a comprehensive Maharashtra Government Scheme
              Guide that will include eligibility, benefits, document checklists,
              application guides, FAQs, and official updates for multiple
              schemes.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}