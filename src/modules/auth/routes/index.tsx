// Pastas routes são usadas para configurar rotas entre as telas ou ambiente de telas desejado

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding } from '../screens/Onboarding'
import { SignIn } from '../screens/signIn'
import { SignUp } from '../screens/signUp'

// Não entendi essa tipagem direto, pq seria underfined mesmo? Ou seria inicialmente undefined? Em caso da segunda opção, tipos seriam imutaveis então não teria como.
export type  AuthStackParamList = {
    Onboarding: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

// Quando e por devemos passar o tipo? 
const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen
                name='Onboarding'
                component={Onboarding}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
            />

            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />
            
        </Stack.Navigator>
    )
}