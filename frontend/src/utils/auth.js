export const saveAuth = ({ token, user }) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getUser = () => {
  const raw = localStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
};

export const isAdmin = () => {
  const user = getUser();
  return !!user && user.role === 'admin';
};

export const isAuthed = () => !!localStorage.getItem('token');



