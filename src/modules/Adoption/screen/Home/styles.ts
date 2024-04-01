import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
// import { normalize } from "../../../../utils/Metrics"

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
`;

// export const WrapperButton = styled.View`
//     align-items: flex-start;
//     justify-content: flex-start;
//     padding:  10px 32px;
// `;

export const Card = styled.TouchableOpacity.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
} as TouchableOpacityProps)`
    background-color: white;
    margin-bottom: 10px;
    flex-direction: row;
    padding: 10px 0
`;

export const NameText = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #0e0e0e;
`;

export const WrapperContent = styled.View`
    row-gap: 10px;

`;

export const AnimalImage = styled.Image.attrs({
    resizeMode: "cover"
})`
    width: 200px;
    height: 160px;
    border-radius: 10px;
`;