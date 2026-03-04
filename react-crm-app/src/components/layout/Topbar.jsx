// src/components/layout/Topbar.jsx
import { useAuth } from "../../hooks/useAuth";

const PAGE_TITLES = {
  dashboard: "Dashboard",
  contacts:  "Contacts",
  pipeline:  "Sales Pipeline",
  tasks:     "Tasks",
  reports:   "Reports",
  users:     "User Management",
  settings:  "Settings",
};

export default function Topbar({ activePage }) {
  const { user } = useAuth();

  return (
    <header className="topbar">
      <h1 className="topbar-title">{PAGE_TITLES[activePage] ?? "CRM"}</h1>

      <div className="role-badge">
        <span className={`role-dot ${user.role}`} />
        <span>{user.name}</span>
        <span style={{ color: "var(--muted)" }}>·</span>
        <span style={{ textTransform: "capitalize" }}>{user.role}</span>
      </div>
    </header>
  );
}
