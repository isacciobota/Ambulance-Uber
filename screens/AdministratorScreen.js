import React from 'react'
import { View, StyleSheet} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import ViewDoctorsScreen from './ViewDoctorsScreen';
import ViewParamedicsScreen from './ViewParamedicsScreen';
import ViewHospitalsScreen from './ViewHospitalsScreen';
import ViewAdministratorsScreen from './ViewAdministratorsScreen';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
          }
        }}
      >
        <Tab.Screen name="Doctors" component={ViewDoctorsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused} >
                <FontAwesome name="user-nurse" size={25} color='#1c92ab'/>
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome name="user-nurse" size={25} color='gray'/>
              </View>)
              },
          }}
        />
        <Tab.Screen name="Paramedics" component={ViewParamedicsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.tabBarIconFocused}>
                  <FontAwesome name="ambulance" size={25} color='#1c92ab'/>
                </View>) : (
                <View style={styles.tabBarIcon}>
                  <FontAwesome name="ambulance" size={25} color='gray'/>
                </View>)
              },
          }}
        />
        <Tab.Screen name="Plus" component={ViewDoctorsScreen}  
          options={{
            overflow:'clickable',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabBarFloatingButton}>
                 {/* <FloatingButton style={{bottom:65}}/> */}
              </View>
            )
          }}
        />
        <Tab.Screen name="Hospitals" component={ViewHospitalsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused}>
                <FontAwesome name="hospital-alt" size={25} color='#1c92ab'/>
              </View>) : (
              <View style={styles.tabBarIcon}>
                <FontAwesome name="hospital-alt" size={25} color='gray'/>
              </View>)
              },
          }}
        />
        <Tab.Screen name="SignOut" component={ViewAdministratorsScreen} 
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
              <View style={styles.tabBarIconFocused}>
                <MaterialIcons name="engineering" size={31} color='#1c92ab'/>
              </View>) : (
              <View style={styles.tabBarIcon}>
                <MaterialIcons name="engineering" size={31} color='gray'/>
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