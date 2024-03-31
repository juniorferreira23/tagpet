import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    padding: 0px ${normalize(32)}px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
    margin-top: 10px;
`;

export const TextAlign = styled.Text`
    text-align: justify;
`;