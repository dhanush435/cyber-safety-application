import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { threatsAPI } from '../services/api';

const Threats = () => {
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchThreats();
    fetchCategories();
  }, [searchTerm, selectedCategory, selectedSeverity]);

  const fetchThreats = async () => {
    try {
      setLoading(true);
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedCategory) params.category = selectedCategory;
      if (selectedSeverity) params.severity = selectedSeverity;

      const response = await threatsAPI.getAll(params);
      setThreats(response.data);
    } catch (error) {
      console.error('Error fetching threats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await threatsAPI.getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'severity-critical';
      case 'High': return 'severity-high';
      case 'Medium': return 'severity-medium';
      case 'Low': return 'severity-low';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSeverity('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Cyber Threats Database
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive database of cyber threats. Learn about prevention methods, 
            recovery strategies, and stay informed about the latest security risks.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-neutral-900 rounded-lg shadow-md p-6 mb-8 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-200 mb-2">
                Search Threats
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or description..."
                className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-200 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Severity Filter */}
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-200 mb-2">
                Severity
              </label>
              <select
                id="severity"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Severities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory || selectedSeverity) && (
            <div className="mt-4">
              <button
                onClick={clearFilters}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            {loading ? 'Loading...' : `Found ${threats.length} threat${threats.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Threats Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          </div>
        ) : threats.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No threats found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search criteria or clear the filters.
            </p>
            <button
              onClick={clearFilters}
              className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat) => (
              <div key={threat._id} className="threat-card bg-neutral-900 rounded-lg border border-white/5 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{threat.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{threat.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                      {threat.category}
                    </span>
                  </div>

                  {/* Prevention Methods Preview */}
                  {threat.prevention && threat.prevention.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Prevention Tips:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {threat.prevention.slice(0, 2).map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {tip.title}
                          </li>
                        ))}
                        {threat.prevention.length > 2 && (
                          <li className="text-gray-400 text-xs">
                            +{threat.prevention.length - 2} more tips
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  <Link
                    to={`/threats/${threat._id}`}
                    className="block w-full bg-white text-black hover:bg-gray-200 text-center font-bold py-2 px-4 rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Threats;
