import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { signIn } from './src/modules/auth/services/firebase/signIn';
import { SignIn } from './src/modules/auth/screens/signIn';

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/modules/auth/routes';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <SignIn />
    // </View>
    <NavigationContainer>
      <StatusBar style='dark'/>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
