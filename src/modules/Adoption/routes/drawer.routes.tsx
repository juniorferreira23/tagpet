import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from "@expo/vector-icons";

import { Home } from '../screen/Home';
import { RegisterAnimal } from '../screen/RegisterAnimal';
import { About } from '../screen/About';
import { useTranslate } from "../../../context/TranslateContext";
import { useState } from "react";
import { logoutFirebase } from '../../../service/firebase/logout';
import { AnimalAlert } from '../screen/AnimalAlert';


export type AdoptionDrawerParamList = {
    Home: undefined;
    RegisterAnimal: undefined;
    About: undefined;
    AnimalAlert: undefined;
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const [state, setState] = useState(false);
    const { toggleLanguage } = useTranslate();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label={"Mudar para Idioma"}
                onPress={() => {
                    setState(!state);
                    toggleLanguage(!state)
                }}
            />
            <DrawerItem
                label={"Sair"}
                onPress={() => logoutFirebase()}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator<AdoptionDrawerParamList>();

export const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{ title: ' ' }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Início',
                    drawerActiveTintColor: '#5CB15A'
                }}
            />
            <Drawer.Screen
                name='RegisterAnimal'
                component={RegisterAnimal}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    drawerLabel: 'Cadastrar Adoção',
                    drawerActiveTintColor: '#5CB15A'
                }}
            />
            <Drawer.Screen
                name='About'
                component={About}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="info" color={color} size={size} />,
                    drawerLabel: 'Sobre',
                    drawerActiveTintColor: '#5CB15A'
                }}
            />

            <Drawer.Screen 
                name='AnimalAlert'
                component={AnimalAlert}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="info" color={color} size={size} />,
                    drawerLabel: 'Alerta Animais desaparecidos',
                    drawerActiveTintColor: '#5CB15A'
                }}
            />
        </Drawer.Navigator>
    );
}