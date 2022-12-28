import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainHeader = () => {
  return (
    <View style={styles.hederBack}>
      <Text style={styles.heading}>CARCAL</Text>
      <Text style={styles.tagline}>your dealership's delivery board</Text>
      <View style={styles.logoBox}>
        <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hederBack:{
    // flex:1,
    maxHeight:160,
    backgroundColor:'#16225B',
    paddingTop:20,
    alignItems:'center',
    zIndex:2,
  },
  heading:{
    fontSize:60,
    fontWeight:"900",
    color:'white',
    marginBottom:0,
  },
  tagline:{
    color:'white',
    fontSize:13,
    marginTop:-10,
    textTransform:'uppercase',
    marginBottom:80
  },
  logoBox:{
    height:90,
    width:90,
    overflow:'hidden',
    backgroundColor:'white',
    position:'absolute',
    bottom:-45,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    height:60,
    width:60,
    resizeMode:'contain',
    // zIndex:100,
  }
})
export default MainHeader
