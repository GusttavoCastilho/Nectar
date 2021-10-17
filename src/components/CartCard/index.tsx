import React, { useState } from "react";
import * as S from "./styles";
import { ImageSourcePropType } from "react-native";
import { Mais, Menos, Close } from "../../svg/index";

export type CartProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: number;
};

const CartCard: React.FC<CartProps> = ({
  image,
  title,
  description,
  price,
}) => {
  const [value, setValue] = useState(1);

  return (
    <S.Container>
      <S.BoxImage>
        <S.Image source={image} />
      </S.BoxImage>
      <S.BoxContent>
        <S.TitleProduct>{title}</S.TitleProduct>
        <S.DescriptionProduct>{description}</S.DescriptionProduct>
        <S.BoxQuantity>
          <S.Button onPress={() => setValue(value - 1)}>
            <Menos />
          </S.Button>
          <S.Quantity>{value}</S.Quantity>
          <S.Button onPress={() => setValue(value + 1)}>
            <Mais />
          </S.Button>
        </S.BoxQuantity>
      </S.BoxContent>
      <S.BoxPrice>
        <S.BoxClose>
          <Close />
        </S.BoxClose>
        <S.Price>
          <S.TextPrice>${price * value}</S.TextPrice>
        </S.Price>
      </S.BoxPrice>
    </S.Container>
  );
};

export default CartCard;
