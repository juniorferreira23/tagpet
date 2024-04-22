import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Linking } from "react-native";
import { AdoptionStackParamList } from "../../routes";
import * as S from "./styles";
import { getUser } from "../../../../service/firebase/getUserData";

type Props = NativeStackScreenProps<AdoptionStackParamList, "AnimalDetails">;

export const AnimalDetails = ({ route, navigation }: Props) => {

    const name = route.params.name
    const gender = route.params.gender
    const owner = route.params.owner
    const age = route.params.age
    const month = route.params.month
    const breed = route.params.breed
    const image = route.params.image
    const userId = route.params.user_id

    const handlerGender = (gender: string) => {
        return (<Image source={
            gender === "feminino"
                ? require("../../assets/iconfemale.png")
                : require("../../assets/iconmasculine.png")
        } />)
    }

    const linkWhatsapp = async() => {
        const user = await getUser(userId)
        const userCellPhone = user?.get("cell_phone")
        Linking.openURL(`https://wa.me/55${userCellPhone}`)
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
                    <S.Text>{age !== null && `${age} ${age < 2 ? 'ano' : 'anos'}`} {month == 0 ? '' : month !== null && `${month} ${month < 2 ? 'mes' : 'meses'}`}</S.Text>
                </S.WrapperText>
            </S.WrapperDetails>
            <S.WrapperDescription>
                <S.WrapperText>
                    <S.TextDescription>Dono:  <S.TextOwner>{owner}</S.TextOwner></S.TextDescription>
                    <S.Text>11/04/2024</S.Text>
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