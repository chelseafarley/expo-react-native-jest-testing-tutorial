import { useState, useEffect } from "react";
import { Text } from "react-native";

export default CatFact = () => {
  const [catFactData, setCatFactData] = useState(undefined);

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => {
        setCatFactData(data);
      });
  }, []);

  if (catFactData === undefined) {
    return <Text>Loading...</Text>;
  }

  return catFactData.length > 0 ? (
    <Text>{catFactData[0].text}</Text>
  ) : (
    <Text>No Cat Facts!</Text>
  );
};
