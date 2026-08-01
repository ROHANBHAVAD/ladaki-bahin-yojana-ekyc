import {
  UserPlus,
  FileText,
  Upload,
  ShieldCheck,
  Search,
  CheckCircle2,
  Wallet,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Create Your Account",
    description:
      "Register on the official portal using your mobile number and basic details.",
    icon: UserPlus,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Prepare Required Documents",
    description:
      "Keep Aadhaar, bank details, income certificate and other required documents ready.",
    icon: FileText,
    color: "bg-purple-600",
  },
  {
    id: 3,
    title: "Submit Online Application",
    description:
      "Fill in the application carefully and upload all required documents.",
    icon: Upload,
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Complete eKYC",
    description:
      "Verify your identity using the approved eKYC process.",
    icon: ShieldCheck,
    color: "bg-green-600",
  },
  {
    id: 5,
    title: "Application Verification",
    description:
      "Authorities review your application and submitted documents.",
    icon: Search,
    color: "bg-cyan-600",
  },
  {
    id: 6,
    title: "Approval",
    description:
      "If everything is correct, your application is approved.",
    icon: CheckCircle2,
    color: "bg-emerald-600",
  },
  {
    id: 7,
    title: "Payment Processing",
    description:
      "The benefit amount is processed to your linked bank account if applicable.",
    icon: Wallet,
    color: "bg-pink-600",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            APPLICATION TIMELINE
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            Step-by-Step Application Journey
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            Follow these general steps to understand the application process.
            Exact steps may vary depending on the latest official government
            guidelines.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-200 rounded-full"></div>

          <div className="space-y-10">

            {timeline.map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.id}
                  className="relative flex flex-col md:flex-row md:items-start gap-6"
                >

                  {/* Icon */}

                  <div
                    className={`relative z-10 w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  >
                    <Icon size={30} />
                  </div>

                  {/* Content */}

                  <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 hover:shadow-xl transition">

                    <div className="flex flex-wrap justify-between items-center gap-4">

                      <h3 className="text-2xl font-bold">
                        Step {step.id}: {step.title}
                      </h3>

                      <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Stage {step.id}
                      </span>

                    </div>

                    <p className="text-gray-600 leading-8 mt-5">
                      {step.description}
                    </p>

                    {step.id !== timeline.length && (
                      <div className="mt-6 flex items-center text-blue-600 font-semibold">

                        Next Step

                        <ArrowRight className="ml-2" size={18} />

                      </div>
                    )}

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}