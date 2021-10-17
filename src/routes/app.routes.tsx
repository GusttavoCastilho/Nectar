import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Tabs } from "../navigation/BottomTabNavigator";

export default function MyTabs() {
  const AppRoutes = createStackNavigator();
  return (
    <AppRoutes.Navigator screenOptions={{ headerShown: false }}>
      <AppRoutes.Screen name="shop" component={Tabs} />
    </AppRoutes.Navigator>
  );
}
