import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { AdoptionStackParamList } from "../../routes";
import { IResponseAnimal, getAnimal } from "../../services/getData";
import { useEffect, useState } from "react";
import { useTranslate } from "../../../../context/TranslateContext";
import { texts } from "./mock";


type Props = DrawerScreenProps<AdoptionStackParamList, "Home">;

export const Home = ({ navigation }: Props) => {
    const [animals, setAnimals] = useState<IResponseAnimal[]>([]);

    const handlerAnimalsCloud = async () => {
        await getAnimal({setAnimals});
    }

    useEffect(() => {
        handlerAnimalsCloud();
    }, [])

    const { translateTo } = useTranslate();

    return (
        <S.Container style={{ marginTop: StatusBar.currentHeight }}>
            {/* <S.WrapperButton>
                <S.BtnLogin onPress={() => console.log(navigation.getState())}>
                    <S.TextBtn>Abrir Navegação Lateral</S.TextBtn>
                </S.BtnLogin>
            </S.WrapperButton> */}
            <FlatList
                data={animals}
                renderItem={({ item }) => (
                    <S.Card
                        style={{ alignItems: "center", justifyContent: "space-around" }}
                        onPress={() => navigation.navigate("AnimalDetails", item as any)}
                    >
                        <S.AnimalImage source={{ uri: item.image ?? "https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png" }} />
                        <S.WrapperContent>
                            <S.NameText style={{ color: "#0e0e0e" }}>{item.name}</S.NameText>
                            <S.Text>{texts[translateTo].species}: {item?.species}</S.Text>
                            <S.Text>{texts[translateTo].breed}: {item?.breed}</S.Text>
                            <S.Text>{texts[translateTo].owner}: {item?.owner}</S.Text>
                        </S.WrapperContent>
                    </S.Card>
                )
                }
            />
        </S.Container>
    );
}