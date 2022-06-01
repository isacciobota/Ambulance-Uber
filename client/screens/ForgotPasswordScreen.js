import React, { Component} from 'react';
import emailjs from 'emailjs-com';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import Animated from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import jwt_decode from "jwt-decode";
const { width, height } = Dimensions.get('window');
window.URL='http://192.168.56.1:3001/';

export default class ForgotPasswordScreen extends Component {
    constructor(){
        super();
        this.state={
        username:"",
        email:"",
        ok:false,
        data:""
        }
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView style={{marginHorizontal:30, paddingLeft:10}}>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color='#1c92ab' size={20}/>
            <TextInput placeholder="Your username" style={styles.textInput} placeholderTextColor="grey" ref="username" onChangeText={(username)=> this.setState({username: username})} value={this.state.username}/>
          </View>
          <Text style={{...styles.text_footer, marginTop:15}}>Email</Text>
          <View style={styles.action}>
            <Feather name="mail" color='#1c92ab' size={20}/>
            <TextInput placeholder="Your email" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" placeholderTextColor="grey" ref="email" onChangeText={(email)=> this.setState({email: email})} value={this.state.email}/>
          </View>
        </SafeAreaView>
 
        <View style={styles.signInButton}>
                <Text style={{ fontSize: 18, color:'white'}} onPress={this.pressButton.bind(this)}>
                  Submit
                </Text>
              </View>
      </KeyboardAvoidingView>
    )
  }
pressButton(){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
          result += characters.charAt(Math.floor(Math.random() *
     charactersLength));
       }
       var templateParams = {
           email: this.state.email,
           password: result
       };

        var jsonData = {
                                        "username":this.state.username,
                                        "email": this.state.email
                                    }

                     var requestOptions = {
                             method: 'POST',
                             headers: { 'Content-Type': 'application/json' },
                             body: JSON.stringify(jsonData)
                         };
                         console.log(this.state.username);
                         console.log(this.state.email);

       this.setState({ok:false});
               console.log("ceva");
                       try{const x= fetch(window.URL+'email/email', requestOptions)
                           .then(response => {if(response.ok) { this.setState({ok:true})} return response.text(); })
                           .then(data => this.setState({data: data}));}
                    catch(error){}
          console.log('\n');
          console.log(this.state.ok);
          console.log('\n');
                           console.log(this.state.data);

         if(this.state.ok)
                 {
                     const j=jwt_decode(this.state.data);
                     const role=j.role;
                     var roles;
                 if(role=="Admin")
                 roles='admins';
                 else
                 if(role=="Paramedic")
                 roles='paramedics';
                 else
                 if(role=="Doctor")
                 roles='doctors';
          var jsonData = {
                                      "password": result
                                  }
                        requestOptions = {
                                                   method: 'PUT',
                                                   headers: { 'Content-Type': 'application/json',
                                                              'auth-token': [this.state.data] },
                                                   body: JSON.stringify(jsonData)
                                               };
                                               console.log(jsonData);
                               try{fetch(window.URL+roles+"/"+j._id,requestOptions).then(res => res.text()).then(res=>console.log(res))}
                    catch(error){}

       emailjs.send('service_8cjtmxg', 'template_wrwzxfq', templateParams,'n5DhL5DgjOmlPT2kL')
           .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
           }, function(error) {
              console.log('FAILED...', error);
           });
                        const { navigate } = this.props.navigation;
                        navigate("SignInScreen")

                 }
                 else
                 console.log(this.state.data);
    console.log(result);
}
}
const styles = StyleSheet.create({
  container: {
    top: 35,
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
  signInButton: {
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