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
  UNSAFE_componentWillMount(){
    
  }

  static navigationOptions = {
    header: null
} 

animStart(){
  this.animatedValue = new Animated.Value(0.1);
  Animated.timing(this.animatedValue,{
    toValue:1,
    duration:1000,
    easing:Easing.spring
  }).start()
}

  render() {
   const animatedStyle = {opacity: this.animatedValue}

   
    return (
     
     <View style={styles.container}>
     <StatusBar backgroundColor="#064f9a"/>
     <View style={styles.statusBar} />
     <ImageBackground source={require('../../imgs/main-bg.jpg')} style={styles.backgroundImage}>
     <Text style={styles.topTitle}>SOS</Text>
       
     <View style={styles.content}>
    
     <Text style={styles.heytite}>HEY</Text>
     <Text style={styles.simtext}>Please tap to the button below if youare in danger</Text>
      <Animated.View style={animatedStyle}>
     <Image source={require('../../imgs/arrow.png')} style={styles.arrow}></Image>
      </Animated.View>
     </View>
     <View style={styles.content}>
    <TouchableOpacity onPress={this.animStart()}>
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

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#064f9a",
  
  },
  container: {
    flex: 1,
    
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
    marginTop:20,
    width: 33,
    height: 79,
  },
  redbox:{
    width: 200,
    height: 200,
    backgroundColor: '#df1e36',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    opacity:1
  },
  sostxt:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
