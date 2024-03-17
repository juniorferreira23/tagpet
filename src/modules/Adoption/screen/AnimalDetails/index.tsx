import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Linking } from "react-native";
import { AdoptionStackParamList } from "../../routes";
import * as S from "./styles";

type Props = NativeStackScreenProps<AdoptionStackParamList, "AnimalDetails">;

export const AnimalDetails = ({ route }: Props) => {

    const name = route.params.name
    const gender = "female"
    const owner = route.params.owner
    const age = route.params.age
    const month = route.params.month
    const breed = route.params.breed
    const image = route.params.image
    const telefone = route.params.telefone

    const handlerGender = (gender: string) => {
        return (<Image source={
            gender === "female"
                ? require("../../assets/iconfemale.png")
                : require("../../assets/iconmasculine.png")
        } />)
    }

    const linkWhatsapp = () => {
        Linking.openURL(`https://wa.me/55${telefone}`)
    }

    return (
        <S.Container>
            <S.WrapperImage>
                <S.Photo source={{ uri: image }} />
            </S.WrapperImage>
            <S.WrapperDetails style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 }}>
                <S.WrapperText>
                    <S.TextPet>{name}</S.TextPet>
                    {handlerGender(gender)}
                </S.WrapperText>
                <S.WrapperText>
                    <S.Text>{breed}</S.Text>
                    <S.Text>{age !== null && `${age} ${age < 2 ? 'ano' : 'anos'}`} {month !== null && `${month} ${month < 2 ? 'mes' : 'meses'}`}</S.Text>
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
                <S.Buttom onPress={linkWhatsapp}>
                    <S.TextButtom>Entrar em contato</S.TextButtom>
                </S.Buttom>
            </S.WrapperDescription>
        </S.Container>

    );
}