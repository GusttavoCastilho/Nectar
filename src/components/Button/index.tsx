import React from "react";
import { Image } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

type ColorProps =  "white" | "green"

export interface ButtonProps {
  backgroundColor: "green" | "lightBlue" | "darkBlue" | "gray";
  color?: ColorProps
  icon?: any;
  name?: string;
  onPress?: () => void; 
}

import { Container, TextButton } from "./styles";

const Button: React.FC<ButtonProps> = ({
  name,
  backgroundColor,
  color,
  icon,
  onPress,
  ...rest
}) => {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Container backgroundColor={backgroundColor} onPress={onPress} {...rest}>
        {icon && (
          <Image
            source={icon}
            style={{ width: 20, height: 20, marginRight: 20 }}
          />
        )}
        <TextButton style={{ fontFamily: "Inter_600SemiBold" }} color={color}>
          {name}
        </TextButton>
      </Container>
    </>
  );
};

export default Button;
