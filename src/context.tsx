// context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name?: string;
  email: string;
  role: string;
}

interface ShopContextType {
  backendUrl: string;
  token: string;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const backendUrl = "https://mentorship-backend-r9vb.onrender.com";

  const [token, setTokenState] = useState<string>(
    () => localStorage.getItem('token') || ''
  );
  const [user, setUser] = useState<User | null>(null);

  const setToken = (t: string) => {
    localStorage.setItem('token', t);
    setTokenState(t);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setTokenState('');
    setUser(null);
  };

  return (
    <ShopContext.Provider value={{ backendUrl, token, user, setToken, setUser, logout }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShopContext must be used within ShopContextProvider');
  return context;
};