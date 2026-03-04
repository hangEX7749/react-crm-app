// src/pages/UserManagementPage.jsx
import { useAuth } from "../hooks/useAuth";
import { USERS } from "../data/users";
import Avatar from "../components/ui/Avatar";
import RoleTag from "../components/ui/RoleTag";
import AccessDenied from "../components/ui/AccessDenied";

export default function UserManagementPage() {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="page-content">
        <AccessDenied message="You need admin privileges to manage users." />
      </div>
    );
  }

  return (
    <div className="page-content">
      <div style={{ marginBottom: 24, animation: "fadeUp 0.3s ease both" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, letterSpacing: -1, marginBottom: 4 }}>
          User Management
        </div>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          Manage team members, roles, and permissions.
        </div>
      </div>

      <div className="card" style={{ animation: "fadeUp 0.4s ease both" }}>
        {/* Table header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr 1fr 1fr",
          padding: "12px 20px",
          borderBottom: "1px solid var(--border)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          <span>User</span>
          <span>Email</span>
          <span>Department</span>
          <span>Role</span>
        </div>

        {/* Table rows */}
        {USERS.map((u) => (
          <div
            key={u.id}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 2fr 1fr 1fr",
              padding: "14px 20px",
              borderBottom: "1px solid var(--border)",
              alignItems: "center",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar initials={u.avatar} role={u.role} size="sm" />
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{u.name}</div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>Joined {u.joinedAt}</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-dim)" }}>{u.email}</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>{u.department}</div>
            <RoleTag role={u.role} />
          </div>
        ))}
      </div>
    </div>
  );
}
