import { StyleSheet, Text, TextInput, View } from 'react-native';
import React,{useState} from 'react';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';


const MainInputFeild = ({placeHolder, value,onChangeText,secureTextEntry, iconName}) => {
  return (
    <View style={styles.inputBox}>
      <TextInput
      style={styles.inputFeild}
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='#16225B'
      />
      <Text style={styles.iconn}><FontAwesome5  name={iconName} color='#16225B' size={25} solid /></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputFeild:{
    borderBottomColor:'#16225B',
    borderBottomWidth:1,
    paddingLeft:35,
    paddingBottom:10,
    fontSize:20,
    color:'#16225B'
  },
  iconn:{
    position:'absolute',
    left:0,
    bottom:10,
    overflow:'hidden',
  },
  inputBox:{
    flexWrap:'nowrap',
    marginBottom:20,
    position:'relative',
  }
})
export default MainInputFeild
