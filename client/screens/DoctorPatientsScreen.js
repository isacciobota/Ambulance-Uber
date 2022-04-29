import React, { useState } from 'react'
import {Text, View, StyleSheet, Dimensions, ScrollView, TextInput} from 'react-native';
import FloatingButton from '../components/FloatingButton';
//Icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Switch } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function PatientPatientsScreen() {

  const [Patients, setPatients] = useState([
    { name: 'Patient1', key: '1' },
    { name: 'Patient2', key: '2' },
    { name: 'Patient3', key: '3' },
    { name: 'Patient4', key: '4' },
    { name: 'Patient5', key: '5' },
    { name: 'Patient6', key: '6' },
    { name: 'Patient7', key: '7' },
    { name: 'Patient8', key: '8' },
    { name: 'Patient9', key: '9' },
  ]);

  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.textInput} placeholderTextColor="grey"/>
        <Entypo style={{padding:8, marginHorizontal: 20, marginTop:3}} name="magnifying-glass" color='black' size={22}/>
      </View>

      <View style={{height: height-200}}>
      <ScrollView>
        { Patients.map((item) => {
          return (
            <View key={item.key} style={styles.imageView}>
              <View style={{flexDirection: 'row',}}>
                {/* Aici e Name practic */}
                <Text style={styles.entityName}>{item.name}</Text> 
                {/* Cand dai pe iconita, da delete la pacient */}
                <FontAwesome style={styles.entityIcon} name="trash-o" size={19} color='black'/> 
              </View>
              <View style={{backgroundColor: 'white', height:3, width:width, marginBottom: 5}}></View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.entityField}>• Sex</Text>
                <Text style={styles.entityField2}>• Age</Text> 
              </View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.entityField}>• Description</Text>
              </View>
            </View>
          )
          })}      
      </ScrollView></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingBottom: 15,
    width: width/1.1,
    marginBottom: 20,
  },
  searchBar:{
    borderRadius: 10,
    width: width/1.1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
  },
  textInput:{
    padding: 8,
    flex: 1,
    marginLeft: 25,
  },
  entityName: {
    padding: 10,
    marginLeft: 10,
    marginVertical: 5,
    fontSize: 15,
    flex:1,
  },
  entityField: {
    padding: 3,
    marginLeft: 10,
    fontSize: 15,
    flex:1,
  },
  entityField2: {
    padding: 3,
    fontSize: 15,
    flex:1,
  },
  entityIcon: {
    padding: 8,
    marginRight: 20,
    marginVertical: 5,
  },
});