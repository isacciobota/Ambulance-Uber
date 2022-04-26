import React from 'react'
import { View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import DoctorPatientsScreen from './DoctorPatientsScreen';
import DoctorMessageScreen from './DoctorMessageScreen';
import DoctorChatScreeen from './DoctorChatScreen';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function DoctorScreen() {

  return ( 
      <Tab.Navigator
        screenOptions= {{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            position:'absolute',
            elevation:0,
            height: 70,
          }
        }}
      >
        
        <Tab.Screen name="Messages" component={DoctorMessageScreen} 
          options={{
            
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused} >
                <FontAwesome style={styles.entityIcon} name="paper-plane" size={23} color='#1c92ab'/> 
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome style={styles.entityIcon} name="paper-plane" size={23} color='grey'/> 
              </View>)
              },
          }}
        />
        <Tab.Screen name="DoctorPatientsScreen" component={DoctorPatientsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused}>
                <FontAwesome style={styles.entityIcon} name="user" size={23} color='#1c92ab'/> 
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome style={styles.entityIcon} name="user" size={23} color='grey'/> 
              </View>)
              },
          }}
        />
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIconFocused: {
    borderTopWidth: 3,
    borderTopColor: '#1c92ab',
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    top:10,
    position: 'absolute',
  },
  tabBarIcon: {
    marginTop: 8,
    padding: 5,
    alignItems: 'center', 
    justifyContent: 'center', 
    top:10,
    position: 'absolute',
  },
  tabBarFloatingButton: {
    alignItems: 'center', 
    justifyContent: 'center', 
  }
});