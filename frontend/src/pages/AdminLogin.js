import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAuth } from '../utils/auth';
import api from '../services/api';

function AdminLogin() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setLoading(true);
		try {
			const response = await api.post('/auth/admin/login', { email, password });
			const { token, user } = response.data || {};
			if (token && user) {
				saveAuth({ token, user });
				navigate('/admin');
			} else {
				setError('Invalid response from server.');
			}
		} catch (err) {
			setError(err?.response?.data?.message || 'Admin login failed.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="container mx-auto px-4 py-8 max-w-md">
				<h1 className="text-3xl font-semibold mb-6">Admin Login</h1>
				<form onSubmit={handleSubmit} className="space-y-4 bg-neutral-900 border border-white/5 p-6 rounded">
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
						<input
							id="email"
							type="email"
							className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
						<input
							id="password"
							type="password"
							className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					{error && <p className="text-red-400 text-sm">{error}</p>}
					<button
						type="submit"
						className="w-full bg-white text-black py-2 rounded disabled:opacity-60 hover:bg-gray-200"
						disabled={loading}
					>
						{loading ? 'Signing in…' : 'Sign in'}
					</button>
				</form>
			</div>
		</div>
	);
}

export default AdminLogin;


