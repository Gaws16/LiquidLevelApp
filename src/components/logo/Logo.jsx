import { Image } from "react-native";

function Logo() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../../../assets/favicon.png")}
    />
  );
}

export default Logo;
