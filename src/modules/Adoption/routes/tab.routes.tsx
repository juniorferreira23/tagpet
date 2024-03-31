import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"; 

import { Home } from "../screen/Home";
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
        user_id: string;
    },
    RegisterAnimal: undefined;
}

const Tab = createBottomTabNavigator<AdoptionStackParamList>();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: "Início"
                }
            }/>

            <Tab.Screen 
                name="RegisterAnimal" 
                component={RegisterAnimal}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size}/>,
                    tabBarLabel: "Cadastrar Adoção"
                }}
            />
        </Tab.Navigator>
    )
}