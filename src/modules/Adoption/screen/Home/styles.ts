import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Card = styled.TouchableOpacity.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
} as TouchableOpacityProps)`
    background-color: white;
    margin-bottom: 10px;
    flex-direction: row;
`;

export const NameText = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #0e0e0e;
`;

export const WrapperContent = styled.View`

`;

export const AnimalImage = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: 200px;
    height: 200px;
`;