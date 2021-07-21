import React, { useEffect, useState } from "react";
import * as Google from 'expo-google-app-auth';
import * as Facebook from "expo-facebook";
import firebase from 'firebase'
import { useNavigation } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import {LogBox } from 'react-native'

import {
  Container,
  ImageHeader,
  TextHeader,
  BoxContent,
  Diviser,
  Description,
} from "./styles";

import HeaderImage from "../../../assets/images/headerSignIn.png";
import GoogleImage from "../../../assets/images/google.png";
import FacebookImage from "../../../assets/images/facebook.png";
import Button from "../../components/Button";
LogBox.ignoreAllLogs()

const SignIn: React.FC = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  const navigation = useNavigation();

 const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function(user: any) {
      if(user) {
        navigation.navigate('shop');
      } else {
        navigation.navigate('SignIn');
      }
    }.bind(checkIfLoggedIn))
  }

  useEffect(() => {
    checkIfLoggedIn();
  },[]);

  async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      behavior: 'web',
      androidClientId: '1020916271789-22fhp9bidr84dpopjde2h13vviohommj.apps.googleusercontent.com',
      // iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ['profile', 'email'],
    });

    LogBox.ignoreAllLogs()

    if (result.type === 'success') {
      navigation.navigate('shop')
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

const signUpFacebook = async () => {
  try {
    await Facebook.initializeAsync("2868601346728788");
    const request = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });
    if (request.type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${request.token}`
      );
      // console.log((await response.json()).name);
      const data = await response.json();
      setUser(data);
      navigation.navigate('shop')
      LogBox.ignoreAllLogs()
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};


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
          onPress={signInWithGoogleAsync}
        />
        <Button
          name="Continue with Facebook"
          backgroundColor="darkBlue"
          color="white"
          icon={FacebookImage}
          onPress={signUpFacebook}
        />
      </BoxContent>
    </Container>
  );
};

export default SignIn;
