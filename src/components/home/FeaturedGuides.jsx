import {
  ArrowRight,
  Clock3,
  BookOpen,
  BadgeCheck,
  Wallet,
  FileCheck,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

const guides = [
  {
    id: 1,
    title: "Ladki Bahin Yojana",
    description:
      "Complete guide covering eligibility, documents, application process, eKYC, payment details and FAQs.",
    category: "Government Scheme",
    readTime: "10 min read",
    icon: HeartHandshake,
    color: "from-pink-500 to-red-500",
  },
  {
    id: 2,
    title: "Document Checklist",
    description:
      "Prepare all important documents before starting your application.",
    category: "Documents",
    readTime: "6 min read",
    icon: FileCheck,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Eligibility Guide",
    description:
      "Understand eligibility rules with simple explanations and examples.",
    category: "Eligibility",
    readTime: "8 min read",
    icon: BadgeCheck,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "eKYC Process",
    description:
      "Learn every step required to complete eKYC successfully.",
    category: "Verification",
    readTime: "7 min read",
    icon: Wallet,
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 5,
    title: "Government Scholarships",
    description:
      "Explore scholarships available for eligible students in Maharashtra.",
    category: "Education",
    readTime: "9 min read",
    icon: GraduationCap,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 6,
    title: "Frequently Asked Questions",
    description:
      "Find answers to the questions users ask most often.",
    category: "FAQ",
    readTime: "5 min read",
    icon: BookOpen,
    color: "from-cyan-500 to-blue-500",
  },
];

export default function FeaturedGuides() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
            FEATURED GUIDES
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            Most Popular Guides
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            Our detailed guides explain government schemes in a simple,
            structured and easy-to-understand manner so that every
            citizen can understand the process with confidence.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {guides.map((guide) => {

            const Icon = guide.icon;

            return (

              <article
                key={guide.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                {/* Top */}

                <div
                  className={`bg-gradient-to-r ${guide.color} p-8 text-white`}
                >

                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">

                    <Icon size={32} />

                  </div>

                  <span className="inline-block mt-6 bg-white/20 px-3 py-1 rounded-full text-sm">

                    {guide.category}

                  </span>

                </div>

                {/* Body */}

                <div className="p-8">

                  <h3 className="text-2xl font-bold">

                    {guide.title}

                  </h3>

                  <p className="mt-5 text-gray-600 leading-7">

                    {guide.description}

                  </p>

                  <div className="flex items-center justify-between mt-8">

                    <div className="flex items-center gap-2 text-gray-500">

                      <Clock3 size={18} />

                      {guide.readTime}

                    </div>

                    <button
                      className="flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-4 transition-all"
                    >
                      Read Guide

                      <ArrowRight size={18} />

                    </button>

                  </div>

                </div>

              </article>

            );
          })}

        </div>

      </div>

    </section>
  );
}