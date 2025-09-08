import React, { useState } from 'react';
import { reportsAPI } from '../services/api';

const Report = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Phishing');
  const [severity, setSeverity] = useState('Medium');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);
    try {
      await reportsAPI.create({ title, description, category, severity });
      setMessage('Report submitted. Our team will review it.');
      setTitle(''); setDescription('');
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to submit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-4">Report an Attack</h1>
        <form onSubmit={onSubmit} className="space-y-4 bg-neutral-900 border border-white/5 p-6 rounded">
          <input className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" required />
          <textarea className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" rows="6" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" required />
          <div className="flex gap-4">
            <select className="border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>Phishing</option>
            <option>Ransomware</option>
            <option>Identity Theft</option>
            <option>Malware</option>
            <option>Social Engineering</option>
            <option>Data Breach</option>
            <option>DDoS</option>
            <option>Man-in-the-Middle</option>
            <option>SQL Injection</option>
            <option>Cross-Site Scripting</option>
          </select>
          <select className="border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" value={severity} onChange={(e)=>setSeverity(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>
        {message && <div className="text-green-400">{message}</div>}
        {error && <div className="text-red-400">{error}</div>}
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200" disabled={loading}>
          {loading ? 'Submitting…' : 'Submit Report'}
        </button>
        </form>
      </div>
    </div>
  );
};

export default Report;




