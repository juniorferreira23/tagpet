import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/Input";
import { getUser } from "../../../../service/firebase/getUserData";
import { saveImage } from "../../services/saveImage";
import { putAnimal } from "../../services/putData";
import { ISaveAnimal, registerAnimalFormType } from "../../types";
import * as S from "./styles";
import { getImageGalery } from "../../../../utils/getImageGalery";
import { getByAnimalId } from "../../services/getData";
import { useFocusEffect } from "@react-navigation/native";

interface FormProps {
    schemaZod: any;
    objectId?: string;
    saveAnimal?: (payload: ISaveAnimal) => Promise<string>;
    updateAnimal?: (payload: Partial<ISaveAnimal>, options: string) => Promise<string>;
    navigation: () => void;
    type: "register" | "update";
}

export const Form = ({ schemaZod, saveAnimal, updateAnimal, navigation, type, objectId }: FormProps) => {
    const [image, setImage] = useState("");
    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm<registerAnimalFormType>({
        resolver: zodResolver(schemaZod)
    });

    const handleSignInSubmit = async (data: registerAnimalFormType) => {
        const user = await getUser();
        const userName = user?.get("name")
        if (!userName) return;
        const payloadPartial: Partial<ISaveAnimal> = {
            ...data,
            owner: userName as string,
            month: data.month ?? "0",
            image: null,
        }
        const payload: ISaveAnimal = {
            ...data,
            owner: userName as string,
            adopted: false,
            month: data.month ?? "0",
            image: null,
        };
        let animalId: string;
        if (type === "register") {
            animalId = await saveAnimal!(payload);
        } else {
            updateAnimal!(payloadPartial, objectId ?? "");
            animalId = objectId ?? ""
        }
        handlerSubmitAndPutImage(animalId);
        navigation();
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

    const handlerInitialState = async () => {
        const response = await getByAnimalId(objectId ?? "")
        console.log("response", response)
        setValue("name", response.name);
        setValue("age", response.age)
        setValue("breed", response.breed)
        setValue("description", response.description)
        setValue("gender", response.gender)
        setValue("image", response.image ?? "")
        setImage(response.image ?? "")
        setValue("month", response.month)
        setValue("species", response.species)
    }

    useEffect(() => {
        type === "update" && handlerInitialState();
    }, [])

    return (
        <S.Form contentContainerStyle={{ rowGap: 15, justifyContent: "center" }}>
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
                name="gender"
                render={({ field: { onBlur, value, onChange } }) => (
                    <S.WrapperInput>
                        <Input
                            label="Genêro"
                            placeholder="Qual o genêro do seu pet ?"
                            onBlur={onBlur}
                            value={value}
                            onChangeText={onChange}
                            errorMessage={errors.gender?.message}
                            showError={!!errors.gender}
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

            <Controller
                control={control}
                name="description"
                render={({ field: { onBlur, value, onChange } }) => (
                    <S.WrapperInput>
                        <Input
                            label="Descrição"
                            placeholder="Fale sobre seu pet."
                            multiline
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
                <S.BtnLogin onPress={() => handlerPickerImage()}>
                    <S.Text>Selecionar imagem da galeria</S.Text>
                </S.BtnLogin>
            </S.WrapperButton>
            {
                !!image &&
                (<S.ImageAnimal source={{ uri: image }} />)
            }
            <S.WrapperButton>
                <S.BtnLogin onPress={handleSubmit(handleSignInSubmit)}>
                    <S.Text>{type === "register" ? "Cadastrar" : "Atualizar"}</S.Text>
                </S.BtnLogin>
            </S.WrapperButton>
        </S.Form>
    );
}