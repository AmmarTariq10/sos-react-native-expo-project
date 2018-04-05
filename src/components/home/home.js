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
  KeyboardAvoidingView
} from 'react-native';


export default class home extends Component {
  static navigationOptions = {
    header: null
}
  render() {
    
    return (
     
     <View style={styles.container}>
     <ImageBackground source={require('../../imgs/main-bg.jpg')} style={styles.backgroundImage}>
     <Text style={styles.topTitle}>SOS</Text>
       
     <View style={styles.content}>
    
     <Text style={styles.heytite}>HEY</Text>
     <Text style={styles.simtext}>Please tap to the button below if youare in danger</Text>
     <Image source={require('../../imgs/arrow.png')} style={styles.arrow}></Image>
     </View>
   <View style={styles.content}>
   <View style={styles.redbox}>
   <Image source={require('../../imgs/sos-btn.png')} style={styles.sostxt}></Image>

</View>

     </View>

     </ImageBackground>
     </View>
    
    );
  }
}

const styles = StyleSheet.create({
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
    
  },
  
  sostxt:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
