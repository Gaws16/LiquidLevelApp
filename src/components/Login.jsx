import React from "react";
import { StyleSheet, View, Dimensions, Platform } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");

function Login() {
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
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />
      <Button mode="contained" style={styles.button}>
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
