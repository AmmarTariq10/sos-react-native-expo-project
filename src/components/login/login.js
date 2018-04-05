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
  StatusBar,
} from 'react-native';


export default class login extends Component {
  static navigationOptions = {
    header: null
}
  render() {
    
    return (
     <View style={styles.container}>
     <StatusBar
     backgroundColor="blue"
     barStyle="light-content" />
     <ImageBackground  source={require('../../imgs/bac.png')} style={styles.backgroundImage}>
     <View style={styles.content}>
     <KeyboardAvoidingView behavior="padding" style={styles.form} >
     <Image source={require('../../imgs/logo.png')} style={styles.logo}></Image>
    
     <TextInput underlineColorAndroid='transparent'  style={styles.input} placeholder='Name'></TextInput>
    <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder='Password'></TextInput>
    

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
      <Text style={styles.forText}>Forget Password?</Text>
       </KeyboardAvoidingView>
       </View>
       

     </ImageBackground>
     </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  newview:{
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
  },
  content: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 300,
    height: 200,
    resizeMode: Image.resizeMode.contain,
    marginBottom:20,
    marginTop:0,
  },
  input:{
    fontSize: 16,
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'stretch',
    borderRadius:5,
  },
  buttonContainer:{
    backgroundColor: '#df1e36',
    alignSelf: 'stretch',
    padding:20,
    borderRadius:5,
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
  kbd:{
    marginBottom:10
  }
});
