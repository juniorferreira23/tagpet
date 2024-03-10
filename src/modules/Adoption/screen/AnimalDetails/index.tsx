import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AdoptionStackParamList } from "../../routes";
import { getImageGalery } from "../../../../utils/getImageGalery";
import { useState } from "react";

type Props = NativeStackScreenProps<AdoptionStackParamList, "AnimalDetails">;

export const AnimalDetails = ({ route }: Props) => {
    const [image, setImage] = useState<string>("https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg")
    const name = route.params.name
    const age = route.params.age
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 24 }}>{name}</Text>
            <Text style={{ color: "black", fontSize: 24 }}>{age}</Text>
            <TouchableOpacity
                onPress={() => getImageGalery(setImage)}
            >
                <Text style={{ color: "black", fontSize: 24 }}>AQUI O BOTÃO</Text>
            </TouchableOpacity>
            {/* {
                !!image && (
                    <Image
                        style={{
                            width: 300,
                            height: 400
                        }}
                        source={{ uri: image }}
                    />
                )
            } */}
            <Image
                resizeMode="stretch"
                style={{
                    width: 300 / 1.5,
                    height: 400 / 1.5
                }}
                source={{ uri: image }}
            />
        </View>
    );
}