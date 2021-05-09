import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BoxContent = styled(LinearGradient)`
    position: absolute;
    width: 100%;
    bottom: 40px;

    align-items: center;
`;

export const Title = styled.Text`
    padding-top: 35px;
    padding-bottom: 19px;

    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: ${Colors.white};
`;

export const Description = styled.Text`
    font-size: 16px;
    color: ${Colors.gray};
    padding-bottom: 40px;
`;