import { AppTab } from "./tab.routes";

export type AdoptionStackParamList = {
    Home: undefined;
    AnimalDetails: {
        id: string;
        name: string;
        gender: string;
        age: number;
        month: number | null;
        breed: string;
        image: string;
        owner: string;
        user_id: string;
    },
    RegisterAnimal: undefined;
    UpdateAnimal: {id: string};
}



export const AdoptionRootNavigator = () => {
    return (
        <AppTab />
    );
}
