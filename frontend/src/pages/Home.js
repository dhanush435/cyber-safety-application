import React from 'react';
import { Link } from 'react-router-dom';
import ThreatRow from '../components/ThreatRow';
import { threatsAPI } from '../services/api';

const Home = () => {
  const [threats, setThreats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchThreats = async () => {
      try {
        const response = await threatsAPI.getAll({ limit: 6 });
        setThreats(response.data);
      } catch (error) {
        console.error('Error fetching threats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchThreats();
  }, []);

  const features = [
    {
      icon: '🛡️',
      title: 'Comprehensive Threat Database',
      description: 'Access detailed information about various cyber threats including phishing, ransomware, and more.'
    },
    {
      icon: '🔍',
      title: 'Search & Filter',
      description: 'Quickly find specific threats using our advanced search and filtering capabilities.'
    },
    {
      icon: '📚',
      title: 'Educational Content',
      description: 'Learn prevention methods and recovery strategies for each type of cyber threat.'
    },
    {
      icon: '💬',
      title: 'Community Feedback',
      description: 'Share your experiences and get help from our community of security experts.'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Billboard */}
      <section className="relative h-[60vh] md:h-[70vh] cyber-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[60vh] md:h-[70vh] flex items-end pb-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Cyber Safety</h1>
              <p className="max-w-2xl text-gray-200 mb-6">
                Browse threats, learn prevention and recovery—curated like your favorite shows.
              </p>
              <div className="flex gap-3">
                <Link to="/threats" className="bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-gray-200">Explore</Link>
                <Link to="/about" className="bg-white/20 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-white/30">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rows */}
      {/* <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <ThreatRow title="Trending Threats" threats={threats} />
          <ThreatRow title="Malware & Ransomware" threats={threats.filter(t => t.category?.toLowerCase().includes('ransom') || t.category?.toLowerCase().includes('malware'))} />
          <ThreatRow title="Social Engineering" threats={threats.filter(t => t.category?.toLowerCase().includes('phish') || t.category?.toLowerCase().includes('social'))} />
        </div>
      </div> */}

      {/* Recent Threats Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Recently Added</h2>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threats.map((threat) => (
                <div key={threat._id} className="threat-card bg-neutral-900 rounded-lg p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{threat.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-3">{threat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{threat.category}</span>
                    <Link
                      to={`/threats/${threat._id}`}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/threats"
              className="bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-gray-200"
            >
              View All Threats
            </Link>
          </div>
        </div>
      </section>
      {/* Spacer to end */}
      <div className="h-8" />
    </div>
  );
};

export default Home;
