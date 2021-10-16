import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Onbording, SignIn } from "./src/screens";
import useCachedResources from "./hooks/useCachedResources";

import { Tabs } from "./src/navigation/BottomTabNavigator";

export default function App() {
  const Stack = createStackNavigator();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Onbording"
          >
            <Stack.Screen name="Onbording" component={Onbording} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="shop" component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
