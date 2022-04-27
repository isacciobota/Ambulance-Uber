import React from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated } from 'react-native';
import FloatingButton from './FloatingButton'
import { useNavigation } from '@react-navigation/native';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { ReverseAnimation } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

function GoToButton({icon, address}) {
  const navigation = useNavigation();

  return (
    <FontAwesome style={styles.icon} name={icon} size={25} color='#1c92ab' onPress={() => navigation.navigate(address)}/>
  );
}

class AdministratorBottomNav extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.nav}> 
              <GoToButton icon="user-nurse" address='ParamedicFormScreen'/>
              <FontAwesome style={{...styles.icon, marginRight:20}} name="ambulance" size={25} color='#1c92ab'/>
              <FontAwesome style={{...styles.icon, marginLeft:20}} name="hospital-alt" size={25} color='#1c92ab'/>
              <MaterialIcons style={styles.icon} name="engineering" size={31} color='#1c92ab'/>
        </View>
        <FloatingButton style={{bottom: 100}}/>
      </View>
    );
  }  
}

export default AdministratorBottomNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: "#f2f2f2",
    backgroundColor: 'white',
    height: 70,
    position: 'absolute',
    bottom: 0,
    width: width
  },
  icon: {
    marginTop: 20,
  },
  icon2: {
    marginTop: 20
  }
});