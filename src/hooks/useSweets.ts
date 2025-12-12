import { useState, useEffect } from 'react';
import { Sweet } from '@/types/sweet';

const STORAGE_KEY = 'sweetshop_sweets';

const defaultSweets: Sweet[] = [
  { id: '1', name: 'Chocolate Truffle', category: 'Chocolates', price: 2.50, stock: 50, description: 'Rich dark chocolate truffle', createdAt: new Date().toISOString() },
  { id: '2', name: 'Strawberry Lollipop', category: 'Lollipops', price: 1.00, stock: 3, description: 'Sweet strawberry flavored lollipop', createdAt: new Date().toISOString() },
  { id: '3', name: 'Gummy Bears', category: 'Gummies', price: 3.00, stock: 25, description: 'Assorted fruit flavored gummy bears', createdAt: new Date().toISOString() },
  { id: '4', name: 'Caramel Chew', category: 'Caramels', price: 1.50, stock: 8, description: 'Soft chewy caramel candy', createdAt: new Date().toISOString() },
];

export const useSweets = () => {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSweets(JSON.parse(stored));
    } else {
      setSweets(defaultSweets);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSweets));
    }
    setLoading(false);
  }, []);

  const saveSweets = (newSweets: Sweet[]) => {
    setSweets(newSweets);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSweets));
  };

  const addSweet = (sweet: Omit<Sweet, 'id' | 'createdAt'>) => {
    const newSweet: Sweet = {
      ...sweet,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    saveSweets([...sweets, newSweet]);
  };

  const updateSweet = (id: string, updates: Partial<Sweet>) => {
    saveSweets(sweets.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteSweet = (id: string) => {
    saveSweets(sweets.filter(s => s.id !== id));
  };

  const lowStockSweets = sweets.filter(s => s.stock <= 10);

  return { sweets, loading, addSweet, updateSweet, deleteSweet, lowStockSweets };
};
