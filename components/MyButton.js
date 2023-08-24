import { Button } from "react-native";

export default MyButton = (props) => {
  return (
    <Button
      testID="MyButton:Button:ClickMe"
      title="Click Me"
      onPress={props.onPress}
    />
  );
};
