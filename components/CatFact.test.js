import { render, waitFor } from "@testing-library/react-native";
import CatFact from "./CatFact";

describe("CatFact", () => {
  it("displays cat fact", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { text: "first cat fact" },
            { text: "second cat fact" },
          ]),
      })
    );

    const { getByText } = render(<CatFact />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const catFactElement = getByText("first cat fact");
    expect(catFactElement).toBeTruthy();
  });

  it("displays no cat fact", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { getByText } = render(<CatFact />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const catFactElement = getByText("No Cat Facts!");
    expect(catFactElement).toBeTruthy();
  });

  it("displays no cat fact due to loading", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { getByText } = render(<CatFact />);

    const catFactElement = getByText("Loading...");
    expect(catFactElement).toBeTruthy();
  });
});
