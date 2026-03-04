// src/components/ui/AccessDenied.jsx

export default function AccessDenied({ message = "This section is restricted to administrators only." }) {
  return (
    <div className="access-denied">
      <div className="denied-icon">🔒</div>
      <h3>Admin Only</h3>
      <p>{message}</p>
    </div>
  );
}
