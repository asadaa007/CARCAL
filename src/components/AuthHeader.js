import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const AuthHeader = () => {

  const [currentDate, setcurrentDate]= useState('')

  useEffect(()=>{
    var date = new Date().getDate() // current Date
    var month = new Date().getMonth() +1 // current Month
    var year = new Date().getFullYear() // current Year

    setcurrentDate(
      date +'-' + month +'-' + year
    )

  },[])



  return (
    <View style={styles.hederBack}>
      <View style={styles.topHeader}>
        <TouchableOpacity>
          <Text><FontAwesome5 style={styles.ico} name={'bars'} size={20} solid /></Text>
        </TouchableOpacity>
       <View style={styles.userIcoBox}>
       <TouchableOpacity>
          <Image 
          style={styles.UserIcon}
          source={require('../assets/User.png')}
        />
        </TouchableOpacity>
       </View>
        <View style={styles.userInfoBox}>
          <Text style={styles.userNameText}>Asad Ur Rehman</Text>
          <Text style={styles.lastLoginTime}>Last Login {currentDate}</Text>
        </View>
        <TouchableOpacity>
        <Text><FontAwesome5 style={styles.ico} name={'search'} size={20} solid /></Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text><FontAwesome5 style={styles.ico} name={'bell'} size={20} solid /></Text>
        <View style={{
          backgroundColor:'yellow',
          width:20, height:20,
          position:'absolute',
          borderRadius:50, 
          top:-10,
          left:-10,
          justifyContent:'center',
          alignItems:'center'
          }}><Text style={{color:'black'}}>2</Text></View>
        </TouchableOpacity>
        
      </View>
      <Text style={styles.heading}>CARCAL</Text>
      <Text style={styles.tagline}>your dealership's delivery board</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  hederBack:{
    flex:1,
    backgroundColor:'#16225B',
    alignItems:'center'
  },
  topHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
  },
  heading:{
    fontSize:50,
    fontWeight:"900",
    color:'white',
    marginBottom:0,
  },
  tagline:{
    color:'white',
    fontSize:10.5,
    marginTop:-10,
    textTransform:'uppercase',
  },
  userIcoBox:{
    width:60, 
    height:60, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gold',
    borderRadius:50,
  },
  UserIcon:{
    width:50,
    height:50,
    resizeMode:'contain',
  },
  ico:{
    fontSize:25,
    color:'white'
  },
  userNameText:{
    fontSize:20,
    color:'white',
    fontWeight:'600'
  },
  lastLoginTime:{
    color:'white'
  }
})
export default AuthHeader
