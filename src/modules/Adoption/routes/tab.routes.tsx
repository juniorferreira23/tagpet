import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdoptionStack, AdoptionStackParamList, DashboardStack, DashboardStackParamList } from "./stack.routes";
import { Feather } from "@expo/vector-icons";

export type AdoptionTabParamList = {
    AdoptionStack: AdoptionStackParamList;
    AnimalDashboard: DashboardStackParamList;
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
                component={DashboardStack}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: "Painel",
                    tabBarActiveTintColor: "#5CB15A"
                }}
            />
        </Tab.Navigator>
    );
}