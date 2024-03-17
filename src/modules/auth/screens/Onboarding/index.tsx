import { Text } from "react-native";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";
import { texts } from "./mock";
import { useState } from "react";
import { useTranslate } from "../../../../context/TranslateContext";

// Acho que esse props pega as propriedades desejadas de uma tela e pode transferir para outra
// definimos tbm o tipo que foi criado iniciamente em routes da pasta de auth e indicamos que tela é essa informando o nome configurado na pilha de navegação
type Props = NativeStackScreenProps<AuthStackParamList, "Onboarding">;

// Como parametro do componente Onboarding informamos que um objeto chamado navigaation receberá as propriedades da tela setadas no type props
// Mas não entendi direito o que seria essas props recebidas
// Só sei que esse paramentro permite ser chamado nos OnPress para efetuar a navegação entre telas
export const Onboarding = ({ navigation }: Props) => {
    const [state, setState] = useState(false);
    const { toggleLanguage, translateTo } = useTranslate();

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
                        {texts[translateTo].welcome} 🐾
                    </Text>
                </S.Description>
            </S.WrapperText>
            <S.WrapperButton>
                <S.TouchableOpacity
                    onPress={() => navigation.navigate("SignIn")}>
                    <S.Text>{texts[translateTo].btnTitle}</S.Text>
                </S.TouchableOpacity>
                <S.TouchableOpacity
                    onPress={() => {
                        setState(!state);
                        toggleLanguage(!state); //evitar o delay inicial;
                        }}>

                    <S.Text>{texts[translateTo].btnTitleChangeLanguage}</S.Text>
                </S.TouchableOpacity>
            </S.WrapperButton>
        </S.Container>
    );
}

// Através de um arquivo mock criamos um objetos com as mensagen da tela tanto em pt quanto en en e o objeto ou dicionario no python
// Pode receber chaves para indicar a chave que irá acessar e como nossa variavel language é dinamica será a chave que irá receber
// assim chamado o outro objeto na chave escolhida e alterando o texto dinâmicamente