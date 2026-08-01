import {
  FileText,
  BadgeCheck,
  CreditCard,
  Wallet,
  Files,
  Bell,
  HelpCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Ladki Bahin Guide",
    description:
      "Complete guide including eligibility, documents and application process.",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    badge: "Popular",
  },
  {
    title: "Eligibility Checker",
    description:
      "Understand who can apply before starting your application.",
    icon: BadgeCheck,
    color: "bg-green-100 text-green-700",
    badge: "Useful",
  },
  {
    title: "Payment Status",
    description:
      "Learn how to check payment status and common payment issues.",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-700",
    badge: "Guide",
  },
  {
    title: "eKYC Process",
    description:
      "Step-by-step instructions for completing your eKYC successfully.",
    icon: Wallet,
    color: "bg-orange-100 text-orange-700",
    badge: "Updated",
  },
  {
    title: "Required Documents",
    description:
      "Checklist of all documents required before applying.",
    icon: Files,
    color: "bg-pink-100 text-pink-700",
    badge: "Checklist",
  },
  {
    title: "Latest Updates",
    description:
      "Latest announcements, deadlines and government notifications.",
    icon: Bell,
    color: "bg-red-100 text-red-700",
    badge: "Live",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Answers to the questions users ask most often.",
    icon: HelpCircle,
    color: "bg-indigo-100 text-indigo-700",
    badge: "FAQ",
  },
  {
    title: "Helpline",
    description:
      "Find official contact information and support resources.",
    icon: Phone,
    color: "bg-cyan-100 text-cyan-700",
    badge: "Support",
  },
];

export default function QuickServices() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="text-center mb-14">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
            QUICK ACCESS
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Everything You Need
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Find guides, eligibility, documents, payment information,
            FAQs and official resources from one place.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <button
                key={service.title}
                className="group bg-white rounded-3xl p-7 text-left shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >

                <div className="flex justify-between items-start">

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color}`}
                  >
                    <Icon size={30} />
                  </div>

                  <span className="text-xs font-semibold bg-gray-100 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>

                </div>

                <h3 className="text-xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7 text-sm">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mt-8 font-semibold text-blue-700 group-hover:gap-4 transition-all">

                  Explore

                  <ArrowRight size={18} />

                </div>

              </button>

            );
          })}

        </div>

      </div>

    </section>
  );
}