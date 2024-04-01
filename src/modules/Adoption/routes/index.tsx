import { AppTab } from "./tab.routes";

export type AdoptionStackParamList = {
    Home: undefined;
    AnimalDetails: {
        id: string;
        name: string;
        age: number;
        month: number | null;
        breed: string;
        image: string;
        owner: string;
        user_id: string;
    },
    RegisterAnimal: undefined;
}



export const AdoptionRootNavigator = () => {
    return (
        <AppTab />
    );
}
