import * as ImagerPicker from "expo-image-picker";
import { UseFormSetValue } from "react-hook-form";

type setImageType = UseFormSetValue<{
    name: string;
    age: string;
    species: string;
    breed: string;
    image: string;
    month?: string | undefined;
}>

export const getImageGalery = async (setImage: setImageType) => {
    let result = await ImagerPicker.launchImageLibraryAsync({
        mediaTypes: ImagerPicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [10, 8],
        quality: 1,
    });

    if (!result.canceled) {
        setImage("image", result.assets[0].uri)
    }
}