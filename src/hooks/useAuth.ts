import { useState, useEffect } from 'react';
import { auth } from '@/utils/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    setIsAuthenticated(auth.isAuthenticated());
    setIsLoading(false);

    // Listen for storage changes
    const handleStorageChange = () => {
      setIsAuthenticated(auth.isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = () => {
    auth.login();
    setIsAuthenticated(true);
  };

  const logout = () => {
    auth.logout();
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout
  };
}; 