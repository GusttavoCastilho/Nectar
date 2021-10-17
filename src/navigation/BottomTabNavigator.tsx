import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard, Explore, Cart, Favourite, Account } from "../screens";

const Tab = createBottomTabNavigator();

import { ShopSvg, CartSvg, FavouriteSvg, AccountSvg, ExploreSvg } from "../svg";

export const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          adaptive: true,
          activeTintColor: "#53B175",
          inactiveTintColor: "#181725",
          labelStyle: {
            paddingBottom: 5,
          },
          style: {
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 0,
            backgroundColor: "#fff",
            height: 60,
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen
          name="shop"
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused }) => <ShopSvg alterColor={focused} />,
          }}
        />

        <Tab.Screen
          name="explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => <ExploreSvg alterColor={focused} />,
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => <CartSvg alterColor={focused} />,
          }}
        />
        <Tab.Screen
          name="favourite"
          component={Favourite}
          options={{
            tabBarIcon: ({ focused }) => <FavouriteSvg alterColor={focused} />,
          }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => <AccountSvg alterColor={focused} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};
