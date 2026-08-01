import { Bell, ArrowRight } from "lucide-react";

const updates = [
  {
    id: 1,
    category: "Latest Update",
    title: "Ladki Bahin Scheme information updated.",
    color: "bg-red-500",
  },
  {
    id: 2,
    category: "Important",
    title: "Check official announcements before applying for any scheme.",
    color: "bg-green-600",
  },
  {
    id: 3,
    category: "Guide",
    title: "Read the complete eligibility and required documents guide.",
    color: "bg-blue-600",
  },
  {
    id: 4,
    category: "Notice",
    title: "Application dates and rules may change. Always verify with official sources.",
    color: "bg-orange-500",
  },
];

export default function LiveTicker() {
  return (
    <section className="bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 py-4">

          {/* Left */}

          <div className="flex items-center gap-3 bg-red-600 text-white px-5 py-2 rounded-full font-semibold shrink-0">

            <Bell size={18} />

            LIVE UPDATES

          </div>

          {/* Right */}

          <div className="flex-1 overflow-hidden">

            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">

              {updates.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[320px] bg-gray-50 border rounded-xl p-4 hover:shadow-lg transition duration-300"
                >

                  <div className="flex items-center justify-between mb-3">

                    <span
                      className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${item.color}`}
                    >
                      {item.category}
                    </span>

                    <ArrowRight size={18} className="text-gray-500" />

                  </div>

                  <p className="text-gray-700 leading-6">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}