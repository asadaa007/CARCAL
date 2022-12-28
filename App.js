import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/Navigations/route';


const App = () => {
  SplashScreen.hide();
  return ( 
      <>
        <Route/>
      </>
  )
}

export default App

