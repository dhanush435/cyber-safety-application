import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { threatsAPI } from '../services/api';

const ThreatDetail = () => {
  const { id } = useParams();
  const [threat, setThreat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchThreat();
  }, [id]);

  const fetchThreat = async () => {
    try {
      setLoading(true);
      const response = await threatsAPI.getById(id);
      setThreat(response.data);
    } catch (error) {
      console.error('Error fetching threat:', error);
      setError('Failed to load threat details');
    } finally {
      setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error || !threat) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Threat Not Found</h2>
          <p className="text-gray-400 mb-6">{error || 'The requested threat could not be found.'}</p>
          <Link
            to="/threats"
            className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Back to Threats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li>/</li>
            <li><Link to="/threats" className="hover:text-blue-300">Threats</Link></li>
            <li>/</li>
            <li className="text-white">{threat.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-neutral-900 rounded-lg border border-white/5 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{threat.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">{threat.category}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(threat.severity)}`}>
                  {threat.severity} Severity
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/threats"
                className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded-lg"
              >
                ← Back to Threats
              </Link>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">{threat.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prevention Methods */}
          <div className="bg-neutral-900 rounded-lg border border-white/5 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-green-400 mr-3">🛡️</span>
              Prevention Methods
            </h2>
            {threat.prevention && threat.prevention.length > 0 ? (
              <div className="space-y-4">
                {threat.prevention.map((method, index) => (
                  <div key={index} className="border-l-4 border-green-500/80 pl-4">
                    <h3 className="font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-300">{method.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No specific prevention methods available for this threat.</p>
            )}
          </div>

          {/* Recovery Methods */}
          <div className="bg-neutral-900 rounded-lg border border-white/5 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">🔧</span>
              Recovery Methods
            </h2>
            {threat.recovery && threat.recovery.length > 0 ? (
              <div className="space-y-4">
                {threat.recovery.map((method, index) => (
                  <div key={index} className="border-l-4 border-blue-500/80 pl-4">
                    <h3 className="font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-300">{method.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No specific recovery methods available for this threat.</p>
            )}
          </div>
        </div>

        {/* Examples */}
        {threat.examples && threat.examples.length > 0 && (
          <div className="bg-neutral-900 rounded-lg border border-white/5 p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-yellow-400 mr-3">⚠️</span>
              Real-World Examples
            </h2>
            <div className="space-y-3">
              {threat.examples.map((example, index) => (
                <div key={index} className="bg-yellow-400/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-gray-200">{example}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics */}
        {threat.statistics && (
          <div className="bg-neutral-900 rounded-lg border border-white/5 p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-purple-400 mr-3">📊</span>
              Statistics & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {threat.statistics.affectedUsers && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {threat.statistics.affectedUsers.toLocaleString()}
                  </div>
                  <div className="text-gray-400">Affected Users</div>
                </div>
              )}
              {threat.statistics.financialLoss && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {threat.statistics.financialLoss}
                  </div>
                  <div className="text-gray-400">Financial Loss</div>
                </div>
              )}
              {threat.statistics.frequency && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {threat.statistics.frequency}
                  </div>
                  <div className="text-gray-400">Frequency</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-neutral-900 rounded-lg border border-white/5 p-8 mt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you've been affected by this threat or need additional assistance, 
              don't hesitate to reach out to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-lg"
              >
                Contact Support
              </Link>
              <Link
                to="/threats"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-lg"
              >
                Explore More Threats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetail;
