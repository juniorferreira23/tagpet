import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdoptionStack, AdoptionStackParamList } from "./stack.routes";
import { AnimalDashboard } from "../screen/AnimalDashboard";
import { Feather } from "@expo/vector-icons";

export type AdoptionTabParamList = {
    AdoptionStack: AdoptionStackParamList;
    AnimalDashboard: undefined;
}

const Tab = createBottomTabNavigator<AdoptionTabParamList>();

export const AppTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="AdoptionStack"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="AdoptionStack"
                component={AdoptionStack}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: "Início",
                    tabBarActiveTintColor: "#5CB15A"
                }
                }
            />
            <Tab.Screen
                name="AnimalDashboard"
                component={AnimalDashboard}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: "Painel",
                    tabBarActiveTintColor: "#5CB15A"
                }}
            />
        </Tab.Navigator>
    );
}