// src/components/layout/Sidebar.jsx
import { useAuth } from "../../hooks/useAuth";
import { NAV_ITEMS } from "../../data/users";
import Avatar from "../ui/Avatar";

export default function Sidebar({ activePage, onNavigate }) {
  const { user, logout } = useAuth();

  const publicNav = NAV_ITEMS.filter((n) => !n.adminOnly);
  const adminNav  = NAV_ITEMS.filter((n) => n.adminOnly);

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        Nex<span>CRM</span>
      </div>

      {/* Main nav */}
      <span className="nav-section-label">Menu</span>
      {publicNav.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activePage === item.id ? "active" : ""}`}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}

      {/* Admin nav */}
      <span className="nav-section-label">Admin</span>
      {adminNav.map((item) => (
        <button
          key={item.id}
          className={`nav-item admin-nav ${activePage === item.id ? "active" : ""}`}
          onClick={() => onNavigate(item.id)}
          title={user.role !== "admin" ? "Requires admin role" : ""}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}

      {/* User info + logout */}
      <div className="sidebar-user">
        <div className="user-card">
          <Avatar initials={user.avatar} role={user.role} />
          <div>
            <div className="user-name">{user.name}</div>
            <div className={`user-role ${user.role}`}>{user.role}</div>
          </div>
        </div>
        <button className="btn-logout" onClick={logout}>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
