import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    padding: 0px ${normalize(32)}px;
`;


export const Form = styled.ScrollView`
    width: 100%;
    row-gap: 15px;
    flex: 1;
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

export const ImageAnimal = styled.Image.attrs({resizeMode: "contain"})`
    width: 200px;
    height: ${(4 * 200) / 3}px;
`;