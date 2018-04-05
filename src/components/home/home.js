import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Animated,
  Easing,
  StatusBar
} from 'react-native';
import { Constants } from 'expo';

export default class home extends Component {

static navigationOptions = {
  header: null
} 

UNSAFE_componentWillMount(){
  this.animatedValue = new Animated.Value(0);
}
componentDidMount(){
  this._startAnimation()
}

_startAnimation(){
  this.animatedValue.setValue(0)
    Animated.timing(this.animatedValue, {
    toValue: 100,
    duration: 2000,
    easing:Easing.bounce
  
  }).start(()=>{this._startAnimation()});
}
  render() {

    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(255, 255, 255)', 'rgb(255,255,255)']
    });
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    };
 
    return (
     
     <View style={styles.container}>
     <StatusBar backgroundColor="#064f9a"/>
     <View style={styles.statusBar} /> 
    
      <ImageBackground source={require('../../imgs/main-bg.jpg')} style={styles.backgroundImage}>
    
    <View>
     <Text style={styles.topTitle}>SOS</Text>
    </View>
    
    <View style={styles.content}>

    <View style={styles.heyTitleContainer}>
      <Text style={styles.heytite}>HEY</Text>
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.simtext}>Please tap to the button below if youare in danger</Text>
    </View>

    <View style={styles.arrowContainer}>
      <Animated.View style={[animatedStyle]}>
      <Image source={require('../../imgs/arrow.png')} style={[styles.arrow,]}></Image>
      </Animated.View>
    </View>
    </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity >
      <View style={styles.redbox}>
      <Image source={require('../../imgs/sos-btn.png')} style={styles.sostxt}></Image>
      </View>
      </TouchableOpacity>
     </View>

     </ImageBackground>

     </View>
    
    );
  }
}

const animatedStyle = {opacity: this.animatedValue}

const styles = StyleSheet.create({

  heyTitleContainer:{backgroundColor:'red',flex:1},
  textContainer:{backgroundColor:'yellow',flex:1},
  arrowContainer:{backgroundColor:'green',flex:3},
  buttonContainer:{backgroundColor:'orange',flex:4},
  statusBar: {
    backgroundColor: "#064f9a",
  
  },
  container: {
    flex: 1,
    // flexDirection:row
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  content: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTitle:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:'center',
    backgroundColor: '#064f9a',
    alignSelf: 'stretch',
    padding: 15,
  
  },
  heytite:{
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  simtext:{
    color: '#666666',
    fontSize: 16,
    padding: 15,
    textAlign: 'center',
  },
  arrow:{
    opacity:1,
    width: 33,
    height: 79,
  },
  redbox:{
   
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: '#df1e36',
    justifyContent: 'center',
    alignItems: 'center',
  
    opacity:1
  },
  sostxt:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
