import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Profile from "../components/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox, StyleSheet } from "react-native";
import Logo from "../components/logo/Logo";
import { Button } from "react-native-paper";
const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#525354" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          options={{
            title: "My Home",
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
            headerRight: () => (
              <Button
                style={{ textColor: "black" }}
                icon="menu"
                onPress={() => alert("This is a button!")}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    color: "black",
  },
});
