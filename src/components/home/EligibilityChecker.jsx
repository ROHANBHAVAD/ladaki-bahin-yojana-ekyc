import { useState } from "react";
import {
  BadgeCheck,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function EligibilityChecker() {
  const [form, setForm] = useState({
    age: "",
    income: "",
    district: "",
    resident: "",
    marital: "",
  });

  const [result, setResult] = useState(null);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function checkEligibility() {
    if (
      !form.age ||
      !form.income ||
      !form.district ||
      !form.resident ||
      !form.marital
    ) {
      setResult({
        eligible: false,
        message: "Please complete all fields.",
      });
      return;
    }

    if (
      Number(form.age) >= 18 &&
      Number(form.income) <= 250000 &&
      form.resident === "yes"
    ) {
      setResult({
        eligible: true,
        message:
          "Based on your answers, you may be eligible. Please verify the latest official eligibility criteria before applying.",
      });
    } else {
      setResult({
        eligible: false,
        message:
          "Based on your answers, you may not meet the sample criteria shown here. Please check the latest official guidelines.",
      });
    }
  }

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
            <BadgeCheck size={18} />
            ELIGIBILITY CHECKER
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            Quick Eligibility Estimate
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Answer a few questions to get an informational estimate.
            This tool does not replace the official government eligibility
            criteria.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="font-semibold">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="w-full mt-2 border rounded-xl p-4"
              />

            </div>

            <div>

              <label className="font-semibold">
                Annual Family Income
              </label>

              <input
                type="number"
                name="income"
                value={form.income}
                onChange={handleChange}
                placeholder="Enter income"
                className="w-full mt-2 border rounded-xl p-4"
              />

            </div>

            <div>

              <label className="font-semibold">
                District
              </label>

              <select
                name="district"
                value={form.district}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-4"
              >
                <option value="">Select</option>
                <option>Kolhapur</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
                <option>Nashik</option>
                <option>Satara</option>
                <option>Sangli</option>
                <option>Other</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Maharashtra Resident?
              </label>

              <select
                name="resident"
                value={form.resident}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-4"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

            </div>

            <div className="md:col-span-2">

              <label className="font-semibold">
                Marital Status
              </label>

              <select
                name="marital"
                value={form.marital}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-4"
              >
                <option value="">Select</option>
                <option>Married</option>
                <option>Unmarried</option>
                <option>Widowed</option>
                <option>Divorced</option>
              </select>

            </div>

          </div>

          <button
            onClick={checkEligibility}
            className="mt-10 bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-xl font-semibold"
          >
            Check Eligibility
          </button>

          {result && (
            <div
              className={`mt-10 rounded-2xl p-6 ${
                result.eligible
                  ? "bg-green-50 border border-green-300"
                  : "bg-red-50 border border-red-300"
              }`}
            >
              <div className="flex gap-4">

                {result.eligible ? (
                  <CheckCircle2 className="text-green-600" size={30} />
                ) : (
                  <AlertCircle className="text-red-600" size={30} />
                )}

                <div>

                  <h3 className="font-bold text-xl">
                    {result.eligible
                      ? "Possible Eligibility"
                      : "Please Verify"}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {result.message}
                  </p>

                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}