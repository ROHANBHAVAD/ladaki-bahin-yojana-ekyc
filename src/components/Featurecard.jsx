import { Link } from "react-router-dom";

export default function FeatureCard({
    title,
    description,
    icon
}) {

    return (

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6">

            <div className="text-5xl">
                {icon}
            </div>

            <h2 className="text-2xl font-bold mt-5">
                {title}
            </h2>

            <p className="text-gray-600 mt-3">
                {description}
            </p>

            <Link
                to="/ladki-bahin"
                className="inline-block mt-6 text-blue-700 font-semibold"
            >
                Read →
            </Link>

        </div>

    );

}