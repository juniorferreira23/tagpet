import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";
import { StatusBar } from "react-native";

export const Container = styled.ScrollView`
    flex: 1;
    padding: ${normalize(32)}px ${normalize(32)}px 0px ${normalize(32)}px;
`;

export const WrapperLogo = styled.View`
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: #5CB15A;
`;

export const Form = styled.View`
    justify-content: center;
    row-gap: 15px;
`;

export const WrapperInput = styled.View`
    width: 100%;
`;

export const WrapperButton = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
`;

export const BtnLogin = styled.TouchableOpacity`
    background-color: #5CB15A;
    border-radius: 30px;
    width: 100%;
    padding: ${normalize(10, "height")}px 0;
    margin-top: 10px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

export const BtnsOptions = styled.TouchableOpacity`
    background-color: None;
    padding-top: ${normalize(10)}px;
`;

export const TextOptionsLeft = styled.Text`
    color: #666;
    font-size: 14px;
    font-weight: bold;
`;

export const TextOptionsRight = styled.Text`
    color: #666;
    font-size: 14px;
    font-weight: bold;
    text-align: right;
`;