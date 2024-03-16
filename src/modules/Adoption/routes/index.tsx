import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { AnimalDetails } from "../screen/AnimalDetails";
import { RegisterAnimal } from "../screen/RegisterAnimal";

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
<<<<<<< HEAD
        phone: string;
        description: string;
    }
=======
    },
    RegisterAnimal: undefined;
>>>>>>> f0be4805d893f72fb576aa2c73af514ed4852efd
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