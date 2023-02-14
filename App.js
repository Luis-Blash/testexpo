import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigator/StackNavigator";
import { PetProvider } from "./src/context/PetContext";

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }) => {
  return <PetProvider>{children}</PetProvider>;
};

export default App;