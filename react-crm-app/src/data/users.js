// src/data/users.js
// Replace this with real API calls in production

export const USERS = [
  {
    id: 1,
    email: "admin@crm.com",
    password: "admin123",
    name: "Alex Rivera",
    role: "admin",
    avatar: "AR",
    department: "Management",
    joinedAt: "2023-01-10",
  },
  {
    id: 2,
    email: "member@crm.com",
    password: "member123",
    name: "Jordan Lee",
    role: "member",
    avatar: "JL",
    department: "Sales",
    joinedAt: "2023-04-22",
  },
  {
    id: 3,
    email: "sarah@crm.com",
    password: "sarah123",
    name: "Sarah Chen",
    role: "member",
    avatar: "SC",
    department: "Marketing",
    joinedAt: "2023-07-15",
  },
];

export const STATS = [
  { label: "Total Contacts", value: "1,284", change: "+12 this week" },
  { label: "Open Deals",     value: "47",    change: "+3 today" },
  { label: "Revenue (MTD)", value: "$84K",  change: "↑ 18% vs last month" },
  { label: "Tasks Due",     value: "9",     change: "3 overdue" },
];

export const ACTIVITY = [
  { text: "Jordan Lee added a new contact — Acme Corp",  time: "2 min ago" },
  { text: "Deal 'Enterprise License' moved to Proposal", time: "14 min ago" },
  { text: "Sarah Chen completed task: Follow-up call",   time: "1 hr ago" },
  { text: "New lead imported from LinkedIn campaign",     time: "3 hr ago" },
  { text: "Admin updated pipeline stages",               time: "5 hr ago" },
];

export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard",   icon: "⊞",  adminOnly: false },
  { id: "contacts",  label: "Contacts",    icon: "👤", adminOnly: false },
  { id: "pipeline",  label: "Pipeline",    icon: "◈",  adminOnly: false },
  { id: "tasks",     label: "Tasks",       icon: "✓",  adminOnly: false },
  { id: "reports",   label: "Reports",     icon: "📊", adminOnly: false },
  { id: "users",     label: "User Mgmt",   icon: "👥", adminOnly: true  },
  { id: "settings",  label: "Settings",    icon: "⚙",  adminOnly: true  },
];
