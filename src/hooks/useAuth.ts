import { useState, useEffect, useCallback } from 'react';
import { auth } from '@/utils/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleStorageChange = useCallback(() => {
    setIsAuthenticated(auth.isAuthenticated());
  }, []);

  useEffect(() => {
    // Check authentication status on mount
    setIsAuthenticated(auth.isAuthenticated());
    setIsLoading(false);

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [handleStorageChange]);

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