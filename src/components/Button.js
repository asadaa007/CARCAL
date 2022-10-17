import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const Button = ({BTNtext}) => {
  return (
    <TouchableOpacity style={styles.BTNstyles}>
      <Text style={styles.BTNsText}>{BTNtext}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  BTNstyles:{
    backgroundColor:'#16225B',
    paddingVertical:15,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  BTNsText:{
    color:'white',
    fontSize:15,
  }
})
export default Button
