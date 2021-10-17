import React from "react";
import { Alert, LogBox } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

import { useAuth } from "../../context/auth";

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
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      Alert.alert("Could not connect with your google account");
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
          onPress={handleSignInWithGoogle}
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
