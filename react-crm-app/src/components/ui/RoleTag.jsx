// src/components/ui/RoleTag.jsx

export default function RoleTag({ role }) {
  return (
    <span className={`role-tag ${role}`}>
      {role}
    </span>
  );
}
