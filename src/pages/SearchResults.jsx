import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

// Mock search data - in a real app, this would come from an API
const mockSearchData = [
  { id: 1, title: 'Ladki Bahin Yojana Eligibility Criteria', description: 'Complete guide to eligibility requirements for Ladki Bahin Yojana', category: 'Eligibility', url: '/ladki-bahin#eligibility' },
  { id: 2, title: 'Required Documents for eKYC', description: 'List of all documents needed for successful eKYC verification', category: 'Documents', url: '/ladki-bahin#documents' },
  { id: 3, title: 'Step-by-Step eKYC Process', description: 'Detailed walkthrough of the eKYC verification process', category: 'eKYC', url: '/ladki-bahin#ekyc' },
  { id: 4, title: 'Payment Schedule and Amounts', description: 'Information about payment dates and amounts for beneficiaries', category: 'Payment', url: '/ladki-bahin#payment' },
  { id: 5, title: 'Common FAQs about Ladki Bahin', description: 'Frequently asked questions and their answers', category: 'FAQ', url: '/ladki-bahin#faq' },
  { id: 6, title: 'Official Government Portal Links', description: 'Direct links to official government websites and portals', category: 'Resources', url: '/ladki-bahin#resources' },
  { id: 7, title: 'How to Check Application Status', description: 'Guide on checking your application status online', category: 'Application', url: '/ladki-bahin#status' },
  { id: 8, title: 'Troubleshooting Common Issues', description: 'Solutions for common problems during application', category: 'Troubleshooting', url: '/ladki-bahin#troubleshooting' },
];

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim()) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const filteredResults = mockSearchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setLoading(false);
      }, 300);
    } else {
      setResults([]);
    }
  }, [query]);

  const categoryColors = {
    Eligibility: 'bg-green-100 text-green-800',
    Documents: 'bg-blue-100 text-blue-800',
    eKYC: 'bg-purple-100 text-purple-800',
    Payment: 'bg-yellow-100 text-yellow-800',
    FAQ: 'bg-pink-100 text-pink-800',
    Resources: 'bg-indigo-100 text-indigo-800',
    Application: 'bg-teal-100 text-teal-800',
    Troubleshooting: 'bg-orange-100 text-orange-800',
  };

  return (
    <>
      <SEO
        title={`Search Results: ${query} | Maha Yojana Guide`}
        description={`Search results for "${query}" on Maha Yojana Guide`}
        keywords={`search, ${query}, Maharashtra Government Schemes`}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
            <div className="mt-4">
              <p className="text-gray-600">
                Showing results for: <span className="font-semibold text-blue-600">"{query}"</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Search Results */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600">Searching...</span>
            </div>
          ) : query.trim() === '' ? (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700">Enter a search term</h3>
              <p className="text-gray-500 mt-2">Type something in the search box to find relevant information.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <div className="text-5xl mb-4">😕</div>
              <h3 className="text-xl font-semibold text-gray-700">No results found</h3>
              <p className="text-gray-500 mt-2">We couldn't find any matches for "{query}". Try different keywords.</p>
              <div className="mt-6">
                <p className="text-gray-600 mb-3">Try searching for:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['eligibility', 'documents', 'eKYC', 'payment', 'FAQ'].map((term) => (
                    <Link
                      key={term}
                      to={`/search?q=${term}`}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg transition"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <Link to={result.url}>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition">
                          {result.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mt-2">{result.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[result.category]}`}>
                      {result.category}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <Link
                      to={result.url}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Search Tips */}
          {results.length > 0 && (
            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Try using more specific keywords for better results
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Check spelling or try different variations of your search term
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Browse our main categories: Eligibility, Documents, eKYC, Payment, FAQ
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResults;