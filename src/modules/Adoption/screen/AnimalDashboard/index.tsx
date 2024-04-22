import { FlatList, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { IResponseAnimalByOwner, getByOwnerId } from "../../services/getData";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { putAnimal } from "../../services/putData";
import { DashboardStackParamList } from "../../routes/stack.routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<DashboardStackParamList, "Dashboard">;
export const AnimalDashboard = ({ navigation }: Props) => {

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
            <S.Text>Nome: {item.name}</S.Text>
            <S.Text>Especie: {item.species}</S.Text>
            <S.Text>Raça: {item.breed}</S.Text>
            <S.Text>Genero: {item.gender}</S.Text>
          </S.WrapperContent>
        </S.WrapperImagemAndContent>
        <S.WrapperIconsButtons>
          <TouchableOpacity onPress={() => navigation.navigate("UpdateAnimal", { id: item.id })}>
            <Feather name="edit" color={"#D84F2A"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => putAnimal({ adopted: true }, item.id)}
          >
            <Feather name="check-circle" color={"#0f6307"} size={25} />
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