import styled from "styled-components/native";
import normalize from "../../../../utils/Metrics";

export const Container = styled.ScrollView`
    width: 100%;
    height: 100%;
    padding: 0px ${normalize(32)}px;
`;