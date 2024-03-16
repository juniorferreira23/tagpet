import { Controller, useForm } from "react-hook-form";
import { saveAnimal } from "../../services/saveData";
import { ISaveAnimal, registerAnimalFormType } from "../../types";
import * as S from "./styles"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAnimalFormSchema } from "./schemas";
import auth from "@react-native-firebase/auth";
import { Input } from "../../../../components/Input";
import { Pressable } from "react-native";
import { getImageGalery } from "../../../../utils/getImageGalery";
import { useState } from "react";
import { saveImage } from "../../services/saveImage";
import { putAnimal } from "../../services/putData";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AdoptionStackParamList } from "../../routes";

type Props = NativeStackScreenProps<AdoptionStackParamList, "RegisterAnimal">;

export const RegisterAnimal = ({ navigation }: Props) => {
    const [image, setImage] = useState("");
    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm<registerAnimalFormType>({
        resolver: zodResolver(registerAnimalFormSchema)
    });

    const handleSignInSubmit = async (data: registerAnimalFormType) => {
        const emailOwner = auth().currentUser?.email;
        if (!emailOwner) return;
        const payload: ISaveAnimal = {
            owner: emailOwner,
            month: "0",
            ...data,
            image: null,
        }
        const animalId = await saveAnimal(payload);
        handlerSubmitAndPutImage(animalId);
        navigation.navigate("Home");
    }

    const handlerSubmitAndPutImage = async (animalId: string) => {
        const animalUrl = await saveImage(image, animalId);
        if (!animalUrl) return;
        putAnimal({ image: animalUrl }, animalId);
    }

    const handlerPickerImage = async () => {
        await getImageGalery(setValue);
        setImage(getValues("image"))
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
                    name="age"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Idade"
                                placeholder="Digite a idade do animal"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.age?.message}
                                showError={!!errors.age}
                            />
                        </S.WrapperInput>
                    )}
                />

                <Controller
                    control={control}
                    name="month"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Mês"
                                placeholder="quantos meses seu animal tem ?"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.month?.message}
                                showError={!!errors.month}
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
                                label="Especie"
                                placeholder="Qual a especie ?"
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
                    name="breed"
                    render={({ field: { onBlur, value, onChange } }) => (
                        <S.WrapperInput>
                            <Input
                                label="Raça"
                                placeholder="Qual a Raça ?"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={errors.breed?.message}
                                showError={!!errors.breed}
                            />
                        </S.WrapperInput>
                    )}
                />
                <S.WrapperButton>
                    <S.BtnLogin onPress={() => handlerPickerImage()}>
                        <S.Text>SELECIONAR IMAGEM DA GALERIA</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
                {
                    !!image &&
                    (<S.ImageAnimal source={{ uri: image }} />)
                }
                <S.WrapperButton>
                    <S.BtnLogin onPress={handleSubmit(handleSignInSubmit)}>
                        <S.Text>Registrar</S.Text>
                    </S.BtnLogin>
                </S.WrapperButton>
            </S.Form>

        </S.Container>
    );
}