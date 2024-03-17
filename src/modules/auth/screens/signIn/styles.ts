import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    padding: 0px ${normalize(32)}px;
`;

export const WrapperLogo = styled.View`
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.Image`
    width: 50%;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: #5CB15A;
    padding: 30px 0;
`;

export const Form = styled.View`
    width: 100%;
    height: 50%;
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

export const WrapperOptions = styled.View`
    flex-direction: row;
`;

export const BtnsOptions = styled.TouchableOpacity`
    background-color: None;
    width: 49%;
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