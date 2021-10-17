import React from "react";
import { ImageSourcePropType } from "react-native";

import * as S from "./styles";

export type SearchProps = {
  image: ImageSourcePropType;
  title: string;
  color: string;
  border: string;
  widthImg: string;
  heightImg: string;
};

const SearchCard: React.FC<SearchProps> = ({
  image,
  title,
  color,
  border,
  widthImg,
  heightImg,
}) => {
  return (
    <S.Container color={color} border={border}>
      <S.Image source={image} widthImg={widthImg} heightImg={heightImg} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default SearchCard;
