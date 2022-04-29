import React, { Component} from 'react';
import 'react-native-gesture-handler'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import Svg, {Image} from 'react-native-svg'
import Animated, { EasingNode } from 'react-native-reanimated';
import { TapGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
//Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get('window');

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolateNode,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: EasingNode.inOut(EasingNode.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}

class SignInScreen extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);
    this.pointerEvents = new Value('none');
    this.onPressButton = this.onPressButton.bind(this);
    this.showTheThing = false;

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0)),
            ),
            cond(
              eq(state, State.END),
              set(this.pointerEvents, new Value('auto')),
            ),
          ])
      }
    ]
    );

    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            ),
            cond(
              eq(state, State.END),
              set(this.pointerEvents, new Value('none')),
            ),
          ])
      }
    ]);

    this.buttonY = interpolateNode(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolateNode(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex = interpolateNode(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolateNode(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolateNode(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });

    this.rotateCross = interpolateNode(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end', }} enabled>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <Animated.View style={{...StyleSheet.absoluteFill, transform: [{ translateY: this.bgY }]}}>
        <Svg height={height+90} width={width}>
          <Animated.View style={{opacity: this.buttonOpacity}}> 
            <Text style={{...styles.loginText,}}>Welcome to Smart Ambulance.</Text>
          </Animated.View>
          <Image href={require('../assets/loginbg.jpg')} width={width} height={height+90} preserveAspectRatio="xMinYMid slice" /> 
        </Svg>
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.signUpButton, backgroundColor: 'transparent', opacity: this.buttonOpacity, transform: [{ translateY: this.buttonY }]}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View pointerEvents={this.pointerEvents} style={{zIndex: this.textInputZIndex, opacity: this.textInputOpacity, transform:[{translateY:this.textInputY}], height:height/3 + 50, ...StyleSheet.absoluteFill, 
          top:null, justifyContent: 'center', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30,}}>
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text style={{fontSize:13, transform:[{rotate: concat(this.rotateCross, 'deg')}], color: '#1c92ab'}}>
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
            <SafeAreaView style={{marginHorizontal:30, paddingLeft:10}}>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color='#1c92ab' size={20}/>
                  <TextInput placeholder="Your username" style={styles.textInput} placeholderTextColor="grey"/>
                </View>
                <Text style={{...styles.text_footer, marginTop:15}}>Password</Text>
                <View style={styles.action}>
                  <Feather name="lock" color='#1c92ab' size={20}/>
                  <TextInput placeholder="Your password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" placeholderTextColor="grey"/>
                </View>
                { this.showTheThing &&
                  (<View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color:'red', fontSize:15, marginTop: 5}}>Wrong username or password</Text> 
                  </View>)
                }
            </SafeAreaView>
            {/* Aici se face verificarea de cont*/}
            <TapGestureHandler onHandlerStateChange={this.onPressButton2.bind(this)}>
            <Animated.View style={styles.forgotPassword}>
              <Text style={{ fontSize: 15, color:'gray'}}>Forgot your password?</Text>
            </Animated.View>
            </TapGestureHandler>
            <TapGestureHandler onHandlerStateChange={this.onPressButton.bind(this)}>
            <Animated.View style={styles.signInButton} >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color:'white'}}>SIGN IN</Text>
            </Animated.View>
            </TapGestureHandler>

          </Animated.View>
        </View>
      </GestureHandlerRootView>
      </KeyboardAvoidingView>
    );
  }

  onPressButton() {
    const { navigate } = this.props.navigation;
    navigate("AdministratorScreen")
  }

  onPressButton2() {
    const { navigate } = this.props.navigation;
    navigate("ForgotPasswordScreen")
  }
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  signUpButton:{
    backgroundColor: 'white',
    height: 70,
    marginHorizontal:30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius:10,
    borderWidth:2,
    borderColor:'white'
  },
  forgotPassword: {
    marginHorizontal:35,
    marginTop: 8,
  },
  closeButton:{
    height:30,
    width:30,
    backgroundColor: 'white',
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -15,
    left: width/2-20,
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