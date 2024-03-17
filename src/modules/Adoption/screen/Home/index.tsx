import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AdoptionStackParamList } from "../../routes";
import { IResponseAnimal, getAnimal } from "../../services/getData";
import { useEffect, useState } from "react";

type Props = NativeStackScreenProps<AdoptionStackParamList, "Home">;

export const Home = ({ navigation }: Props) => {
    const [animals, setAnimals] = useState<IResponseAnimal[]>([]);

    const handlerAnimalsCloud = async () => {
        await getAnimal({setAnimals});
    }

    useEffect(() => {
        handlerAnimalsCloud();
    }, [])

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <TouchableOpacity onPress={() => navigation.navigate("RegisterAnimal")}>
                <Text>Cadastrar Animal</Text>
            </TouchableOpacity>
            <FlatList
                data={animals}
                renderItem={({ item }) => (
                    <S.Card
                        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
                        onPress={() => navigation.navigate("AnimalDetails", item as any)}
                    >
                        <S.AnimalImage source={{ uri: item.image ?? "https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png" }} />
                        <S.WrapperContent>
                            <S.NameText style={{ color: "#0e0e0e" }}>{item.name}</S.NameText>
                            <S.Text>{item?.species}</S.Text>
                            <S.Text>{item?.breed}</S.Text>
                            <S.Text>{item?.owner}</S.Text>
                        </S.WrapperContent>
                    </S.Card>
                )
                }
            />
        </SafeAreaView>
    );
}