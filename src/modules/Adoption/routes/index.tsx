import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { AnimalDetails } from "../screen/AnimalDetails";

export type AdoptionStackParamList = {
    Home: undefined;
    AnimalDetails: {
        id: number;
        name: string;
        gender: string;
        age: number;
        month: number | null;
        breed: string;
        type: string;
        image: string;
        owner: string;
        phone: string;
        description: string;
    }
}

const Stack = createNativeStackNavigator<AdoptionStackParamList>();

export const AdoptionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AnimalDetails" component={AnimalDetails}/>
        </Stack.Navigator>
    );
}