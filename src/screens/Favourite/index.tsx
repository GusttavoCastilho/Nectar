import React from "react";

import Button from "../../components/Button";
import CardFavourite from "../../components/CardFavourite";
import { items } from "../../components/CardFavourite/mock/items";
import * as S from "./styles";

const Favourite: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.TextHeader>Favourite</S.TextHeader>
      </S.Header>
      {items.map((item) => {
        return (
          <CardFavourite
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            widthImg={item.width}
            heightImg={item.height}
          />
        );
      })}
      <S.Button>
         <Button name="Add All To Cart" backgroundColor="green" color="white" />
      </S.Button>
    </S.Container>
  );
};

export default Favourite;
