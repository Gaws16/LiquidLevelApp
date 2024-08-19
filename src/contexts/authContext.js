import { createContext, useContext, useReducer } from "react";
import { axios } from "../api/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = createContext();
initialState = {
  isLoggedIn: false,
  user: {},
  isLoading: false,
  email: "",
  password: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "login/loaded":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        isLoading: false,
      };
    case "logout/laoded":
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "user":
      return { ...state, user: action.payload };

    default:
      return state;
  }
}
export const AuthProvider = ({ children }) => {
  const [{ isLoggedIn, user, isLoading, email, password }, dispatch] =
    useReducer(reducer, initialState);
  async function loginAsync(email, password) {
    dispatch({ type: "loading" });
    try {
      const response = await axios.post("/auth/login", { email, password });
      console.log("data " + response.data);
      dispatch({ type: "login/loaded", payload: { ...response.data } });
      storeUserDataAsync(response.data);
      return response.data;
    } catch (error) {
      console.log("error: " + error);
    }
  }
  async function storeUserDataAsync(data) {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log("Error storing data in AsyncStorage: " + error);
    }
  }
  async function getUserDataAsync(data) {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        dispatch({ type: "user", payload: JSON.parse(value) });
      }
      return value;
    } catch (error) {
      console.log("Error getting data from AsyncStorage: " + error);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        email,
        password,
        dispatch,
        loginAsync,
        getUserDataAsync,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
