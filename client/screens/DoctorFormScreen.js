import React, { useState , useRef } from "react";
import {Text, View, StyleSheet, Dimensions, SafeAreaView , TextInput, KeyboardAvoidingView, Button} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import {getHospitals} from '../services/loadHospitals'
import {submitFunc} from '../services/buttons'

const { width, height } = Dimensions.get('window');

export default function DoctorFormScreen() {
  const [selectedValue, setSelectedValue] = useState("Judetean");
  const [Doctor, setDoctor] = useState({
                                           });
  const [Hospitals, setHospitals] = useState([
                                                 {
                                                     "_id": "627fc8cbf3ac113494d75b75",
                                                     "name": "name",
                                                     "address": "a",
                                                     "doctorsToken": [],
                                                     "__v": 0
                                                 }
                                             ]);
  const refName = useRef(null);
  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const refEmail = useRef(null);
  const refToken = useRef(null);
  const refHospital = useRef(null);
  let mounted=true;

  getHospitals().then(d=>{ if(mounted) setHospitals(d)})

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', }} enabled>
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start'}}>
      <SafeAreaView style={{marginHorizontal:40, marginVertical: 30}}>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <TextInput placeholder="Name" style={styles.textInput} placeholderTextColor="grey" ref={refName} onChangeText={(name)=> {if(mounted) setDoctor({name: name, username: Doctor.username, email: Doctor.email, password:Doctor.password, token:Doctor.token, hospital: Doctor.hospital})}} value={Doctor.name}/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Username</Text>
        <View style={styles.action}>
          <TextInput placeholder="Username" style={styles.textInput} placeholderTextColor="grey" ref={refUsername} onChangeText={(username)=> {if(mounted)setDoctor({name: Doctor.name, username: username, email: Doctor.email, password:Doctor.password, token:Doctor.token, hospital: Doctor.hospital})}} value={Doctor.username}/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Email</Text>
        <View style={styles.action}>
          <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor="grey" ref={refEmail} onChangeText={(email)=> {if(mounted)setDoctor({name: Doctor.name, username: Doctor.username, email: email, password:Doctor.password, token:Doctor.token, hospital: Doctor.hospital})}} value={Doctor.email}/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Password</Text>
        <View style={styles.action}>
          <TextInput placeholder="Password" style={styles.textInput} placeholderTextColor="grey" ref={refPassword} onChangeText={(password)=> {if(mounted)setDoctor({name: Doctor.name, username: Doctor.username, email: Doctor.email, password:password, token:Doctor.token, hospital: Doctor.hospital})}} value={Doctor.password}/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Token</Text>
        <View style={styles.action}>
          <TextInput placeholder="Token" style={styles.textInput} placeholderTextColor="grey" ref={refToken} onChangeText={(token)=> {if(mounted)setDoctor({name: Doctor.name, username: Doctor.username, email: Doctor.email, password:Doctor.password, token:token, hospital: Doctor.hospital})}} value={Doctor.token}/>
        </View>
        <View style={{flexDirection: 'row',}}>
          <Text style={{...styles.text_footer, marginTop:16}}>Hospital:</Text>
          <Picker selectedValue={selectedValue} mode="dropdown" style={{height: 30, width: width/3, marginLeft: 10}} 
            onValueChange={(hospital)=> {if(mounted) {setDoctor({name: Doctor.name, username: Doctor.username, email: Doctor.email, password:Doctor.password, token:Doctor.token, hospital: hospital}); setSelectedValue(hospital)}}}>
            {Hospitals.map((item) => {
                item.key=item.name;
                return (
                <Picker.Item color='gray' label={item.name} value={item.name} key={item.key}/>
                )
            }
            )}
          </Picker>
        </View>
      </SafeAreaView>
      <View style={styles.signInButton}>
        <Text style={{ fontSize: 18, color:'white'}} onPress={() => submitFunc(Patient,'patients')}> 
          Submit
        </Text>
      </View>
    </GestureHandlerRootView>
    </KeyboardAvoidingView>  
  )
}

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    height: height/5,
    width: width/1.1,
    top: height/25,
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
    borderBottomColor: '#1c92ab',
    paddingBottom: 5,
  },
  textInput:{
    flex: 1,
    marginTop: -12,
  },
  text_footer:{
    color: '#1c92ab',
    fontSize: 16,
    marginVertical: 5,
  },
});