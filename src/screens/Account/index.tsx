import React from "react";

import * as S from "./styles";

import ImageUser from "../../../assets/images/user-image.png";
import MenuAccount from "../../components/MenuAccount";
import { menuAccount } from "../../components/MenuAccount/mock/menuAccount";
import Button from "../../components/Button";

const Account: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.UserImage source={ImageUser} />
        <S.BoxInfo>
          <S.Username>Afsar Hossen</S.Username>
          <S.UserEmail>Imshuvo97@gmail.com</S.UserEmail>
        </S.BoxInfo>
      </S.Header>
      <S.Content>
        {menuAccount.map((item) => {
          return (
            <MenuAccount
              key={item.id}
              name={item.name}
              icon={item.icon}
              widthImg={item.width}
              heightImg={item.height}
            />
          );
        })}
      </S.Content>
      <S.ButtonBox>
        <Button name="Log Out" backgroundColor="gray" color="green" />
      </S.ButtonBox>
    </S.Container>
  );
};

export default Account;
