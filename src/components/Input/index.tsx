import { Text, TextInput, TextInputProps, View } from "react-native";
import * as S from "./styles";

interface Props extends TextInputProps {
    errorMessage: string | undefined;
    showError: boolean;
    label: string;
}

export const Input = ({ errorMessage, showError, label, ...rest }: Props) => {
    return (
        <S.Root>
            <S.Label>{label}</S.Label>
            <S.RootInput>
                <TextInput {...rest} />
            </S.RootInput>
            {showError && <S.ErrorText>{errorMessage}</S.ErrorText>}
        </S.Root>
    );
}