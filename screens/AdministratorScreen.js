import React from 'react'
import { View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import ViewDoctorsScreen from './ViewDoctorsScreen';
import ViewParamedicsScreen from './ViewParamedicsScreen';
import ViewHospitalsScreen from './ViewHospitalsScreen';
import ViewAdministratorsScreen from './ViewAdministratorsScreen';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();
 
export default function AdministratorScreen() {
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
          },
        }}
      >
        <Tab.Screen name="Doctors" component={ViewDoctorsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused} >
                <FontAwesome style={styles.entityIcon} name="stethoscope" size={23} color='#1c92ab'/> 
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome style={styles.entityIcon} name="stethoscope" size={23} color='grey'/> 
              </View>)
              },
          }}
        />
        <Tab.Screen name="Paramedics" component={ViewParamedicsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.tabBarIconFocused}>
                  <FontAwesome name="ambulance" size={23} color='#1c92ab'/>
                </View>) : (
                <View style={styles.tabBarIcon}>
                  <FontAwesome name="ambulance" size={23} color='gray'/>
                </View>)
              },
          }}
        />
        <Tab.Screen name="Plus" component={ViewParamedicsScreen}  
          options={{
            tabBarIcon: () => (
              <View style={styles.tabBarFloatingButton}>
              </View>
            )
          }}
        />
        <Tab.Screen name="Hospitals" component={ViewHospitalsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused}>
                <FontAwesome name="hospital-alt" size={23} color='#1c92ab'/>
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome name="hospital-alt" size={23} color='gray'/>
              </View>)
              },
          }}
        />
        <Tab.Screen name="SignOut" component={ViewAdministratorsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused}>
                <FontAwesome style={styles.entityIcon} name="wrench" size={23} color='#1c92ab'/> 
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome style={styles.entityIcon} name="wrench" size={23} color='grey'/> 
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