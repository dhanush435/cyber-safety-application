import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isAuthed, isAdmin, clearAuth, getUser } from '../utils/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const authed = isAuthed();
  const admin = isAdmin();
  const user = getUser();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const logout = () => {
    clearAuth();
    navigate('/login', { replace: true });
  };

  const leftNav = [
    { name: 'Home', path: '/' },
    { name: 'Threats', path: '/threats' },
    { name: 'Security Tools', path: '/security-tools' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const rightNav = authed
    ? [
        { name: 'Report', path: '/report' },
        ...(admin ? [{ name: 'Admin', path: '/admin' }] : []),
      ]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
      ];

  if (!authed) return null;

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">🛡️</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600">
                Cyber Safety
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-200 hover:text-white hover:bg-white/10 hover:shadow-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-200 hover:text-white hover:bg-white/10 hover:shadow-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {authed && (
              <button onClick={logout} className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-md">
                Logout{user?.name ? ` (${user.name})` : ''}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900 border-t border-white/10">
              {[...leftNav, ...rightNav].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {authed && (
                <button onClick={() => { setIsOpen(false); logout(); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-600">
                  Logout{user?.name ? ` (${user.name})` : ''}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
