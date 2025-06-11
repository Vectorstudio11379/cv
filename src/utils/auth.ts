// Client-side authentication utility
const AUTH_TOKEN_KEY = 'authToken';

export const auth = {
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(AUTH_TOKEN_KEY) === 'authenticated';
  },

  // Set authentication token
  setAuthToken: (token: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  },

  // Remove authentication token
  removeAuthToken: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_TOKEN_KEY);
  },

  // Login function
  login: (): void => {
    auth.setAuthToken('authenticated');
  },

  // Logout function
  logout: (): void => {
    auth.removeAuthToken();
  }
}; 