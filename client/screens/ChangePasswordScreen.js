import React, { Component } from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import Animated from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get('window');

export default class ChangePasswordScreen extends Component {

  constructor(){
  super();
  this.state={
  password:"",
  p1:"",
  p2:"",
  ok:false,
  data:"",
  error:""
  };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView style={{marginHorizontal:30, paddingLeft:10}}>
          <Text style={styles.text_footer}>Current password</Text>
          <View style={styles.action}>
              <Text style={{ fontSize: 15, color:'gray'}}>{this.state.error}</Text>
            <Feather name="lock" color='#1c92ab' size={20}/>
            <TextInput placeholder="Your current password" secureTextEntry={true} style={styles.textInput} placeholderTextColor="grey" ref="password" onChangeText={(password)=> this.setState({password: password})} value={this.state.password}/>
          </View>
          <Text style={{...styles.text_footer, marginTop:15}}>New password</Text>
          <View style={styles.action}>
            <Feather name="lock" color='#1c92ab' size={20}/>
            <TextInput placeholder="Your new password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" placeholderTextColor="grey" ref="p1" onChangeText={(p1)=> this.setState({p1: p1})} value={this.state.p1}/>
          </View>
          <Text style={{...styles.text_footer, marginTop:15}}>Confirm new password</Text>
          <View style={styles.action}>
            <Feather name="lock" color='#1c92ab' size={20}/>
            <TextInput placeholder="Confirm your new password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" placeholderTextColor="grey" ref="p2" onChangeText={(p2)=> this.setState({p2: p2})} value={this.state.p2}/>
          </View>
        </SafeAreaView>
 
        <TapGestureHandler onHandlerStateChange={this.pressButton.bind(this)}>
          <Animated.View style={styles.submitButton} >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color:'white'}}>Submit</Text>
          </Animated.View>
        </TapGestureHandler>
      </KeyboardAvoidingView>
    )
  }
  async pressButton(){
            console.log(window.userLogat);
            console.log(this.state.password);
             var jsonData = {
                                 "username": window.userLogat,
                                 "password": this.state.password
                             }

              const requestOptions = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json',
                       'auth-token': [window.token]},
                      body: JSON.stringify(jsonData)
                  };
                  this.setState({ok:false});
                                  const x= await fetch(window.URL+'users/login', requestOptions)
                                      .then(response => {if(response.ok) { this.setState({ok:true})} return response.text(); })
                                      .then(data => this.setState({data: data}));
        if(this.state.ok)
        {
            if(this.state.p1==this.state.p2)
            {
               const destination=window.role;
            var jsonData = {
                               "password": this.state.p1
                           }
                 const requestOptions = {
                                            method: 'PUT',
                                            headers: { 'Content-Type': 'application/json',
                                             'auth-token': [window.token]},
                                            body: JSON.stringify(jsonData)
                                        };
                                        console.log(jsonData);
                        fetch(window.URL+destination+"/"+window.idLogat,requestOptions).then(res => res.text()).then(res=>console.log(res))

                        const { navigate } = this.props.navigation;
                        navigate("SettingsScreen")

            }
            else
            {
               this.setState({error:"You must verify password"});
            }
        }
        else
        {
            this.setState({error:"Wrong password"});
        }

  }
}

const styles = StyleSheet.create({
  container: {
    top: 35,
  },
  submitButton: {
    marginTop:15,
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
    fontSize: 18,
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