import storage from "@react-native-firebase/storage";

export const saveImage = async (image: string, animalId: string) => {
    if(!image) return;
    const downloadImage = await fetch(image);
    const blobImage = await downloadImage.blob()
    const imageRef = storage().ref(`animal/${animalId}.png`)

    try {
        await imageRef.put(blobImage);
        const url = await imageRef.getDownloadURL();
        return url;
    } catch (error) {
        console.log(error)
    }
}