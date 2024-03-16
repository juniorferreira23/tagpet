import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const WrapperImage = styled.View`
    width: 100%;
    height: 50%;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const WrapperDetails = styled.View`
    width: 80%;
    height: 15%;
    background-color: white;
    border-radius: 25px;
    padding: ${normalize(20)}px ${normalize(20, 'height')}px;
    position: relative;
    top: -35px;
    margin: 0 auto;
    row-gap: ${normalize(11, 'height')}px;
`;

export const WrapperText = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TextPet = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size: 16px;
`;

export const WrapperDescription = styled.View`
    height: 50%;
    padding: 0 ${normalize(32)}px;
    row-gap: ${normalize(15)}px;
`;

export const TextOwner = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: black;
`;

export const TextDescription = styled.Text`
    font-size: 16px;
    color: #888;
`;

export const Buttom = styled.TouchableOpacity`
    background-color: #5CB15A;
    border-radius: 30px;
    width: 100%;
    padding: ${normalize(10, "height")}px 0;
    margin-top: 10px;
`;

export const TextButtom = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;