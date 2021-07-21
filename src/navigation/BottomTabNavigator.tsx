import React, { useState, useEffect } from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Dashboard, Explore, Cart, Favourite, Account } from '../screens'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { ShopSvg, SearchSvg, CartSvg, FavouriteSvg, AccountSvg, ExploreSvg } from '../svg'

export const Tabs = (focused: boolean) => {
  const [focus, setFocused] = useState(false)
  const navigation = useNavigation();

  useEffect(() => {
    if(navigation.isFocused()) {
       setFocused(true);
    } else {
      setFocused(false);
    }
  },[focus])


  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          adaptive: true,
          activeTintColor: '#53B175',
          inactiveTintColor: '#181725',
          labelStyle: {
            height: 20,
            width: 50,
          },
          style: {
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 0,
            backgroundColor: '#fff',
            height: 50,
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen
          name="shop"
          component={Dashboard}
          options={{
            
            tabBarIcon: ({ focused }) => <ShopSvg alterColor={focused} />
          }}
        />

        <Tab.Screen
          name="explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => <ExploreSvg alterColor={focused} />
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => <CartSvg alterColor={focused} />
          }}
        />
        <Tab.Screen
          name="favourite"
          component={Favourite}
          options={{
            tabBarIcon: ({ focused }) => <FavouriteSvg alterColor={focused} />
          }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => <AccountSvg alterColor={focused}  />
          }}
        />

      </Tab.Navigator>
    </>
  );
};