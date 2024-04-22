import { Input } from "../../../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUserFormSchema } from "./schemas";
import { signInUserFormType } from "./type";
import { signIn } from "../../services/firebase/signIn";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";
import { useTranslate } from "../../../../context/TranslateContext";
import { texts } from "./mock";


type Props = NativeStackScreenProps<AuthStackParamList, "SignIn">;

export const SignIn = ({navigation}: Props) => {
    const { control, handleSubmit, formState: { errors } } = useForm<signInUserFormType>({
        resolver: zodResolver(signInUserFormSchema)
    });

    const handleSignInSubmit = (data: signInUserFormType) => {
        signIn(data)
    }

    const { translateTo } = useTranslate();

    return (
        <S.Container>
            <S.WrapperLogo>
                <S.Logo source={require("../../assets/logo.png")}
                resizeMode="cover"/>
            </S.WrapperLogo>            
            <S.Form>
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
                                secureTextEntry
                            />
                        </S.WrapperInput>
                    )}
                />
                 <S.WrapperButton>
                    <S.BtnLogin onPress={handleSubmit(handleSignInSubmit)}>
                        <S.Text>{texts[translateTo].signIn}</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
                <S.WrapperOptions>
                    <S.BtnsOptions>
                        <S.TextOptionsLeft>{texts[translateTo].forgotPassword}</S.TextOptionsLeft>
                    </S.BtnsOptions>
                    <S.BtnsOptions onPress={() => navigation.navigate("SignUp")}>
                        <S.TextOptionsRight>{texts[translateTo].register}</S.TextOptionsRight>
                    </S.BtnsOptions>
                </S.WrapperOptions>
            </S.Form>
           
        </S.Container>
    );
}