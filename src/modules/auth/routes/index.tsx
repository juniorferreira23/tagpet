import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding } from '../screens/Onboarding'
import { SignIn } from '../screens/signIn'
import { SignUp } from '../screens/signUp'

export type AuthStackParamList = {
    Onboarding: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
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