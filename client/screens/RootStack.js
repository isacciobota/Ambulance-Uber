import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
//React Navigator
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
//Screens 
import SignInScreen from './SignInScreen';
import AdministratorScreen from './AdministratorScreen';
import DoctorFormScreen from './DoctorFormScreen';
import ParamedicFormScreen from './ParamedicFormScreen';
import HospitalFormScreen from './HospitalFormScreen';
import AdministratorFormScreen from './AdministratorFormScreen';
import DoctorScreen from './DoctorScreen';
import DoctorChatScreen from './DoctorChatScreen';
import ParamedicScreen from './ParamedicScreen';
import ParamedicChatScreen from './ParamedicChatScreen';

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');

function ExitButton() {
  const navigation = useNavigation();

  return (
    <Ionicons name="md-exit-outline" size={25} color='white'
              onPress={() => navigation.reset({index: 0, routes: [{name :'SignInScreen'}],})}
              title="Info"
    />
  );
}

const RootStack = () => {

  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  }

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
            <ExitButton/>
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
          <Stack.Screen options={{
            title: 'Hello *insert account name*!',
            headerLeft: () => (
              <Switch onValueChange={toggleSwitch} value={switchValue}/>
            ),
            headerTitleStyle: {
              color: 'white',
              fontSize: 17,
            },
          }}
          name="DoctorScreen" component={DoctorScreen} />
          <Stack.Screen name="DoctorChat" component = {DoctorChatScreen} 
           options={({route}) => ({
            headerRight: () => (
              <FontAwesome name="map-marker-alt" size={21} color='white'/> 
            ),
              title: route.params.userName,
              headerBackTitleVisible: false,
          })}
          />
          <Stack.Screen options={{
            title: 'Hello *insert account name*!',
            headerLeft: null,
            headerTitleStyle: {
              color: 'white',
              fontSize: 17,
            },
          }}
          name="ParamedicScreen" component={ParamedicScreen} />
          <Stack.Screen name="ParamedicChat" component = {ParamedicChatScreen} 
           options={({route}) => ({
              title: route.params.userName,
              headerBackTitleVisible: false,
          })}
          />      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack;