import * as S from "./styles";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/Input";
import { alertAnimalFormSchema } from "./schema";
import { z } from "zod";
import axios from "axios";
import { getUser } from "../../../../service/firebase/getUserData";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AdoptionStackParamList } from "../../routes";
import { AdoptionDrawerParamList } from "../../routes/drawer.routes";

type alertAnimalFormType = z.infer<typeof alertAnimalFormSchema>

type Props = NativeStackScreenProps<AdoptionDrawerParamList, "AnimalAlert">;

export const AnimalAlert = ({ navigation }: Props) => {

    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm<alertAnimalFormType>({
        resolver: zodResolver(alertAnimalFormSchema)
    });

    const handleUserData = async () => {
        const userData = await getUser()
        return userData?.get('city')
    }

    const handleAlertSubmit = async (data: alertAnimalFormType) => {
        const city = await handleUserData()
        let description = `${data.species}: ${data.name}. ${data.description}`
        axios.post('http://192.168.1.107:3000/api/send-notification', {
            title: 'Alerta de Animal desaparecido',
            city: city,
            body: description
        })
        navigation.navigate("Home");
    }
    
    return (
        <S.Container>
            <S.Form>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Nome"
                                placeholder="Digite o nome do animal"
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
                    name="species"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Espécie"
                                placeholder="Digite a espécie do animal"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.species?.message}
                                showError={!!errors.species}
                            />
                        </S.WrapperInput>
                    )}
                />
                <Controller
                    control={control}
                    name="description"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Descrição"
                                placeholder="Descreva seu animal"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.description?.message}
                                showError={!!errors.description}
                            />
                        </S.WrapperInput>
                    )}
                />
                <S.WrapperButton>
                    <S.BtnLogin onPress={handleSubmit(handleAlertSubmit)}>
                        <S.Text>Emitir Alerta</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
            </S.Form>
        </S.Container>
    )
}