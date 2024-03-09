import { Text } from "react-native";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";
import { texts } from "./mock";
import { useState } from "react";

type Props = NativeStackScreenProps<AuthStackParamList, "Onboarding">;

let language: "pt" | "en_usa" = "pt"

export const Onboarding = ({ navigation }: Props) => {
    const [state, setState] = useState(true);

    const handlerLanguage = () => {
        setState(!state)
        language = state ? "pt" : "en_usa";
    }

    return (
        <S.Container>
            <S.WrapperLogo>
                <S.Logo source={require("../../assets/logo.png")}
                    resizeMode="cover" />
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
                        {texts[language].welcome} 🐾
                    </Text>
                </S.Description>
            </S.WrapperText>
            <S.WrapperButton>
                <S.TouchableOpacity
                    onPress={() => navigation.navigate("SignIn")}>
                    <S.Text>{texts[language].btnTitle}</S.Text>
                </S.TouchableOpacity>
                <S.TouchableOpacity
                    onPress={() => handlerLanguage()}>
                    <S.Text>{texts[language].btnTitleChangeLanguage}</S.Text>
                </S.TouchableOpacity>
            </S.WrapperButton>
        </S.Container>
    );
}