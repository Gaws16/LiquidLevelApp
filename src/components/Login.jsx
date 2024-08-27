import { StyleSheet, View, Dimensions, Platform } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAuth } from "../contexts/authContext";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

function Login() {
  const { email, password, isLoading, dispatch, loginAsync } = useAuth();
  const navigation = useNavigation();
  async function handleLogin() {
    const response = await loginAsync(email, password);
    if (response) {
      navigation.navigate("Profile");
    }
  }
  return (
    <View style={styles.container}>
      <Text
        style={{ textAlign: "center" }}
        numberOfLines={3}
        variant="displaySmall"
      >
        Моля логнете се за да видите вашите сензори
      </Text>
      <TextInput
        label="Email"
        value={email}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => dispatch({ type: "email", payload: text })}
      />
      <TextInput
        label="Password"
        style={styles.input}
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={(text) => dispatch({ type: "password", payload: text })}
      />
      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    ...Platform.select({
      web: {
        gap: 20,
      },
    }),
  },
  input: {
    ...Platform.select({
      ios: {
        width: width * 0.8,
        marginVertical: 10,
      },
      android: {
        width: width * 0.8,
        marginVertical: 10,
      },
    }),
  },
  button: {
    ...Platform.select({
      ios: {
        marginTop: 20,
        paddingVertical: 10,
        width: width * 0.8,
      },
      android: {
        marginTop: 20,
        paddingVertical: 10,
        width: width * 0.8,
      },
    }),
  },
});
