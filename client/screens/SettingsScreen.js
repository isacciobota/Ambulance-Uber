import React from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');

function ChangePasswordButton() {
  const navigation = useNavigation();

  return (
    <TapGestureHandler onHandlerStateChange={() => navigation.navigate("ChangePasswordScreen")}>
      <View style={styles.button}>
        <Feather name="lock" color='#1c92ab' size={25}/>
        <View style={{flex:1, marginLeft:20}}>
          <Text style={{ fontSize: 17, color:'black'}}>Security</Text>
          <Text style={{ fontSize: 15, color:'gray'}}>Change your password</Text>
        </View>
      </View>   
    </TapGestureHandler>
  );
}

function ChangeEmailAddressButton() {
  const navigation = useNavigation();

  return (
    <TapGestureHandler onHandlerStateChange={() => navigation.navigate("ChangeEmailScreen")}>
      <View style={styles.button}>
        <FontAwesome style={styles.entityIcon} name="user-o" size={23} color='#1c92ab'/> 
        <View style={{flex:1, marginLeft:20}}>
          <Text style={{ fontSize: 17, color:'black'}}>Account</Text>
          <Text style={{ fontSize: 15, color:'gray'}}>Change your email address</Text>
        </View>
      </View>
    </TapGestureHandler>
  );
}

function ExitButton() {
  const navigation = useNavigation();

  return (
    <TapGestureHandler onHandlerStateChange={() => navigation.reset({index: 0, routes: [{name :'SignInScreen'}],})}>
      <View style={styles.button}>
        <Ionicons name="md-exit-outline" size={23} color='#1c92ab'/> 
        <View style={{flex:1, marginLeft:20}}>
          <Text style={{ fontSize: 17, color:'black'}}>Logout</Text>
          <Text style={{ fontSize: 15, color:'gray'}}>Sign out of your account</Text>
        </View>
      </View>
    </TapGestureHandler>
  );
}

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <ChangePasswordButton/>
        <ChangeEmailAddressButton/>
        <ExitButton/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  button:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomColor: 'gray',
  }
});