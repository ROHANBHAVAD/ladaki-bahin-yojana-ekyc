import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileText,
  Download,
  Printer,
  Circle,
} from "lucide-react";

const initialDocuments = [
  {
    id: 1,
    name: "Aadhaar Card",
    required: true,
  },
  {
    id: 2,
    name: "Domicile Certificate",
    required: true,
  },
  {
    id: 3,
    name: "Income Certificate",
    required: true,
  },
  {
    id: 4,
    name: "Bank Passbook",
    required: true,
  },
  {
    id: 5,
    name: "Passport Size Photograph",
    required: true,
  },
  {
    id: 6,
    name: "Mobile Number Linked with Aadhaar",
    required: true,
  },
  {
    id: 7,
    name: "Ration Card",
    required: false,
  },
  {
    id: 8,
    name: "Marriage Certificate (if applicable)",
    required: false,
  },
];

export default function DocumentChecklist() {
  const [checked, setChecked] = useState([]);

  function toggleDocument(id) {
    setChecked((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  const completed = checked.length;

  const progress = useMemo(() => {
    return Math.round(
      (completed / initialDocuments.length) * 100
    );
  }, [completed]);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm">

            <FileText size={18} />

            DOCUMENT CHECKLIST

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            Prepare Your Documents
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
            Tick the documents you already have. This checklist helps you
            prepare before starting an application. Always verify the latest
            official document requirements.
          </p>

        </div>

        {/* Card */}

        <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 shadow-lg">

          {/* Progress */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

            <div>

              <h3 className="text-2xl font-bold">
                Progress
              </h3>

              <p className="text-gray-600 mt-2">
                {completed} of {initialDocuments.length} documents completed
              </p>

            </div>

            <div className="flex gap-3">

              <button className="flex items-center gap-2 border rounded-xl px-5 py-3 hover:bg-gray-100 transition">

                <Printer size={18} />

                Print

              </button>

              <button className="flex items-center gap-2 bg-blue-700 text-white rounded-xl px-5 py-3 hover:bg-blue-800 transition">

                <Download size={18} />

                Download

              </button>

            </div>

          </div>

          {/* Progress Bar */}

          <div className="w-full h-4 rounded-full bg-gray-200 overflow-hidden mb-10">

            <div
              className="h-full bg-green-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          {/* Documents */}

          <div className="grid md:grid-cols-2 gap-5">

            {initialDocuments.map((document) => {

              const active = checked.includes(document.id);

              return (

                <button
                  key={document.id}
                  onClick={() => toggleDocument(document.id)}
                  className={`flex justify-between items-center p-5 rounded-2xl border transition-all text-left ${
                    active
                      ? "bg-green-50 border-green-400"
                      : "bg-white border-gray-200 hover:border-blue-400"
                  }`}
                >

                  <div>

                    <h4 className="font-semibold text-lg">
                      {document.name}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">

                      {document.required
                        ? "Required"
                        : "Optional"}

                    </p>

                  </div>

                  {active ? (
                    <CheckCircle2
                      className="text-green-600"
                      size={28}
                    />
                  ) : (
                    <Circle
                      className="text-gray-400"
                      size={26}
                    />
                  )}

                </button>

              );
            })}

          </div>

          {/* Note */}

          <div className="mt-10 rounded-2xl bg-yellow-50 border border-yellow-300 p-6">

            <p className="text-gray-700 leading-7">
              <strong>Important:</strong> This checklist is for informational
              purposes only. Required documents may change depending on the
              latest government guidelines, updates, or your individual
              circumstances.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}