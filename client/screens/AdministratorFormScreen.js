import {Text, View, StyleSheet, Dimensions, SafeAreaView , TextInput, KeyboardAvoidingView} from 'react-native';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function AdministratorFormScreen() {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', }} enabled>
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start'}}>
      <SafeAreaView style={{marginHorizontal:40, marginVertical: 30}}>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <TextInput placeholder="Name" style={styles.textInput} placeholderTextColor="grey"/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Username</Text>
        <View style={styles.action}>
          <TextInput placeholder="Username" style={styles.textInput} placeholderTextColor="grey"/>
        </View>
        <Text style={{...styles.text_footer, marginTop:15}}>Password</Text>
        <View style={styles.action}>
          <TextInput placeholder="Password" style={styles.textInput} placeholderTextColor="grey"/>
        </View>
      </SafeAreaView>
      <TapGestureHandler>
        <View style={styles.submitButton} >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color:'white'}}>Submit</Text>
        </View>
      </TapGestureHandler>
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