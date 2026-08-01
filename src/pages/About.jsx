import {
  ShieldCheck,
  Target,
  Eye,
  Users,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/common/SEO";

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Easy-to-Understand Guides",
      description:
        "We simplify government schemes into clear, step-by-step guides for everyone.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Information",
      description:
        "Our content is based on publicly available official information and is regularly reviewed.",
    },
    {
      icon: Users,
      title: "Citizen Focused",
      description:
        "Designed to help students, families, job seekers, senior citizens, and every citizen looking for government schemes.",
    },
  ];

  return (

    
    <main className="bg-gray-50">
<SEO
title="About | Maha Yojana Guide"
description="Learn about Maha Yojana Guide."
keywords="About"
url="/about"
/>
      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-5xl lg:text-6xl font-bold">
            About Maha Yojana Guide
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl leading-9">
            Maha Yojana Guide is an independent information platform created to
            help citizens understand Maharashtra Government schemes through
            simple explanations, guides, FAQs, and document checklists.
          </p>

        </div>

      </section>

      {/* About */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

          <div>

            <h2 className="text-4xl font-bold">
              Our Purpose
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Government schemes are often spread across multiple websites,
              PDFs, circulars, and notifications. Our goal is to organize this
              information into a simple and user-friendly format so that people
              can understand eligibility, documents, benefits, and application
              processes more easily.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We do not process applications or provide official government
              services. Instead, we aim to make publicly available information
              easier to understand and access.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="flex gap-4">

              <Target className="text-blue-700" size={36} />

              <div>

                <h3 className="text-2xl font-bold">
                  Mission
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  To simplify government schemes and improve access to useful,
                  organized information for every citizen.
                </p>

              </div>

            </div>

            <div className="flex gap-4 mt-10">

              <Eye className="text-green-600" size={36} />

              <div>

                <h3 className="text-2xl font-bold">
                  Vision
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  To become one of the most trusted independent resources for
                  Maharashtra Government scheme information.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-center text-4xl font-bold">
            Why Use This Website?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="rounded-3xl border bg-gray-50 p-8 hover:shadow-xl transition"
                >

                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                    <Icon
                      className="text-blue-700"
                      size={30}
                    />

                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-4xl font-bold text-center">
              Our Principles
            </h2>

            <div className="mt-12 space-y-6">

              {[
                "Provide clear and understandable information.",
                "Respect user privacy.",
                "Keep information updated whenever possible.",
                "Clearly distinguish between official information and our explanations.",
                "Encourage users to verify important details on official government portals.",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex gap-4 items-start"
                >

                  <CheckCircle2
                    className="text-green-600 mt-1"
                    size={24}
                  />

                  <p className="text-gray-700 text-lg leading-8">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Disclaimer */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-4">

          <div className="rounded-3xl bg-yellow-50 border border-yellow-300 p-8">

            <h3 className="text-2xl font-bold text-yellow-700">
              Important Notice
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Maha Yojana Guide is an independent informational website. We are
              not affiliated with the Government of Maharashtra or any
              government department. Users should always verify eligibility,
              benefits, deadlines, and application procedures through official
              government websites before making decisions.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}