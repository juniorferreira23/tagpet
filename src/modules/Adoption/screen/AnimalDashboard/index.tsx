import { FlatList, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { IResponseAnimalByOwner, getByOwnerId } from "../../services/getData";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { putAnimal } from "../../services/putData";

export const AnimalDashboard = () => {

  const [animal, setAnimal] = useState<IResponseAnimalByOwner[]>([]);

  const handlerAnimalsCloud = async () => {
    await getByOwnerId()
      .then(res => setAnimal(res))
      .catch(err => console.warn(err));
  }

  const RenderItem = ({ item }: { item: IResponseAnimalByOwner }) => {
    return (
      <S.ContentContainer>
        <S.WrapperImagemAndContent>
          <S.AnimalImage
            source={{ uri: item.image ?? "https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png" }}
          />
          <S.WrapperContent>
            <Text>Nome: {item.name}</Text>
            <Text>Especie: {item.species}</Text>
            <Text>Raça: {item.breed}</Text>
            <Text>Genero: {item.gender}</Text>
          </S.WrapperContent>
        </S.WrapperImagemAndContent>
        <S.WrapperIconsButtons>
          <TouchableOpacity>
            <Feather name="edit" color={"#D84F2A"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => putAnimal({adopted: true}, item.id)}
          >
            <Feather name="check-circle" color={"#0D9E00"} size={25} />
          </TouchableOpacity>
        </S.WrapperIconsButtons>
      </S.ContentContainer>
    );
  }

  useFocusEffect(() => {
    handlerAnimalsCloud();
  })

  return (
    <S.Container>
      <FlatList
        data={animal}
        renderItem={RenderItem}
      />
    </S.Container>
  );
}