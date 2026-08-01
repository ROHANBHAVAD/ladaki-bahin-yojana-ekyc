import {
  Users,
  FileText,
  Bell,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Government Guides",
    value: "100+",
    description: "Detailed scheme guides",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Latest Updates",
    value: "Daily",
    description: "Fresh information",
    icon: Bell,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    title: "Trusted Content",
    value: "100%",
    description: "Based on official sources",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    title: "Visitors",
    value: "Growing",
    description: "Helping citizens every day",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            WEBSITE OVERVIEW
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Helping Citizens Find Information Faster
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Our goal is to make government schemes easier to understand
            through simple guides, document checklists, FAQs, eligibility
            information and timely updates.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-5xl font-bold mt-8">
                  {item.value}
                </h3>

                <h4 className="text-xl font-semibold mt-4">
                  {item.title}
                </h4>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}