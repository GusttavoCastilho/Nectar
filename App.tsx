import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Onbording, SignIn, Dashboard } from "./src/screens";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

import { firebaseConfig } from "./firebase-config";
import firebase from 'firebase'
firebase.initializeApp(firebaseConfig)

import AuthRoutes from "./src/routes/auth.routes";

export default function App() {
  const Stack = createStackNavigator();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

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
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
