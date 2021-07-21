import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Onbording, SignIn, Dashboard } from "./src/screens";
import useCachedResources from "./hooks/useCachedResources";

import { firebaseConfig } from "./firebase-config";
import firebase from 'firebase'
import { Tabs } from './src/navigation/BottomTabNavigator'
firebase.initializeApp(firebaseConfig)

import AuthRoutes from "./src/routes/auth.routes";
import AppRoutes from './src/routes/app.routes';
export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const isLoadingComplete = useCachedResources();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    );
  }

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
