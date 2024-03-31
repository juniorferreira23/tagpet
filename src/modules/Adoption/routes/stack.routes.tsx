import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimalDetails } from "../screen/AnimalDetails";
import { AdoptionDrawerParamList, HomeDrawer } from "./drawer.routes";

export type AdoptionStackParamList = {
    HomeDrawer: AdoptionDrawerParamList
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
}

const Stack = createNativeStackNavigator<AdoptionStackParamList>();

export const AdoptionStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false}}>
            <Stack.Screen
                name="HomeDrawer"
                component={HomeDrawer}
            />
            <Stack.Screen
                name="AnimalDetails"
                component={AnimalDetails}
            />
        </Stack.Navigator>
    );
}