import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";
import Button from "react-native-paper/src/components/Button/Button";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

function Profile({ navigation }) {
  const { getSensorsAsync, user, sensors } = useAuth();

  async function handleSensors(userId) {
    await getSensorsAsync(userId);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      {user && <Text style={styles.text}>Welcome, {user.email}</Text>}
      {/* TODO: change this to name */}
      <Text style={styles.text}>Sensors:</Text>
      {sensors.map((sensor) => (
        <Chip icon="check" key={sensor.id}>
          {sensor.mac_addres}
        </Chip>
      ))}

      <Button mode="outlined" onPress={() => handleSensors(user.id)}>
        Refresh
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
export default Profile;
