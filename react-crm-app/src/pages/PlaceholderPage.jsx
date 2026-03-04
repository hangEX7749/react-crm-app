// src/pages/PlaceholderPage.jsx
import { useAuth } from "../hooks/useAuth";
import AccessDenied from "../components/ui/AccessDenied";

export default function PlaceholderPage({ title, icon, adminOnly = false }) {
  const { isAdmin } = useAuth();

  if (adminOnly && !isAdmin) {
    return (
      <div className="page-content">
        <AccessDenied />
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="placeholder-page">
        <div className="placeholder-icon">{icon}</div>
        <div className="placeholder-title">{title}</div>
        <p className="placeholder-sub">
          This section is ready to be built. Connect your backend API and add components here.
        </p>
      </div>
    </div>
  );
}
