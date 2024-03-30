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
import axios from "axios";
import { useEffect } from "react";


type Props = NativeStackScreenProps<AuthStackParamList, "SignUp">;

export const SignUp = ({ navigation }: Props) => {
    const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm<signUpUserFormType>({
        resolver: zodResolver(signUpUserFormSchema)
    });
    const watchZipCode = watch("zip_code");

    const handleSignInSubmit = (data: signUpUserFormType) => {
        signUp(data)
    }

    const { translateTo } = useTranslate();

    const handlerZipCode = async (zipCode: string) => {
        try {
           const locateInformations = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
           setValue("city", locateInformations.data?.localidade)
        } catch (error) {
            console.warn("Deu erro no viacep");
        }
    }

    useEffect(() => {
        watchZipCode?.length > 7 && handlerZipCode(watchZipCode)
    }, [watchZipCode])


    return (
        <S.Container >
            <S.WrapperLogo>
                <S.Logo
                    source={require("../../assets/logo.png")}
                    resizeMode="cover"
                />
            </S.WrapperLogo>
            <S.Form>
                <S.Title>{texts[translateTo].title}</S.Title>
                <Controller
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
                />
                <Controller
                    control={control}
                    name="cell_phone"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Celular"
                                placeholder="ex: (DDD) 9 XXXX-XXXX"
                                keyboardType="number-pad"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.cell_phone?.message}
                                showError={!!errors.cell_phone}
                            />
                        </S.WrapperInput>
                    )}
                />
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
                    name="zip_code"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="CEP"
                                placeholder={"xxxxx-xxx"}
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
                    name="city"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Cidade"
                                placeholder={"Sua cidade"}
                                editable={false}
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

                <Controller
                    control={control}
                    name="confirm_password"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label={"Confirmar senha"}
                                placeholder={"Digite novamente sua senha"}
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.confirm_password?.message}
                                showError={!!errors.confirm_password}
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