import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome } from '../screens/welcome'
import { SignIn } from '../screens/signIn'
import { SignUp } from '../screens/signUp'

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false}}
            />
            
        </Stack.Navigator>
    )
}