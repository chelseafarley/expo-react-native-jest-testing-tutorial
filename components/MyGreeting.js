import { Text } from "react-native";

export default MyGreeting = (props) => {
  const greeting = () => {
    if (props.ln === "fr") {
      return "Bonjour";
    } else if (props.ln === "es") {
      return "Hola";
    } else {
      return "Hello";
    }
  };

  return (
    <Text>
      {greeting()} {props.name}
    </Text>
  );
};
