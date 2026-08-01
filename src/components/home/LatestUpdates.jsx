import {
  Bell,
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

const updates = [
  {
    id: 1,
    category: "Ladki Bahin",
    title: "Complete eKYC Guide",
    description:
      "Learn every step required to complete your eKYC successfully and avoid common mistakes.",
    date: "Today",
    time: "10 min ago",
    badge: "New",
  },
  {
    id: 2,
    category: "Government Notice",
    title: "Important Document Verification Tips",
    description:
      "Read this guide before uploading your documents to avoid application rejection.",
    date: "Today",
    time: "1 hour ago",
    badge: "Updated",
  },
  {
    id: 3,
    category: "Payment",
    title: "Payment Status Guide",
    description:
      "Understand payment verification, bank seeding and common payment issues.",
    date: "Yesterday",
    time: "5:30 PM",
    badge: "Popular",
  },
  {
    id: 4,
    category: "Application",
    title: "Application Process Explained",
    description:
      "A complete walkthrough from registration to final approval.",
    date: "Yesterday",
    time: "3:15 PM",
    badge: "Guide",
  },
];

export default function LatestUpdates() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>

            <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold text-sm">

              <Bell size={16} />

              LATEST UPDATES

            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5">
              Recent Information & Guides
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl leading-8">
              Browse the newest guides and updates. In the production version,
              this section will automatically load the latest information from
              your backend.
            </p>

          </div>

          <button className="border border-blue-600 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition font-semibold">
            View All Updates
          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {updates.map((item) => (

            <article
              key={item.id}
              className="group border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex justify-between items-start">

                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">

                  {item.category}

                </span>

                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">

                  {item.badge}

                </span>

              </div>

              <h3 className="text-2xl font-bold mt-6 group-hover:text-blue-700 transition">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-5 leading-8">

                {item.description}

              </p>

              <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-500 text-sm">

                <div className="flex items-center gap-2">

                  <CalendarDays size={16} />

                  {item.date}

                </div>

                <div className="flex items-center gap-2">

                  <Clock3 size={16} />

                  {item.time}

                </div>

              </div>

              <button className="flex items-center gap-2 mt-8 text-blue-700 font-semibold group-hover:gap-4 transition-all">

                Read Full Guide

                <ArrowRight size={18} />

              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}