import { AuthContext } from "../contexts/authContext";
const context = useContext(AuthContext);
export const useAuth = () => {
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
