import  React from 'react';
import { Dimensions } from 'react-native';
//React Navigator
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from "react-native-vector-icons/AntDesign";
//Screens 
import SignInScreen from './SignInScreen';
import AdministratorScreen from './AdministratorScreen';
import ParamedicFormScreen from './ParamedicFormScreen';

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');

function ExitButton() {
  const navigation = useNavigation();

  return (
    <AntDesign name="logout" size={20} color='white'
              onPress={() => navigation.reset({index: 0, routes: [{name :'SignInScreen'}],})}
              title="Info"
    />
  );
}

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c92ab',
          },
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerRightContainerStyle: {
            paddingRight: 35,
          },
          headerTintColor: 'white',
          headerRight: () => (
            <ExitButton />
          ),
        }}
        initialRouteName="SignInScreen"
      >
        <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen} />
        <Stack.Screen options={{
          title: 'Hello *insert account name*!',
          headerLeft: null,
          headerTitleStyle: {
            color: 'white',
            fontSize: 17,
          },
        }}
        name="AdministratorScreen" component={AdministratorScreen} />
        <Stack.Screen options={{
          title: '',
          headerLeftStyle: {
            color: 'white',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 17,
          },
        }} name="ParamedicFormScreen" component={ParamedicFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack;