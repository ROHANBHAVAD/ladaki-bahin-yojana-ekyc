import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const term = searchTerm.trim();

    if (term) {
      navigate(`/search?q=${encodeURIComponent(term)}`);
      return;
    }

    navigate("/search");
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search eligibility, documents, eKYC..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="mt-3 w-full rounded-xl bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;