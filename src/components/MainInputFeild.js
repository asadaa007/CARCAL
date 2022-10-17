import { StyleSheet, Text, TextInput, View } from 'react-native';
import React,{useState} from 'react';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';


const MainInputFeild = ({placeHolder, value,onChangeText,secureTextEntry, iconName}) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.iconn}><FontAwesome5  name={iconName} color='#16225B' size={25} light /></Text>
      <TextInput
      style={styles.inputFeild}
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='#16225B'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputFeild:{
    borderBottomColor:'#16225B',
    borderBottomWidth:1,
    paddingLeft:35,
    fontSize:20,
    color:'#16225B'
  },
  iconn:{
    position:'absolute',
    top:10,
  },
  inputBox:{
    marginBottom:20
  }
})
export default MainInputFeild
