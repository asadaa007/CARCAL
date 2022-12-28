import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategBtn = ({titleBtnCat, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Image
        source={require('../assets/JcardBtn.png')}
        />
      <Text style={styles.titleStyle}>{titleBtnCat}</Text>
    </TouchableOpacity>
  )
}

export default CategBtn

const styles = StyleSheet.create({
    btnStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#16225B',
        flexDirection:'row',
        paddingVertical:20,
        borderRadius:15,
        marginBottom:20,
    },
    titleStyle:{
        marginLeft:15,
        color:'white',
        fontWeight:'600',
        fontSize:20
    }
})