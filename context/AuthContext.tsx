import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name: string) => void;
  logout: () => void;
  signup: (email: string, name: string) => void;
  loginWithGoogle: () => void;
  loginWithFacebook: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check local storage for persisted session on mount
    const storedUser = localStorage.getItem('gnj_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from local storage");
        localStorage.removeItem('gnj_user');
      }
    }
  }, []);

  const login = (email: string, name: string) => {
    // Mock login logic
    const newUser = { email, name };
    setUser(newUser);
    localStorage.setItem('gnj_user', JSON.stringify(newUser));
  };

  const signup = (email: string, name: string) => {
    // Mock signup logic (same as login for this demo)
    login(email, name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gnj_user');
  };

  const loginWithGoogle = () => {
    // Mock Google Login
    const newUser = { email: 'google.user@example.com', name: 'Google User' };
    setUser(newUser);
    localStorage.setItem('gnj_user', JSON.stringify(newUser));
  };

  const loginWithFacebook = () => {
    // Mock Facebook Login
    const newUser = { email: 'facebook.user@example.com', name: 'Facebook User' };
    setUser(newUser);
    localStorage.setItem('gnj_user', JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, signup, loginWithGoogle, loginWithFacebook }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
