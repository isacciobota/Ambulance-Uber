import React, { useState } from 'react'
import {Text, View, StyleSheet, Dimensions, ScrollView, TextInput} from 'react-native';
import FloatingButton from '../components/FloatingButton';
//Icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

export default function ViewAdministratorScreen() {

  const [Administrators, setAdministrators] = useState([
    { name: 'Administrator1', key: '1' },
    { name: 'Administrator2', key: '2' },
    { name: 'Administrator3', key: '3' },
    { name: 'Administrator4', key: '4' },
    { name: 'Administrator5', key: '5' },
    { name: 'Administrator6', key: '6' },
    { name: 'Administrator7', key: '7' },
    { name: 'Administrator8', key: '8' },
    { name: 'Administrator9', key: '9' },
  ]);
  return (
    <View style={styles.container}>
      
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.textInput} placeholderTextColor="grey"/>
        <View style={{backgroundColor: 'white', height:44, width:3}}></View>
        <Entypo style={{padding:8, marginHorizontal: 20, marginTop:3}} name="magnifying-glass" color='black' size={22}/>
      </View>

      <View style={{height: height-239}}>
      <ScrollView style={{height: height/4}}>
        { Administrators.map((item) => {
          return (
            <View key={item.key} style={styles.imageView}>
              <View style={{flexDirection: 'row',}}>
                {/* Aici e Name practic */}
                <Text style={styles.entityName}>{item.name}</Text> 
                <FontAwesome style={styles.entityIcon} name="wrench" size={19} color='black'/> 
              </View>
              <View style={{backgroundColor: 'white', height:3, width:width, marginBottom: 5}}></View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.entityField}>• Token</Text> 
              </View>
            </View>
          )
          })}      
      </ScrollView></View>
      <FloatingButton style={{bottom:100}}/>
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
    borderRadius: 15,
    height: height/5,
    width: width/1.1,
    marginBottom: 20,
  },
  searchBar:{
    borderRadius: 10,
    width: width/1.1,
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 30,
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