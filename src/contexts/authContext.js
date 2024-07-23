import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIssLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIssLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
