// src/pages/LoginPage.jsx
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { USERS } from "../data/users";
import "../styles/login.css";

export default function LoginPage() {
  const { login, error, setError } = useAuth();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  const fillDemo = (e, p) => {
    setEmail(e);
    setPassword(p);
    setError("");
  };

  return (
    <div className="login-page">

      {/* ── Left: Brand panel ── */}
      <div className="login-brand">
        <div className="brand-logo">NexCRM<span>.</span></div>

        <div>
          <h1 className="brand-headline">
            Manage your<br />
            <em>relationships</em><br />
            smarter.
          </h1>
          <p className="brand-sub">
            A modern CRM for high-performance teams. Track deals, contacts,
            and tasks — all in one workspace.
          </p>
        </div>

        <div>
          <p className="demo-label">Quick demo accounts</p>
          <div className="cred-list">
            {USERS.map((u) => (
              <button
                key={u.id}
                className="cred-pill"
                onClick={() => fillDemo(u.email, u.password)}
              >
                <span className={`role-tag ${u.role}`}>{u.role}</span>
                <span className="cred-details">
                  <strong>{u.name}</strong> · {u.email}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: Form panel ── */}
      <div className="login-form-side">
        <div className="login-card">
          <h2 className="login-title">Welcome back.</h2>
          <p className="login-subtitle">Sign in to your CRM workspace</p>

          {error && <div className="error-banner">⚠ {error}</div>}

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className={`form-input ${error ? "has-error" : ""}`}
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={`form-input ${error ? "has-error" : ""}`}
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              autoComplete="current-password"
            />
          </div>

          <button
            className="btn-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <><div className="btn-spinner" /> Signing in…</>
            ) : (
              "Sign In →"
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
