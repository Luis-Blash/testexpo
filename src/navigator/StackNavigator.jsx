import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { pathRoute } from ".";
import {
  ScreenCards,
  ScreenHome,
  ScreenRequest,
  ScreenSelectPets,
  ScreenSelectQuestion,
  ScreenViewModel,
  ScreenWelcome,
} from "../screen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={pathRoute.screenWelcome}
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   elevation: 0, // android
        //   shadowColor: "transparent", // ios
        // },
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name={pathRoute.screenWelcome} component={ScreenWelcome} />
      <Stack.Screen
        name={pathRoute.screenSelectPets}
        component={ScreenSelectPets}
      />
      <Stack.Screen name={pathRoute.screenSelectQuestion} component={ScreenSelectQuestion} />
      <Stack.Screen name={pathRoute.screenRequest} component={ScreenRequest} />
      <Stack.Screen name={pathRoute.screenCards} component={ScreenCards} />
      <Stack.Screen name={pathRoute.screenViewModel} component={ScreenViewModel} />
      <Stack.Screen name={pathRoute.screenHome} component={ScreenHome} />
    </Stack.Navigator>
  );
};
