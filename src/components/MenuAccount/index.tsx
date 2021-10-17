import React from "react";
import { ImageSourcePropType } from "react-native";
import NextImg from "../../../assets/images/next.png";
import * as S from "./styles";

export type MenuAccountProps = {
  name: string;
  icon: ImageSourcePropType;
  widthImg: string;
  heightImg: string;
};

const MenuAccount: React.FC<MenuAccountProps> = ({
  name,
  icon,
  widthImg,
  heightImg,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.BoxIcon>
          <S.Icon source={icon} widthImg={widthImg} heightImg={heightImg} />
        </S.BoxIcon>
        <S.BoxName>
          <S.Name>{name}</S.Name>
        </S.BoxName>
        <S.BoxNext>
          <S.Next source={NextImg} />
        </S.BoxNext>
      </S.Content>
    </S.Container>
  );
};

export default MenuAccount;
