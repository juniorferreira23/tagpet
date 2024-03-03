import { Text, TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
    errorMessage: string | undefined;
    showError: boolean;
}

export const Input = ({ errorMessage, showError, ...rest }: Props) => {
    return (
        <View>
            <TextInput {...rest} />
            {showError && <Text>{errorMessage}</Text>}
        </View>
    );
}