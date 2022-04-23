import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Icons
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

function GoToButton({name, address}) {
  const navigation = useNavigation();

  return (
    <Text style={{ fontSize: 16, color:'gray'}} onPress={() => navigation.navigate(address)}>{name}</Text>
  );
}

class FloatingButton extends React.Component {
  
  animation = new Animated.Value(0)

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    this.open = !this.open;
  }
  
  render(){

    const button1 = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
          })
        }
      ]
    };

    const button2 = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -100]
          })
        }
      ]
    };

    const button3 = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -150]
          })
        }
      ]
    };

    const button4 = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200]
          })
        }
      ]
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]
    };

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback> 
            <Animated.View style={[styles.secondary, button4]} >
              <GoToButton name="Add Doctor" address="ParamedicFormScreen"/>
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
            <Animated.View style={[styles.secondary, button3]}>
              <GoToButton name="Add Paramedic" address="ParamedicFormScreen"/>
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
            <Animated.View style={[styles.secondary, button2]}>
              <GoToButton name="Add Hospital" address="ParamedicFormScreen"/>
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
            <Animated.View style={[styles.secondary, button1]}>
              <GoToButton name="Add Administrator" address="ParamedicFormScreen"/>
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
            <Animated.View style={[styles.button, styles.menu, rotation]}>
              <AntDesign name="plus" size={24} color="#FFF"/>
            </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: "absolute",
  },
  button:{
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60/2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {height: 10},
    elevation: 5,
  },
  menu: {
    backgroundColor: "#1c92ab",
  },
  secondary: {
    position: "absolute",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  }
});