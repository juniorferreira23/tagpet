import { Input } from "../../../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserFormSchema } from "./schemas";
import { signUpUserFormType } from "./type";
import { signUp } from "../../services/firebase/signUp";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";

type Props = NativeStackScreenProps<AuthStackParamList, "SignUp">;

export const SignUp = ({navigation}: Props) => {
    const { control, handleSubmit, formState: { errors } } = useForm<signUpUserFormType>({
        resolver: zodResolver(signUpUserFormSchema)
    });

    const handleSignInSubmit = (data: signUpUserFormType) => {
        signUp(data)
    }

    return (
        <S.Container>
            <S.WrapperLogo>
                <S.Logo source={require("../../assets/logo.png")}
                resizeMode="cover"/>
            </S.WrapperLogo>
            <S.Form>
                {/* <Controller
                        control={control}
                        name="name"
                        render={({ field: { onBlur, value, onChange } }) => (
                            <S.WrapperInput>
                                <Input
                                    label="Nome"
                                    placeholder="Digite seu nome"
                                    onBlur={onBlur}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.name?.message}
                                    showError={!!errors.name}
                                />
                            </S.WrapperInput>
                        )}
                    /> */}

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
                        <S.Text>Registrar</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
                <S.BtnsOptions onPress={() => navigation.navigate("SignIn")}>
                    <S.TextOptionsLeft>Voltar</S.TextOptionsLeft>
                </S.BtnsOptions>
            </S.Form>
           
        </S.Container>
    );
}