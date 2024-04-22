import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimalDetails } from "../screen/AnimalDetails";
import { AdoptionDrawerParamList, HomeDrawer } from "./drawer.routes";
import { UpdateAnimal } from "../screen/UpdateAnimal";
import { AnimalDashboard } from "../screen/AnimalDashboard";

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

export type DashboardStackParamList = {
    Dashboard: undefined;
    UpdateAnimal: {
        id: string;
    },
}

const StackAd = createNativeStackNavigator<AdoptionStackParamList>();


export const AdoptionStack = () => {
    return (
        <StackAd.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false }}>
            <StackAd.Screen
                name="HomeDrawer"
                component={HomeDrawer}
            />
            <StackAd.Screen
                name="AnimalDetails"
                component={AnimalDetails}
                options={{headerShown: true}}
            />
        </StackAd.Navigator>
    );
}

const StackDa = createNativeStackNavigator<DashboardStackParamList>();

export const DashboardStack = () => {
    return (
        <StackDa.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
            <StackDa.Screen
                name="Dashboard"
                component={AnimalDashboard}
            />
            <StackDa.Screen
                name="UpdateAnimal"
                component={UpdateAnimal}
            />
        </StackDa.Navigator>
    );
}