import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from '../modules/auth/routes';
import { StatusBar } from 'expo-status-bar';
import { AdoptionRootNavigator } from '../modules/Adoption/routes';
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"

export const RootNavigator = () => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const handlerAuthStateChange = (user: FirebaseAuthTypes.User | null) => {
        setUser(user);
    }

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(handlerAuthStateChange);
        return subscribe;
    }, [])

    return (
        <NavigationContainer>
            <StatusBar style='dark' />
            {
                user ?
                    (
                        <AdoptionRootNavigator />
                    ) : (
                        <AuthStack />
                    )
            }
        </NavigationContainer>
    );
}
