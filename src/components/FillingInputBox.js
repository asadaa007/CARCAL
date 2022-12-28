import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const FillingInputBox = ({nStyle,placeHolder,value,onChangeText,NoL,secureTextEntry,keyType,multiline}) => {
    
  return (
    <View style={styles.inputBox}>
      <TextInput
      style={[styles.inputFeild, {nStyle}]}
      placeholder={placeHolder}
      keyboardType={keyType}
      value={value}
      multiline={multiline}
      numberOfLines={NoL}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='#16225B'
      
      />
    </View>
  )
}

export default FillingInputBox

const styles = StyleSheet.create({
    inputFeild:{
        padding:15,
        paddingHorizontal:20,
        fontSize:15,
        color:'#16225B',
        backgroundColor:'#EFEFEF',
        borderRadius:50,
      },
      inputBox:{
        flexWrap:'nowrap',
        marginBottom:15,
        position:'relative',
      }
})