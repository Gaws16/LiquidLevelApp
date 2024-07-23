import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Button from "react-native-paper/src/components/Button/Button";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.setOptions({ title: "updated" })}
      >
        Update title!
      </Button>
      <Button mode="outlined">Fix title</Button>
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
export default Profile;
