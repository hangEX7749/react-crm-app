// src/context/AuthContext.jsx
import { createContext, useContext, useState, useCallback } from "react";
import { USERS } from "../data/users";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]   = useState(null);
  const [error, setError] = useState("");

  // ── Login: match email + password from mock data
  //    Replace with: const res = await axios.post('/api/login', { email, password })
  const login = useCallback(async (email, password) => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 600));

    const found = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser(found);
      setError("");
      return { success: true };
    }

    setError("Invalid email or password. Please try again.");
    return { success: false };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError("");
  }, []);

  // Helper: check if current user is admin
  const isAdmin = user?.role === "admin";

  // Helper: guard a route/component by role
  const can = useCallback(
    (requiredRole) => {
      if (!user) return false;
      if (requiredRole === "admin") return user.role === "admin";
      return true; // "member" can access anything not admin-only
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{ user, login, logout, error, setError, isAdmin, can }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — use this anywhere instead of useContext(AuthContext)
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
