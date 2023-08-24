import { render } from "@testing-library/react-native";
import MyGreeting from "./MyGreeting";

describe("MyGreeting", () => {
  it("displays Bonjour in French", () => {
    const { getByText } = render(<MyGreeting ln="fr" name="Alice" />);
    expect(getByText("Bonjour Alice")).toBeTruthy();
  });

  it("displays Hola in Spanish", () => {
    const { getByText } = render(<MyGreeting ln="es" name="Bob" />);
    expect(getByText("Hola Bob")).toBeTruthy();
  });

  it("displays Hello in default language", () => {
    const { getByText } = render(<MyGreeting ln="en" name="Charlie" />);
    expect(getByText("Hello Charlie")).toBeTruthy();
  });
});
