import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Onbording, SignIn } from "../screens";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Onbording"
    >
      <AuthStack.Screen name="Onbording" component={Onbording} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
