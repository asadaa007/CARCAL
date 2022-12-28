import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const ChkBox = ({title}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.chkBox}>
          <CheckBox
            tintColors="#16225B"
            boxType="circle"
            onFillColor="#16225B"
            onTintColor="white"
            onCheckColor="white"
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.chkText}>{title}</Text>
        </View>
  )
}

export default ChkBox

const styles = StyleSheet.create({
    chkBox: {
        flexDirection: 'row',
        // alignItems:'center'
        // alignSelf: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
      },
      chkText: {
        color: '#16225B',
        fontWeight: '600',
        marginLeft: 10,
      }
})