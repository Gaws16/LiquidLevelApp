import "./utils/gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import StackNavigator from "./src/navigation/StackNavigator";
import { AuthProvider } from "./src/contexts/authContext";

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <StackNavigator />
        <StatusBar style="auto" />
      </AuthProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
