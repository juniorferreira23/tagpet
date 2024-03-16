import { NativeStackScreenProps } from "@react-navigation/native-stack";
<<<<<<< HEAD
import { Text, Image } from "react-native";
import { AdoptionStackParamList } from "../../routes";
import * as S from "./styles";

type Props = NativeStackScreenProps<AdoptionStackParamList, "AnimalDetails">;

export const AnimalDetails = ({route}: Props) => {

=======
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AdoptionStackParamList } from "../../routes";
import { getImageGalery } from "../../../../utils/getImageGalery";
import { useState } from "react";

type Props = NativeStackScreenProps<AdoptionStackParamList, "AnimalDetails">;

export const AnimalDetails = ({ route }: Props) => {
    const [image, setImage] = useState<string>("https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg")
>>>>>>> f0be4805d893f72fb576aa2c73af514ed4852efd
    const name = route.params.name
    const gender = route.params.gender
    const owner = route.params.owner
    const age = route.params.age
    const month = route.params.month
    const breed = route.params.breed

    const handlerGender = (gender: string) => {
        if(gender == "female"){
            return (<Image source={require("../../assets/iconfemale.png")}/>)
        }else{
            return (<Image source={require("../../assets/iconmasculine.png")}/>)
        }
    }

    return (
<<<<<<< HEAD
        <S.Container>
            <S.WrapperImage>
                <S.Photo source={require('../../assets/image default.jpg')} />
            </S.WrapperImage>
            <S.WrapperDetails style={{shadowColor: "#000", shadowOffset: { width: 0, height: 4}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8}}>
                <S.WrapperText>
                    <S.TextPet>{name}</S.TextPet>
                    {handlerGender(gender)}
                </S.WrapperText>
                <S.WrapperText>
                    <S.Text>{breed}</S.Text>
                    <S.Text>{age !== null && `${age} ${age < 2 ? 'ano': 'anos'}`} {month !== null && `${month} ${month < 2 ? 'mes' : 'meses'}`}</S.Text>
                </S.WrapperText>
            </S.WrapperDetails>
            <S.WrapperDescription>
                <S.WrapperText>
                    <S.TextDescription>Dono:  <S.TextOwner>{owner}</S.TextOwner></S.TextDescription>
                    <S.Text>15/03/2024</S.Text>
                </S.WrapperText>
                <S.TextDescription>
                    Estou buscando um novo lar para você, onde será amado e cuidado. Seu carinho será eterno em meu coração. Que sua próxima jornada seja repleta de amor e felicidade.
                </S.TextDescription>
                <S.Buttom>
                    <S.TextButtom>Entrar em contato</S.TextButtom>
                </S.Buttom>
            </S.WrapperDescription>
        </S.Container>
=======
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
>>>>>>> f0be4805d893f72fb576aa2c73af514ed4852efd
    );
}