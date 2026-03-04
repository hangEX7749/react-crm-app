// src/components/ui/Avatar.jsx

export default function Avatar({ initials, role, size = "md" }) {
  return (
    <div className={`avatar ${role} ${size}`}>
      {initials}
    </div>
  );
}
