import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategBtn2 = ({titleBtnCat}) => {
  return (
    <TouchableOpacity style={styles.btnStyle}>
        <Image
        source={require('../assets/CourtCar.png')}
        />
      <Text style={styles.titleStyle}>{titleBtnCat}</Text>
    </TouchableOpacity>
  )
}

export default CategBtn2

const styles = StyleSheet.create({
    btnStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row',
        paddingVertical:20,
        borderRadius:15,
        marginBottom:10,
        borderWidth:1
    },
    titleStyle:{
        marginLeft:15,
        color:'#16225B',
        fontWeight:'600',
        fontSize:20
    }
})