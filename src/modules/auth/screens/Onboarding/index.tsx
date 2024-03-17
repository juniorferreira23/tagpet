import { Text } from "react-native";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";
import { texts } from "./mock";
import { useState } from "react";

// Acho que esse props pega as propriedades desejadas de uma tela e pode transferir para outra
// definimos tbm o tipo que foi criado iniciamente em routes da pasta de auth e indicamos que tela é essa informando o nome configurado na pilha de navegação
type Props = NativeStackScreenProps<AuthStackParamList, "Onboarding">;

// definimos uma variavel de lingua, só não entendi pq o = "pt"?
let language: "pt" | "en_usa" = "pt"

// Como parametro do componente Onboarding informamos que um objeto chamado navigaation receberá as propriedades da tela setadas no type props
// Mas não entendi direito o que seria essas props recebidas
// Só sei que esse paramentro permite ser chamado nos OnPress para efetuar a navegação entre telas
export const Onboarding = ({ navigation }: Props) => {
    const [state, setState] = useState(true);

    const handlerLanguage = () => {
        // Jogada inteligente para um toogle, a variavel sempre vai receber o contrario dela no caso de uma variavel boleana
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

// Através de um arquivo mock criamos um objetos com as mensagen da tela tanto em pt quanto en en e o objeto ou dicionario no python
// Pode receber chaves para indicar a chave que irá acessar e como nossa variavel language é dinamica será a chave que irá receber
// assim chamado o outro objeto na chave escolhida e alterando o texto dinâmicamente