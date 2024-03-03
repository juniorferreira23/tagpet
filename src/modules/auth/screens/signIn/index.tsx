import { Text, TouchableOpacity } from "react-native";
import { Input } from "../../../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUserFormSchema } from "./schemas";
import { signInUserFormType } from "./type";
import { signIn } from "../../services/firebase/signIn";

export const SignIn = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<signInUserFormType>({
        resolver: zodResolver(signInUserFormSchema)
    });

    const handleSignInSubmit = (data: signInUserFormType) => {
        signIn(data)
    }


    return (
        <>
            <Text>SignIn</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onBlur, value, onChange } }) => (
                    <Input  
                        placeholder="E-mail"
                        onBlur={onBlur}
                        value={value}
                        onChangeText={onChange}
                        errorMessage={errors.email?.message}
                        showError={!!errors.email}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onBlur, value, onChange } }) => (
                    <Input  
                        placeholder="Senha"
                        onBlur={onBlur}
                        value={value}
                        onChangeText={onChange}
                        errorMessage={errors.password?.message}
                        showError={!!errors.password}
                    />
                )}
            />
            <TouchableOpacity onPress={handleSubmit(handleSignInSubmit)}><Text>Entrar</Text></TouchableOpacity>
        </>
    );
}