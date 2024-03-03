import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Title = styled.Text`
    font-size: 24px;
    color: black;
    font-weight: 700;
    line-height: 28px;
`;

export const Container = styled.View`
    padding: 0px ${normalize(32)}px;
    width: 100%;
    height: 100%;
    row-gap: ${normalize(100, "height")}px;
    align-items: center;
    justify-content: center;
`;

export const WrapperInput = styled.View`
    width: 100%;
`;

export const Form = styled.View`
    width: 100%;
`;