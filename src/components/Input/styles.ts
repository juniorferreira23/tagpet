import styled from "styled-components/native";
import normalize from "../../utils/Metrics";

export const Root = styled.View`
    row-gap: ${normalize(6)}px;
    width: 100%;
    align-items: center;
`;

export const RootInput = styled.View`
    border-width: ${normalize(2)}px;
    border-radius: 8px;
    padding: ${normalize(4, "height")}px ${normalize(12)}px;
    border-color: #6c9a8b;
    width: 100%;
`;

export const ErrorText = styled.Text`
    color: #780000;
    font-size: 13px;
`;

export const Label = styled.Text`
    color: black;
    font-weight: 700;
    font-size: 16px;
    align-self: flex-start;
`;