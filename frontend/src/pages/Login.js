import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';
import { saveAuth } from '../utils/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await authAPI.login({ email, password });
      saveAuth(data);
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={onSubmit} className="space-y-4 bg-neutral-900 border border-white/5 p-6 rounded">
          <input className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <div className="text-red-400">{error}</div>}
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200" disabled={loading}>
            {loading ? 'Signing in…' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-sm">
          New user?{' '}
          <Link to="/register" className="text-blue-400 underline">Create an account</Link>
          <div className="mt-2">
            Admin?{' '}
            <Link to="/admin/login" className="text-blue-400 underline">Sign in here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


