import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    margin-top: ${StatusBar.currentHeight}px;
    padding: 16px;
`;

export const ContentContainer = styled.View`
    background-color: #D9D9D9;
    padding: 16px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperImagemAndContent = styled.View`
    flex-direction: row;
    column-gap: 16px;
`;

export const WrapperContent = styled.View`
    justify-content: space-between;
`;

export const AnimalImage = styled.Image.attrs({
    resizeMode: "cover"
})`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;

export const WrapperIconsButtons = styled.View`
    justify-content: center;
    row-gap: 20px;
`;