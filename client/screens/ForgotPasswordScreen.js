import React, { Component} from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import Animated from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get('window');

export default class ForgotPasswordScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView style={{marginHorizontal:30, paddingLeft:10}}>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color='#1c92ab' size={20}/>
            <TextInput placeholder="Your username" style={styles.textInput} placeholderTextColor="grey"/>
          </View>
          <Text style={{...styles.text_footer, marginTop:15}}>Email</Text>
          <View style={styles.action}>
            <Feather name="mail" color='#1c92ab' size={20}/>
            <TextInput placeholder="Your email" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" placeholderTextColor="grey"/>
          </View>
        </SafeAreaView>
 
        <TapGestureHandler>
          <Animated.View style={styles.submitButton} >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color:'white'}}>Submit</Text>
          </Animated.View>
        </TapGestureHandler>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: height/6,
  },
  submitButton: {
    marginTop:10,
    backgroundColor: '#1c92ab',
    height: 60,
    marginHorizontal:30,
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset:{ width:2, height:2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5,
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput:{
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
  },
  text_footer:{
    color: '#1c92ab',
    fontSize: 16,
    marginBottom: 5,
  },
  loginText:{
    marginHorizontal:30,
    top: 200,
    color:'white',
    fontSize: 50, 
    fontWeight: 'bold',
  }
});