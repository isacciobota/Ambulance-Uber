import React, { useState , useRef} from "react";
import {Text, View, StyleSheet, Dimensions, Button, SafeAreaView , TextInput, KeyboardAvoidingView} from 'react-native';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";
import {getHospitals} from '../services/loadHospitals'
import {submitFunc} from '../services/buttons'

const { width, height } = Dimensions.get('window');

export default function PatientFormScreen() {
  const [selectedValue, setSelectedValue] = useState("Judetean");
    const [Patient, setPatient] = useState({
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
    const refAge = useRef(null);
    const refSex = useRef(null);
    const refDescription = useRef(null);
    const refHospital = useRef(null);
    let mounted=true;

    getHospitals().then(d=>{ if(mounted) setHospitals(d)})
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', }} enabled>
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start'}}>
      <SafeAreaView style={{marginHorizontal:40, marginVertical: 30}}>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <TextInput placeholder="Name" style={styles.textInput} placeholderTextColor="grey" ref={refName} onChangeText={(name)=> {if(mounted) setPatient({name: name, age: Patient.age, sex: Patient.sex, description:Patient.description, hospital: Patient.hospital})}} value={Patient.name}/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Age</Text>
        <View style={styles.action}>
          <TextInput placeholder="Age" style={styles.textInput} placeholderTextColor="grey" ref={refAge} onChangeText={(age)=> {if(mounted) setPatient({name: Patient.name, age: age, sex: Patient.sex, description:Patient.description, hospital: Patient.hospital})}} value={Patient.age}/>
        </View>
        <View style={{flexDirection: 'row',}}>
          <Text style={{...styles.text_footer, marginTop:16}}>Sex:</Text>
          <Picker selectedValue={selectedValue} mode="dropdown" style={{height: 30, width: width/3, marginLeft: 10}} 
            onValueChange={(itemValue, itemIndex) => {if(mounted) {setSelectedValue(itemValue); setPatient({name: Patient.name, age: Patient.age, sex: itemValue, description:Patient.description, hospital: Patient.hospital})}}}>
            <Picker.Item color='gray' label="Male" value="Male" />
            <Picker.Item color='gray' label="Female" value="Female" />
          </Picker>
        </View>
        <View style={{flexDirection: 'row',}}>
          <Text style={{...styles.text_footer, marginTop:16}}>Hospital:</Text>
          <Picker selectedValue={selectedValue} mode="dropdown" style={{height: 30, width: width/3, marginLeft: 10}} 
            onValueChange={(itemValue, itemIndex) => {if(mounted) {setSelectedValue(itemValue); setPatient({name: Patient.name, age: Patient.age, sex: Patient.sex, description:Patient.description, hospital: itemValue})}}}>
            {Hospitals.map((item) => {
                            item.key=item.name;
                            return (
                            <Picker.Item color='gray' label={item.name} value={item.name} key={item.key}/>
                            )
                        })}
          </Picker>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Description</Text>
        <View style={styles.action}>
          <TextInput placeholder="Description" style={styles.textInput} placeholderTextColor="grey" ref={refDescription} onChangeText={(description)=> {if(mounted) setPatient({name: Patient.name, age: Patient.age, sex: Patient.sex, description:description, hospital: Patient.hospital})}} value={Patient.description}/>
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