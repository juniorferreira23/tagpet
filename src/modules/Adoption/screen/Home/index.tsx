import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AdoptionStackParamList } from "../../routes";

type Props = NativeStackScreenProps<AdoptionStackParamList, "Home">;

export const Home = ({ navigation }: Props) => {
    const data: {
        id: number;
        name: string;
        age: number;
        month: number | null;
        breed: string;
        type: string;
        image: string;
        owner: string;
    }[] = [
            {
                id: 1,
                name: "Lulu",
                age: 12,
                month: null,
                breed: "Buldog",
                type: "dog",
                image: "https://blog.cobasi.com.br/wp-content/uploads/2021/09/AdobeStock_567502314-1.webp",
                owner: "Gabriel"
            },
            {
                id: 2,
                name: "Shark",
                age: 4,
                month: 2,
                breed: "Poodle",
                type: "dog",
                image: "https://blog.cobasi.com.br/wp-content/uploads/2021/09/AdobeStock_567502314-1.webp",
                owner: "Junior"
            },
            {
                id: 3,
                name: "Lalau",
                age: 0,
                month: 6,
                breed: "Golden Retriever",
                type: "dog",
                image: "https://blog.cobasi.com.br/wp-content/uploads/2021/09/AdobeStock_567502314-1.webp",
                owner: "Augusto"
            },
            {
                id: 4,
                name: "Terrier",
                age: 2,
                month: 1,
                breed: "Poodle",
                type: "dog",
                image: "https://blog.cobasi.com.br/wp-content/uploads/2021/09/AdobeStock_567502314-1.webp",
                owner: "Vitor"
            },
            {
                id: 5,
                name: "Terrier",
                age: 2,
                month: 1,
                breed: "Poodle",
                type: "dog",
                image: "https://blog.cobasi.com.br/wp-content/uploads/2021/09/AdobeStock_567502314-1.webp",
                owner: "Vitor"
            }
        ]

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <TouchableOpacity onPress={() => navigation.navigate("RegisterAnimal")}>
                <Text>CADASTRAR ANIMAL</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <S.Card
                        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
                        onPress={() => navigation.navigate("AnimalDetails", item)}
                    >
                        <S.AnimalImage source={{ uri: item.image }} />
                        <S.WrapperContent>
                            <S.NameText style={{ color: "#0e0e0e" }}>{item.name}</S.NameText>
                            <S.Text>{item.type}</S.Text>
                            <S.Text>{item.breed}</S.Text>
                            <S.Text>{item.age} anos {item.month !== null && `e ${item.month} ${item.month < 2 ? "mes" : "meses"}`}</S.Text>
                            <S.Text>{item.owner}</S.Text>
                        </S.WrapperContent>
                    </S.Card>
                )}
            />
        </SafeAreaView>
    );
}