import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button mode="outlined" onPress={() => navigation.navigate("Profile")}>
        Go to Profile!
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 24,
    color: "black",
  },
});
export default Home;
