import React, { useEffect, useState } from 'react';
import { reportsAPI, threatsAPI } from '../services/api';
import { feedbackAPI } from '../services/api';

const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');
  const [threats, setThreats] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', description: '', category: '', severity: '' });
  const [messages, setMessages] = useState([]);

  const load = async () => {
    try {
      const { data } = await reportsAPI.list();
      setReports(data);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load reports');
    }
  };

  const loadThreats = async () => {
    try {
      const { data } = await threatsAPI.getAll();
      setThreats(data);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load threats');
    }
  };

  const loadMessages = async () => {
    try {
      const { data } = await feedbackAPI.getAll();
      setMessages(data);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load messages');
    }
  };

  useEffect(() => { load(); loadThreats(); loadMessages(); }, []);

  const act = async (id, action) => {
    try {
      if (action === 'publish') await reportsAPI.publish(id);
      if (action === 'reject') await reportsAPI.reject(id);
      await load();
      await loadThreats();
      await loadMessages();
    } catch (err) {
      setError(err?.response?.data?.message || 'Action failed');
    }
  };

  const startEdit = (t) => {
    setEditingId(t._id);
    setEditForm({
      name: t.name || '',
      description: t.description || '',
      category: t.category || '',
      severity: t.severity || 'Medium',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', description: '', category: '', severity: '' });
  };

  const saveEdit = async () => {
    try {
      await threatsAPI.update(editingId, editForm);
      cancelEdit();
      await loadThreats();
    } catch (err) {
      setError(err?.response?.data?.message || 'Update failed');
    }
  };

  const removeThreat = async (id) => {
    try {
      await threatsAPI.delete(id);
      if (editingId === id) cancelEdit();
      await loadThreats();
    } catch (err) {
      setError(err?.response?.data?.message || 'Delete failed');
    }
  };

  const updateMessageStatus = async (id, status) => {
    try {
      await feedbackAPI.update(id, { status });
      await loadMessages();
    } catch (err) {
      setError(err?.response?.data?.message || 'Update failed');
    }
  };

  const deleteMessage = async (id) => {
    try {
      await feedbackAPI.delete(id);
      await loadMessages();
    } catch (err) {
      setError(err?.response?.data?.message || 'Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {error && <div className="text-red-400 mb-2">{error}</div>}
      <div className="space-y-8">
        {reports.map((r) => (
          <div key={r._id} className="border border-white/5 p-4 bg-neutral-900">
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold text-white">{r.title}</h2>
                <div className="text-sm text-gray-400">{r.category} • {r.severity} • {r.status}</div>
              </div>
              <div className="space-x-2">
                <button className="bg-emerald-600 text-white px-3 py-1 rounded" onClick={() => act(r._id, 'publish')}>Publish</button>
                <button className="bg-gray-600 text-white px-3 py-1 rounded" onClick={() => act(r._id, 'reject')}>Reject</button>
              </div>
            </div>
            <p className="mt-2 whitespace-pre-line text-gray-200">{r.description}</p>
            {r.reportedBy && <div className="text-sm text-gray-400 mt-2">By: {r.reportedBy.name} ({r.reportedBy.email})</div>}
          </div>
        ))}
        {reports.length === 0 && <div className="text-gray-400">No reports yet.</div>}

        <div>
          <h2 className="text-xl font-semibold mb-3">Manage Threats</h2>
          {threats.length === 0 && <div className="text-gray-400">No threats yet.</div>}
          <div className="space-y-4">
            {threats.map((t) => (
              <div key={t._id} className="border border-white/5 p-4 bg-neutral-900">
                {editingId === t._id ? (
                  <div className="space-y-3">
                    <input className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" placeholder="Name" value={editForm.name} onChange={(e)=>setEditForm({ ...editForm, name: e.target.value })} />
                    <textarea className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" rows={3} placeholder="Description" value={editForm.description} onChange={(e)=>setEditForm({ ...editForm, description: e.target.value })} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" placeholder="Category" value={editForm.category} onChange={(e)=>setEditForm({ ...editForm, category: e.target.value })} />
                      <select className="w-full border border-white/10 bg-neutral-800 text-white rounded px-3 py-2" value={editForm.severity} onChange={(e)=>setEditForm({ ...editForm, severity: e.target.value })}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200" onClick={saveEdit}>Save</button>
                      <button className="bg-gray-700 text-white px-3 py-1 rounded" onClick={cancelEdit}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{t.name}</h3>
                      <div className="text-sm text-gray-400">{t.category} • {t.severity}</div>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200" onClick={() => startEdit(t)}>Edit</button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => removeThreat(t._id)}>Delete</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Messages</h2>
          {messages.length === 0 && <div className="text-gray-400">No messages yet.</div>}
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m._id} className="border border-white/5 p-4 bg-neutral-900">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{m.subject}</h3>
                    <div className="text-sm text-gray-400">From: {m.name} &lt;{m.email}&gt;</div>
                    <div className="text-sm text-gray-400">Category: {m.category} • Priority: {m.priority} • Status: {m.status}</div>
                  </div>
                  <div className="space-x-2">
                    <button className="bg-emerald-600 text-white px-3 py-1 rounded" onClick={() => updateMessageStatus(m._id, 'Resolved')}>Mark Resolved</button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded" onClick={() => updateMessageStatus(m._id, 'Closed')}>Close</button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => deleteMessage(m._id)}>Delete</button>
                  </div>
                </div>
                <p className="mt-2 whitespace-pre-line text-gray-200">{m.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;



