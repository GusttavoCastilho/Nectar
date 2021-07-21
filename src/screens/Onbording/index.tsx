import React from "react";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import { TouchableOpacity, Text } from 'react-native'

import { Container, ImageBg, Title, Description, BoxContent } from "./styles";

import OnbordingImage from "../../../assets/images/onbording.png";
import { OnbordingSvg } from "../../svg/index";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

const Onbording: React.FC = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Container>
        <ImageBg source={OnbordingImage}>
          <BoxContent
            colors={["rgba(14,23,39,0.05)", "#858585"]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 0, y: 20 }}
          >
            <OnbordingSvg />
            <Title style={{ fontFamily: "Inter_600SemiBold" }}>
              Welcome {"\n"} to our store
            </Title>
            <Description style={{ fontFamily: "Inter_600SemiBold" }}>
              Ger your groceries in as fast as one hour
            </Description>
            <Button
              name="Get Started"
              backgroundColor="green"
              color="white"
              onPress={ () => navigation.navigate("SignIn")}
            />
          </BoxContent>
        </ImageBg>
      </Container>
    </>
  );
};

export default Onbording;
