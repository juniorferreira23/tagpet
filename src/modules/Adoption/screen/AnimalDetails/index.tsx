import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { AdoptionStackParamList } from "../../routes";

type Props = NativeStackScreenProps<AdoptionStackParamList, "AnimalDetails">;

export const AnimalDetails = ({route}: Props) => {
    const name = route.params.name
    const age = route.params.age
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 24 }}>{name}</Text>
            <Text style={{ color: "black", fontSize: 24 }}>{age}</Text>
        </View>
    );
}