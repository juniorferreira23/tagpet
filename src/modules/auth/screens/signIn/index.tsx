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
            <S.WrapperLogo>
                <S.Logo source={require("../../assets/logo.png")}
                resizeMode="cover"/>
            </S.WrapperLogo>
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
                 <S.WrapperButton>
                    <S.BtnLogin onPress={handleSubmit(handleSignInSubmit)}>
                        <S.Text>Entrar</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
                <S.WrapperOptions>
                    <S.BtnsOptions>
                        <S.TextOptionsLeft>Esqueci minha senha</S.TextOptionsLeft>
                    </S.BtnsOptions>
                    <S.BtnsOptions>
                        <S.TextOptionsRight>Registrar</S.TextOptionsRight>
                    </S.BtnsOptions>
                </S.WrapperOptions>
            </S.Form>
           
        </S.Container>
    );
}