import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home';

const App = () => {
  SplashScreen.hide();
  return ( 
      <Home/>
  )
}

export default App

