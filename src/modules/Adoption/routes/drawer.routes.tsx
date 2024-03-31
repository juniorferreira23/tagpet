import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { RegisterAnimal } from '../screen/RegisterAnimal';
import { Home } from '../screen/Home';

export type AdoptionDrawerParamList = {
    RegisterAnimal: undefined;
    Home: undefined;
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={"Sair"} onPress={() => console.log("Saiu")} /> 
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator<AdoptionDrawerParamList>();

export const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                name='RegisterAnimal'
                component={RegisterAnimal}
            />
        </Drawer.Navigator>
    );
}