import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {AuthHeader,FillingInputBox,MultiLineBox, CordianBox1, CordianBox2, CordianBox3, CordianBox4, ButtonNext} from '../../index'



const JobCard = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <AuthHeader />
      <ScrollView style={styles.JobCardScreen}>
        <FillingInputBox placeHolder={'Stock Number'} />
        <FillingInputBox placeHolder={'Customer Name'} keyType={'number-pad'} />
        <View style={{flex:1, flexDirection:"row"}}>
        <CordianBox1 titlee={"Model No."}/>
        <CordianBox2 titlee={"Sale Executives"}/>
        </View>
        <View style={{flex:1, flexDirection:"row", margin:0, padding:0}}>
        <CordianBox3 titlee={"Delivery Date"}/>
        <CordianBox4 titlee={"Delivery Time"}/>
        </View>
        <FillingInputBox placeHolder={'RO Number'}/>
        <MultiLineBox MplaceHolder={'Notes'} multiline={true} MNoL={4}/>
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
          <Text style={styles.chkText}>Keep me logged in</Text>
        </View>
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
          <Text style={styles.chkText}>Keep me logged in</Text>
        </View>
        <ButtonNext BTNtext={'Next Step'}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  JobCardScreen: {
    flex: 4,
    backgroundColor: '#EFEFEF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    backgroundColor: 'white',
    paddingBottom:15,
  },
  chkBox: {
    flexDirection: 'row',
    // alignItems:'center'
    // alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  },
  chkText: {
    color: '#16225B',
    fontWeight: '600',
    marginLeft: 10,
  }
});
export default JobCard;
