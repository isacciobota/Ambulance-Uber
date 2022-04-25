import  React from 'react';
import { Dimensions } from 'react-native';
//React Navigator
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from "react-native-vector-icons/AntDesign";
//Screens 
import SignInScreen from './SignInScreen';
import AdministratorScreen from './AdministratorScreen';
import DoctorFormScreen from './DoctorFormScreen';
import ParamedicFormScreen from './ParamedicFormScreen';
import HospitalFormScreen from './HospitalFormScreen';
import AdministratorFormScreen from './AdministratorFormScreen';

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
            title: 'Add a new Doctor',
            headerLeftStyle: {
              color: 'white',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 17,
            },
            headerRight: null,
          }} name="DoctorFormScreen" component={DoctorFormScreen} />
        <Stack.Screen options={{
            title: 'Add a new Paramedic',
            headerLeftStyle: {
              color: 'white',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 17,
            },
            headerRight: null,
          }} name="ParamedicFormScreen" component={ParamedicFormScreen} />
        <Stack.Screen options={{
            title: 'Add a new Hospital',
            headerLeftStyle: {
              color: 'white',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 17,
            },
            headerRight: null,
          }} name="HospitalFormScreen" component={HospitalFormScreen} />
        <Stack.Screen options={{
            title: 'Add a new Administrator',
            headerLeftStyle: {
              color: 'white',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 17,
            },
            headerRight: null,
          }} name="AdministratorFormScreen" component={AdministratorFormScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack;