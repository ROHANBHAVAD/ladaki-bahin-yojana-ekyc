import { Shield, Lock, Cookie, Eye, Database, Mail } from "lucide-react";
import SEO from "../components/common/SEO";

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content:
        "We may collect information that you voluntarily provide, such as your name or email address when contacting us. We may also collect non-personal information including browser type, device information, pages visited, and general website usage statistics.",
    },
    {
      icon: Cookie,
      title: "Cookies",
      content:
        "Our website may use cookies to improve your browsing experience, remember preferences, analyze website traffic, and support future advertising services. You can disable cookies through your browser settings if you prefer.",
    },
    {
      icon: Eye,
      title: "Analytics",
      content:
        "We may use trusted analytics services to understand how visitors use our website. These services help us improve content quality, website performance, and user experience. Analytics providers may collect anonymous usage information.",
    },
    {
      icon: Lock,
      title: "Data Security",
      content:
        "We implement reasonable technical and organizational measures to protect information from unauthorized access, misuse, or disclosure. However, no internet transmission or electronic storage method can be guaranteed to be completely secure.",
    },
    {
      icon: Shield,
      title: "Third-Party Services",
      content:
        "Our website may contain links to official government websites or other trusted resources. We are not responsible for the privacy practices or content of external websites. Please review their privacy policies before sharing personal information.",
    },
  ];

  return (
    <main className="bg-gray-50">
      <SEO
        title="Privacy Policy | Maha Yojana Guide"
        description="Read how Maha Yojana Guide handles privacy, cookies, analytics, and data requests."
        keywords="Privacy policy, website privacy, Maharashtra scheme guide privacy"
        url="/privacy-policy"
      />

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-5xl lg:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl leading-9">
            Your privacy is important to us. This Privacy Policy explains how
            information is collected, used, and protected while using this
            website.
          </p>

          <p className="mt-4 text-blue-200">
            Last Updated: July 2026
          </p>

        </div>

      </section>

      {/* Sections */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-4 space-y-8">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >

                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                    <Icon
                      className="text-blue-700"
                      size={30}
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {section.title}
                    </h2>

                    <p className="mt-4 text-gray-600 leading-8">
                      {section.content}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Google AdSense */}

      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-yellow-50 border border-yellow-300 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-yellow-700">
              Advertising
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              In the future, this website may display advertisements provided by
              Google AdSense or other advertising partners. These services may
              use cookies to display personalized or non-personalized ads based
              on your browsing activity. You can learn more about Google's
              advertising practices through Google's Privacy Policy.
            </p>

          </div>

        </div>

      </section>

      {/* Rights */}

      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold">
              Your Rights
            </h2>

            <ul className="mt-8 space-y-4 text-gray-700 leading-8 list-disc pl-6">

              <li>Request information about the data you have shared with us.</li>

              <li>Request correction of inaccurate information.</li>

              <li>Request deletion of information where applicable.</li>

              <li>Choose whether to accept browser cookies.</li>

              <li>Contact us regarding any privacy concerns.</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-blue-700 text-white rounded-3xl p-10">

            <div className="flex items-center gap-4">

              <Mail size={34} />

              <h2 className="text-3xl font-bold">
                Contact Regarding Privacy
              </h2>

            </div>

            <p className="mt-6 text-blue-100 leading-8">
              If you have questions regarding this Privacy Policy, please
              contact us using the information available on our Contact page.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}