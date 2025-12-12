import { useState, useEffect } from 'react';
import { User } from '@/types/sweet';

const USERS = [
  { id: '1', username: 'admin', password: 'admin123', role: 'admin' as const },
  { id: '2', username: 'staff', password: 'staff123', role: 'staff' as const },
];

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('sweetshop_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    const found = USERS.find(u => u.username === username && u.password === password);
    if (found) {
      const userData: User = { id: found.id, username: found.username, role: found.role };
      localStorage.setItem('sweetshop_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('sweetshop_user');
    setUser(null);
  };

  return { user, loading, login, logout };
};
