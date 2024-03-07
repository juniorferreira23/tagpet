import { Text, TouchableOpacity } from "react-native";
import { Input } from "../../../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUserFormSchema } from "./schemas";
import { signInUserFormType } from "./type";
import { signIn } from "../../services/firebase/signIn";
import * as S from "./styles";

export const SignIn = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<signInUserFormType>({
        resolver: zodResolver(signInUserFormSchema)
    });

    const handleSignInSubmit = (data: signInUserFormType) => {
        signIn(data)
    }

    return (
        <S.Container>
            <S.Title>Tagpet</S.Title>
            <S.Form>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="E-mail"
                                placeholder="Digite seu E-mail"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.email?.message}
                                showError={!!errors.email}
                            />
                        </S.WrapperInput>
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Senha"
                                placeholder="Digite sua senha"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.password?.message}
                                showError={!!errors.password}
                            />
                        </S.WrapperInput>
                    )}
                />
            <TouchableOpacity onPress={handleSubmit(handleSignInSubmit)}><Text>Entrar</Text></TouchableOpacity>
            </S.Form>
        </S.Container>
    );
}