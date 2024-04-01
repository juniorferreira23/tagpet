import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    padding: 0px ${normalize(32)}px;
`;

export const WrapperLogo = styled.View`
    width: 100%;
    height: 15%;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.Image`
    width: 50%;
`;

export const WrapperImage = styled.View`
    height: 50%;
    justify-content: flex-start;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const WrapperText = styled.View`
    height: 15%;
    justify-content: center;
    border-radius: 30px 30px 0px 0px;
    background-color: #eee;
`;

export const Description = styled.Text`
    color: #666;
    font-size: 20px;
    font-weight: bold;
    text-align: justify;
`;

export const WrapperButton = styled.View`
    height: 15%;
    align-items: center;
    justify-content: flex-start;
    background-color: #eee;
`;

export const TouchableOpacity = styled.TouchableOpacity`
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