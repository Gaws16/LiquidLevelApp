import { createContext, useContext, useReducer } from "react";
import { axios } from "../api/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = createContext();
const initialState = {
  isLoggedIn: false,
  user: {},
  isLoading: false,
  email: "",
  password: "",
  sensors: [],
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
    case "sensors/loaded":
      return {
        ...state,
        sensors: action.payload,
      };

    default:
      return state;
  }
}
export const AuthProvider = ({ children }) => {
  const [{ isLoggedIn, user, isLoading, email, password, sensors }, dispatch] =
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
  async function getSensorsAsync(userId) {
    try {
      dispatch({ type: "loading" });
      const response = await axios.get("/sensors/" + userId);
      dispatch({ type: "sensors/loaded", payload: response.data });
      return response.data;
    } catch (error) {
      console.log("Error getting sensors from API: ");
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
        sensors,
        getSensorsAsync,
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
