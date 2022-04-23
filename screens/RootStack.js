import  React from 'react';
//React Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";
//Screens 
import SignInScreen from './SignInScreen';
import AdministratorScreen from './AdministratorScreen';


import { HeaderBackButton } from '@react-navigation/stack';
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerLeft: null,
        }}
        initialRouteName="SignInScreen"
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen  name="AdministratorScreen" component={AdministratorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack;