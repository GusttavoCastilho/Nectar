import React from "react";

import * as S from "./styles";

import MenuAccount from "../../components/MenuAccount";
import { menuAccount } from "../../components/MenuAccount/mock/menuAccount";
import Button from "../../components/Button";

import { useAuth } from "../../context/auth";

const Account: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <S.UserImage source={{ uri: user.photo }} />
        <S.BoxInfo>
          <S.Username>{user.name}</S.Username>
          <S.UserEmail>{user.email}</S.UserEmail>
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
        <Button
          name="Log Out"
          backgroundColor="gray"
          color="green"
          onPress={signOut}
        />
      </S.ButtonBox>
    </S.Container>
  );
};

export default Account;
