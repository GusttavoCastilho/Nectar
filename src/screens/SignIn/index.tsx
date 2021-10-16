import React from "react";
import * as AuthSession from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { LogBox } from "react-native";

import {
  Container,
  ImageHeader,
  TextHeader,
  BoxContent,
  Diviser,
  Description,
} from "./styles";

import Button from "../../components/Button";

import HeaderImage from "../../../assets/images/headerSignIn.png";
import GoogleImage from "../../../assets/images/google.png";
import FacebookImage from "../../../assets/images/facebook.png";

LogBox.ignoreAllLogs();

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "130744813388-3ee4gj91dn3hgulrkpd11t6vdqpv25bv.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@gustavocasttilho/nectar";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response = await AuthSession.startAsync({ authUrl });

      if (response.type === "success") {
        navigation.navigate("shop");
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <ImageHeader source={HeaderImage} />
      <TextHeader style={{ fontFamily: "Inter_600SemiBold" }}>
        Get your groceries {"\n"} with nectar
      </TextHeader>
      <BoxContent>
        <Diviser />
        <Description style={{ fontFamily: "Inter_600SemiBold" }}>
          Connect with social media
        </Description>
        <Button
          name="Continue with Google"
          backgroundColor="lightBlue"
          color="white"
          icon={GoogleImage}
          onPress={signInWithGoogle}
        />
        <Button
          name="Continue with Facebook"
          backgroundColor="darkBlue"
          color="white"
          icon={FacebookImage}
        />
      </BoxContent>
    </Container>
  );
};

export default SignIn;
