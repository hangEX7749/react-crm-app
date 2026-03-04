// src/components/layout/DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardPage      from "../../pages/DashboardPage";
import UserManagementPage from "../../pages/UserManagementPage";
import PlaceholderPage    from "../../pages/PlaceholderPage";
import "../../styles/dashboard.css";

const PAGES = {
  dashboard: <DashboardPage />,
  contacts:  <PlaceholderPage title="Contacts"      icon="👤" />,
  pipeline:  <PlaceholderPage title="Sales Pipeline" icon="◈" />,
  tasks:     <PlaceholderPage title="Tasks"          icon="✓" />,
  reports:   <PlaceholderPage title="Reports"        icon="📊" />,
  users:     <UserManagementPage />,
  settings:  <PlaceholderPage title="Settings"       icon="⚙" adminOnly />,
};

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="dashboard-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="main-area">
        <Topbar activePage={activePage} />
        {PAGES[activePage] ?? PAGES.dashboard}
      </div>
    </div>
  );
}
