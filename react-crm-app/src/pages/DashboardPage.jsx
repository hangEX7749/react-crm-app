// src/pages/DashboardPage.jsx
import { useAuth } from "../hooks/useAuth";
import { STATS, ACTIVITY, USERS } from "../data/users";
import Avatar from "../components/ui/Avatar";
import RoleTag from "../components/ui/RoleTag";
import AccessDenied from "../components/ui/AccessDenied";

export default function DashboardPage() {
  const { user, isAdmin } = useAuth();

  return (
    <div className="page-content">
      {/* Welcome */}
      <div style={{ marginBottom: 28, animation: "fadeUp 0.3s ease both" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, letterSpacing: -1, marginBottom: 4 }}>
          Good morning, {user.name.split(" ")[0]} 👋
        </div>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          Here's what's happening with your CRM today.
        </div>
      </div>

      {/* Stats */}
      <p className="section-title">Overview</p>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="card stat-card"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-change">{s.change}</div>
          </div>
        ))}
      </div>

      {/* Panels */}
      <div className="panel-grid">

        {/* Activity feed — visible to all */}
        <div className="card panel">
          <div className="panel-header">
            <div className="panel-title">📋 Recent Activity</div>
          </div>
          {ACTIVITY.map((a, i) => (
            <div className="activity-item" key={i}>
              <div className="activity-dot" />
              <div>
                <div>{a.text}</div>
                <div className="activity-time">{a.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Team panel — admin only */}
        <div className="card panel">
          <div className="panel-header">
            <div className="panel-title">
              👥 Team Members
              {isAdmin && <span className="badge-admin">Admin Only</span>}
            </div>
          </div>

          {isAdmin ? (
            USERS.map((u) => (
              <div className="user-row" key={u.id}>
                <Avatar initials={u.avatar} role={u.role} size="sm" />
                <div className="user-row-info">
                  <div className="user-row-name">{u.name}</div>
                  <div className="user-row-email">{u.email}</div>
                  <div className="user-row-meta">{u.department} · Joined {u.joinedAt}</div>
                </div>
                <RoleTag role={u.role} />
              </div>
            ))
          ) : (
            <AccessDenied message="Only admins can view team member details." />
          )}
        </div>

      </div>
    </div>
  );
}
