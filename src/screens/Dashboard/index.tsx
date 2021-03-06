import React from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";

import * as S from "./styles";

import Input from "../../components/Input";
import Header from "../../components/Header";
import Groceries from "../../components/Groceries";
import OfftertCard from "../../components/OffertCard";

import Banner from "../../../assets/images/banner.png";
import { CarrotSvg, LocationSvg } from "../../svg/index";

import {
  items,
  best_items,
  carnes_items,
} from "../../components/OffertCard/mock/items";
import { groceries } from "../../components/Groceries/mock/groceries";

export default function Dashboard() {
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Header>
          <CarrotSvg />
          <S.LocationHeader>
            {" "}
            <LocationSvg /> Dhaka, Banassre
          </S.LocationHeader>
        </S.Header>
        <S.BoxSearch>
          <Input />
        </S.BoxSearch>
        <S.BoxBanner>
          <S.Image source={Banner} />
        </S.BoxBanner>

        <View>
          <Header title="Exclusive Offer" />
          <FlatList
            data={items}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <OfftertCard
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.offtertList}
          />
        </View>

        <View>
          <Header title="Best Seelling" />
          <FlatList
            data={best_items}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <OfftertCard
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.best}
          />
        </View>

        <View>
          <Header title="Groceries" />
          <FlatList
            data={groceries}
            keyExtractor={(groceries) => String(groceries.id)}
            renderItem={({ item }) => (
              <Groceries
                image={item.image}
                title={item.title}
                color={item.color}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.best}
          />
        </View>

        <View style={styles.carnes}>
          <FlatList
            data={carnes_items}
            keyExtractor={(items) => String(items.id)}
            renderItem={({ item }) => (
              <OfftertCard
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.best}
          />
        </View>
      </ScrollView>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  offtertList: {
    height: 248,
    justifyContent: "center",
    paddingBottom: 5,
    marginRight: 32,
  },
  best: {
    justifyContent: "center",
    paddingBottom: 5,
  },
  carnes: {
    marginTop: 20,
    marginBottom: 20,
  },
});
