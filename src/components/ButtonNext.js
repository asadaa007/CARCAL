import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const ButtonNext = ({BTNtext,byPress}) => {
  return (
    <TouchableOpacity style={styles.BTNstyles} onPress={byPress}>
      <Text style={styles.BTNsText}>{BTNtext}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  BTNstyles:{
    backgroundColor:'#46741C',
    paddingVertical:15,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:50
  },
  BTNsText:{
    color:'white',
    fontSize:15,
    fontWeight:'600'
  }
})
export default ButtonNext
