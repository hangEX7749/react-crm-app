// src/App.jsx
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage       from "./pages/LoginPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./styles/global.css";

function AppRouter() {
  const { user } = useAuth();
  return user ? <DashboardLayout /> : <LoginPage />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
