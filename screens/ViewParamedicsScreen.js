import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import FloatingButton from '../components/FloatingButton';

export default function ViewParamedicsScreen() {
  return (
    <View style={styles.container}>
      <FloatingButton style={{bottom:100}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});