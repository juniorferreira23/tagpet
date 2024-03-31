import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimalDetails } from "../screen/AnimalDetails";

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

const Stack = createNativeStackNavigator<AdoptionStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ title: ' '}}>
      <Stack.Screen 
        name="AnimalDetails" 
        component={AnimalDetails} 
      />
    </Stack.Navigator>
  ); 
}