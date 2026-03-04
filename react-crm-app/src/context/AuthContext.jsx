const AuthContext = createContext(null);

const USERS = [
  { id: 1, email: "admin@crm.com",  password: "admin123",  name: "Alex Rivera",   role: "admin",  avatar: "AR" },
  { id: 2, email: "member@crm.com", password: "member123", name: "Jordan Lee",    role: "member", avatar: "JL" },
  { id: 3, email: "sarah@crm.com",  password: "sarah123",  name: "Sarah Chen",    role: "member", avatar: "SC" },
];

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = useCallback((email, password) => {
    const found = USERS.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      setError("");
      return true;
    }
    setError("Invalid email or password.");
    return false;
  }, []);

  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider value={{ user, login, logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);
