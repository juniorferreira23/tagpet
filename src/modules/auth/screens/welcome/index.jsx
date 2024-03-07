import { Text } from "react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
    const navigation = useNavigation();

    return (
        <S.Container>
            <S.WrapperLogo>
                <S.Logo source={require("../../assets/logo.png")}
                resizeMode="cover"/>
            </S.WrapperLogo>
            <S.WrapperImage>
                <S.Image
                    source={require("../../assets/welcome.png")}
                    resizeMode="contain"
                />
            </S.WrapperImage>
            <S.WrapperText>
                <S.Description>
                    <Text>
                        Bem-vindo ao nosso app dedicado aos cuidados do seu pet! 🐾
                    </Text>
                </S.Description>
            </S.WrapperText>
            <S.WrapperButton>
                <S.TouchableOpacity 
                onPress={() => navigation.navigate("SignIn")}>
                    <S.Text>Continuar</S.Text>
                </S.TouchableOpacity>
            </S.WrapperButton>
        </S.Container>
    );
}