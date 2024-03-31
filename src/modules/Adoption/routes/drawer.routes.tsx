import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";

export type AdoptionStackParamList = {
  AnimalsLine: undefined;
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

const Drawer = createDrawerNavigator<AdoptionStackParamList>();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='AnimalsLine' screenOptions={{ title: ' '}}>
      <Drawer.Screen 
        name="AnimalsLine" 
        component={TabRoutes} 
        options={{
          drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
          drawerLabel: "Home"
        }}
      />
    </Drawer.Navigator>
  );
}