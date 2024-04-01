import { Text } from "react-native";
import * as S from "./styles";
import { useTranslate } from "../../../../context/TranslateContext";
import { texts } from "./mock";


export const About = () => {
    const { translateTo } = useTranslate();
    
    return (
        <S.Container>
            <S.Title>{texts[translateTo].goals}</S.Title>
            <S.TextAlign>{texts[translateTo].description}</S.TextAlign>

            <S.Title>{texts[translateTo].students}</S.Title>
            <Text>Elizeu Leoncio Ferreira Júnior - 01576238</Text>
            <Text>Pedro Andrade da Silva Neto - 01603590</Text>
            <Text>Flavio José de Albuquerque Barbosa - 01648810</Text>
            <Text>Davi dos Santos Lima - 01358277</Text>
            <Text>Flavio José de Albuquerque Barbosa - 01648810</Text>
            <Text>Paulo Vinícius Feliciano de Souza - 01618133</Text>
            <Text>Rosilene da Silva Lima - 01619051</Text>
            <Text>Lucas Maia Sivini - 01616874</Text>
            <Text>Jean Ricardo França da Silva - 01583760</Text>
            <Text>Matheus de Oliveira Lins Mendes Simes- 01618966</Text>
        </S.Container>
    )
};
