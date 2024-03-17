import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { AnimalDetails } from "../screen/AnimalDetails";
import { RegisterAnimal } from "../screen/RegisterAnimal";

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
        telefone: string;
    },
    RegisterAnimal: undefined;
}

const Stack = createNativeStackNavigator<AdoptionStackParamList>();

export const AdoptionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AnimalDetails" component={AnimalDetails}/>
            <Stack.Screen name="RegisterAnimal" component={RegisterAnimal} />
        </Stack.Navigator>
    );
}