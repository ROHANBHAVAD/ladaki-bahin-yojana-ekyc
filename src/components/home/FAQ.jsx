import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is the Ladki Bahin Yojana?",
    answer:
      "The Ladki Bahin Yojana is a Maharashtra Government welfare scheme. Please refer to the latest official notification for current eligibility, benefits, and application procedures.",
  },
  {
    question: "Who can apply?",
    answer:
      "Eligibility depends on the latest government rules, including factors such as age, residence, income, and other criteria. Always verify the current official guidelines before applying.",
  },
  {
    question: "Which documents are generally required?",
    answer:
      "Commonly required documents may include Aadhaar Card, Bank Passbook, Income Certificate, Domicile Certificate, Mobile Number linked with Aadhaar, and other documents depending on your situation.",
  },
  {
    question: "How can I check my application status?",
    answer:
      "Application status can usually be checked through the official government portal using your registered mobile number or application ID.",
  },
  {
    question: "Is eKYC compulsory?",
    answer:
      "If the current government guidelines require eKYC, applicants should complete it before the application deadline.",
  },
  {
    question: "Is this website an official government website?",
    answer:
      "No. This is an independent informational website created to simplify government schemes. Always verify important information through official government sources.",
  },
  {
    question: "How often is information updated?",
    answer:
      "We aim to update guides and notices as new government announcements become available. Always verify time-sensitive information on the official portal.",
  },
  {
    question: "Can I apply through this website?",
    answer:
      "No. This website provides guidance only. Applications must be submitted through the official government portal or other officially authorized channels.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm">

            <HelpCircle size={18} />

            FAQ

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            Find answers to common questions about the scheme and application
            process. Information is provided for guidance and should always be
            verified using official government sources.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >

                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left p-6"
                >

                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={22}
                  />

                </button>

                {isOpen && (

                  <div className="px-6 pb-6 text-gray-600 leading-8 border-t bg-slate-50">

                    <p className="pt-5">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}