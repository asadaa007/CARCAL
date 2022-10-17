import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AuthHeader = () => {
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
          <Text style={styles.userNameText}>User Name Here</Text>
          <Text style={styles.lastLoginTime}>Last Login 13-10-2022</Text>
        </View>
        <TouchableOpacity>
        <Text><FontAwesome5 style={styles.ico} name={'search'} size={20} solid /></Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text><FontAwesome5 style={styles.ico} name={'bell'} size={20} solid /></Text>
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
    marginTop:15,
    marginBottom:20,
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
  },
  lastLoginTime:{
    color:'white'
  }
})
export default AuthHeader
