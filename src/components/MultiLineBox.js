import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'



const MultiLineBox = ({MplaceHolder,Mvalue,MonChangeText,MNoL,MkeyType,multiline}) => {
    
  return (
    <View style={styles.inputBox}>
      <TextInput
      style={styles.inputFeild}
      placeholder={MplaceHolder}
      keyboardType={MkeyType}
      value={Mvalue}
      multiline={multiline}
      // numberOfLines={MNoL}
      onChangeText={MonChangeText}
      placeholderTextColor='#16225B'
      />
    </View>
  )
}

export default MultiLineBox

const styles = StyleSheet.create({
    inputFeild:{
        paddingTop:15,
        paddingHorizontal:20,
        fontSize:15,
        color:'#16225B',
        backgroundColor:'#EFEFEF',
        borderRadius:15,
        // height:200,
        textAlign:'left'
      },
      inputBox:{
        // flexWrap:'nowrap',
        marginBottom:15,
        position:'relative',
      }
})