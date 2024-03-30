import { Input } from "../../../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserFormSchema } from "./schemas";
import { signUpUserFormType } from "./type";
import { signUp } from "../../services/firebase/signUp";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";
import { useTranslate } from "../../../../context/TranslateContext";
import { texts } from "./mock";


type Props = NativeStackScreenProps<AuthStackParamList, "SignUp">;

export const SignUp = ({navigation}: Props) => {
    const { control, handleSubmit, formState: { errors } } = useForm<signUpUserFormType>({
        resolver: zodResolver(signUpUserFormSchema)
    });

    const handleSignInSubmit = (data: signUpUserFormType) => {
        signUp(data)
    }

    const { toggleLanguage, translateTo } = useTranslate();

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
                <S.Title>{texts[translateTo].title}</S.Title>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="E-mail"
                                placeholder={texts[translateTo].inputEmail}
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
                                label={texts[translateTo].labelPassword}
                                placeholder={texts[translateTo].inputPassword}
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
                        <S.Text>{texts[translateTo].register}</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
                <S.BtnsOptions onPress={() => navigation.navigate("SignIn")}>
                    <S.TextOptionsLeft>{texts[translateTo].return}</S.TextOptionsLeft>
                </S.BtnsOptions>
            </S.Form>
           
        </S.Container>
    );
}