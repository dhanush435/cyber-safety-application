import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Threats from './pages/Threats';
import ThreatDetail from './pages/ThreatDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Report from './pages/Report';
import AdminDashboard from './pages/AdminDashboard';
import SecurityTools from './pages/SecurityTools';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import SecurityTips from './pages/SecurityTips';
import BestPractices from './pages/BestPractices';
import EmergencyResponse from './pages/EmergencyResponse';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/threats" element={<ProtectedRoute><Threats /></ProtectedRoute>} />
            <Route path="/threats/:id" element={<ProtectedRoute><ThreatDetail /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/security-tools" element={<ProtectedRoute><SecurityTools /></ProtectedRoute>} />
            <Route path="/security-tips" element={<ProtectedRoute><SecurityTips /></ProtectedRoute>} />
            <Route path="/best-practices" element={<ProtectedRoute><BestPractices /></ProtectedRoute>} />
            <Route path="/emergency-response" element={<ProtectedRoute><EmergencyResponse /></ProtectedRoute>} />

            <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute requireAdmin={true}><AdminDashboard /></ProtectedRoute>} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;