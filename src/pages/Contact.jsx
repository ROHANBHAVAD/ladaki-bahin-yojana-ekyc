import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import SEO from "../components/common/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleChange(event) {
const { name, value } = event.target;
setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
event.preventDefault();

const { name, email, subject, message } = formData;

if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
  setStatus({
    type: "error",
    message: "Please complete all fields before sending your message.",
  });
  return;
}

const mailtoLink = `mailto:support@mahayojanaguide.com?subject=${encodeURIComponent(`[Contact] ${subject.trim()}`)}&body=${encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`)}`;

window.location.href = mailtoLink;
setStatus({
  type: "success",
  message: "Your email app should open with a draft message. If it does not, email us directly at support@mahayojanaguide.com.",
});
  }

  return (
<main className="bg-gray-50">
  <SEO
    title="Contact | Maha Yojana Guide"
    description="Contact Maha Yojana Guide for scheme-related questions, feedback, or corrections."
    keywords="Contact Maha Yojana Guide, Maharashtra scheme support"
    url="/contact"
  />

  <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-24 text-white">
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-5xl font-bold lg:text-6xl">Contact Us</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
        Have a question, found incorrect information, or want to suggest an improvement? We would love to hear from you.
      </p>
    </div>
  </section>

  <section className="py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">
      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
          <Mail className="text-blue-700" size={30} />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Email</h3>
        <p className="mt-4 leading-7 text-gray-600">support@mahayojanaguide.com</p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
          <Clock className="text-green-700" size={30} />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Response Time</h3>
        <p className="mt-4 leading-7 text-gray-600">We aim to respond within 24–48 business hours.</p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
          <MapPin className="text-purple-700" size={30} />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Service Area</h3>
        <p className="mt-4 leading-7 text-gray-600">Maharashtra, India</p>
      </div>
    </div>
  </section>

  <section className="pb-24">
    <div className="mx-auto max-w-5xl px-4">
      <div className="rounded-3xl bg-white p-8 shadow-xl lg:p-12">
        <div className="mb-8 flex items-center gap-4">
          <MessageSquare className="text-blue-700" size={36} />
          <div>
            <h2 className="text-3xl font-bold">Send a Message</h2>
            <p className="mt-2 text-gray-600">
              Share your feedback, corrections, or questions. Your message will open in your email app for easy sending.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold">Full Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Email Address</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold">Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold">Message</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {status.message ? (
            <div className={`mt-6 rounded-xl border p-4 ${status.type === "error" ? "border-red-300 bg-red-50 text-red-700" : "border-green-300 bg-green-50 text-green-700"}`}>
              {status.message}
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>

  <section className="pb-24">
    <div className="mx-auto max-w-5xl px-4">
      <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-8">
        <div className="flex gap-4">
          <ShieldCheck className="mt-1 text-yellow-600" size={34} />
          <div>
            <h3 className="text-2xl font-bold">Before Contacting Us</h3>
            <p className="mt-4 leading-8 text-gray-700">
              We are an independent informational platform and cannot process government applications, modify application status, or provide official approvals. For official support, please contact the relevant government department or visit the official government portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}