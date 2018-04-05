import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import  Login from './src/components/login/login'
import  Home from './src/components/home/home'
export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}
const AppNavigator = StackNavigator({
  Login: {screen:Login},
  Home: {screen:Home},
  
});

