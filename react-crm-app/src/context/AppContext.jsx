// context/AppContext.jsx
const AppContext = createContext();

export function AppProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [deals, setDeals] = useState([]);

  return (
    <AppContext.Provider value={{ contacts, setContacts, deals, setDeals }}>
      {children}
    </AppContext.Provider>
  );
}