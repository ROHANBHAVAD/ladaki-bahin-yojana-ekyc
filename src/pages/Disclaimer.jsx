import {
  AlertTriangle,
  ShieldAlert,
  FileText,
  ExternalLink,
  Info,
  Scale,
} from "lucide-react";
import SEO from "../components/common/SEO";

export default function Disclaimer() {
  const items = [
    {
      icon: ShieldAlert,
      title: "Independent Website",
      content:
        "This website is an independent informational platform. We are not affiliated with, endorsed by, authorized by, or associated with the Government of India, the Government of Maharashtra, or any government department or agency.",
    },
    {
      icon: FileText,
      title: "Information Accuracy",
      content:
        "We make every reasonable effort to keep the information on this website accurate and up to date. However, government rules, eligibility criteria, benefits, deadlines, and application procedures may change at any time without prior notice.",
    },
    {
      icon: ExternalLink,
      title: "Official Sources",
      content:
        "Users should always verify important information through the official government website, official notification, or the relevant department before submitting any application or making decisions based on the information provided here.",
    },
    {
      icon: Scale,
      title: "No Professional Advice",
      content:
        "The information provided on this website is for general educational and informational purposes only. It should not be considered legal, financial, professional, or official government advice.",
    },
    {
      icon: Info,
      title: "External Links",
      content:
        "This website may contain links to official government portals and other third-party websites for the convenience of users. We are not responsible for the content, privacy practices, or availability of those external websites.",
    },
  ];

  return (
    <main className="bg-gray-50">
<SEO
title="Disclaimer | Maha Yojana Guide"
description="Disclaimer of Maha Yojana Guide."
keywords="Disclaimer"
url="/disclaimer"
/>
      {/* Hero */}

      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-5xl lg:text-6xl font-bold">
            Disclaimer
          </h1>

          <p className="mt-8 text-xl text-orange-100 max-w-3xl leading-9">
            Please read this disclaimer carefully before using this website.
          </p>

        </div>

      </section>

      {/* Important Notice */}

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-red-50 border border-red-300 rounded-3xl p-8">

            <div className="flex items-start gap-5">

              <AlertTriangle
                className="text-red-600 mt-1"
                size={42}
              />

              <div>

                <h2 className="text-3xl font-bold text-red-700">
                  Important Notice
                </h2>

                <p className="mt-6 text-gray-700 leading-8">
                  The information available on this website is published in good
                  faith for informational purposes only. While we strive to keep
                  our content accurate and updated, we do not guarantee the
                  completeness, reliability, or accuracy of any information.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Disclaimer Sections */}

      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4 space-y-8">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >

                <div className="flex gap-5 items-start">

                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

                    <Icon
                      className="text-orange-600"
                      size={30}
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-gray-600 leading-8">
                      {item.content}
                    </p>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </section>

      {/* User Responsibility */}

      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold">
              User Responsibility
            </h2>

            <ul className="mt-8 list-disc pl-6 space-y-4 text-gray-700 leading-8">

              <li>Always verify information from official government sources.</li>

              <li>Read the latest official notification before applying for any scheme.</li>

              <li>Check eligibility criteria directly on the official portal.</li>

              <li>Verify document requirements before submission.</li>

              <li>Do not rely solely on summarized information for legal or financial decisions.</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Liability */}

      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-yellow-50 border border-yellow-300 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-yellow-700">
              Limitation of Liability
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              We shall not be held responsible for any loss, inconvenience, or
              damages arising from the use of information available on this
              website. Users are responsible for verifying all information
              through official government sources before acting upon it.
            </p>

          </div>

        </div>

      </section>

      {/* Final Note */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-blue-700 text-white rounded-3xl p-10">

            <h2 className="text-3xl font-bold">
              Final Note
            </h2>

            <p className="mt-6 text-blue-100 leading-8">
              Our mission is to make government scheme information easier to
              understand. However, the official government notification,
              circular, portal, or department shall always prevail in case of
              any discrepancy between our content and official information.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}