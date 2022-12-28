import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import {AuthHeader, ChkBox, MultiLineBox, ButtonNext} from '../../index';

const LicenseInfo = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <AuthHeader />
      <ScrollView style={styles.LicenseInfoScreen}>
        <Text style={styles.head}>Licensing Info</Text>
      <ChkBox title={'Licensing'}/>
      <ChkBox title={'New License'}/>
      <ChkBox title={'Transfer'}/>
      <ChkBox title={'Transfer Lost'}/>
      <View style={{marginTop:20}}>
      <MultiLineBox MplaceHolder={'Notes'}/>
      </View>
      <ButtonNext BTNtext={'Next Step'}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LicenseInfoScreen: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
  },
  head:{
    color:'#16225B',
    fontSize:20,
    fontWeight:'700',
    marginBottom:20,
  }
  
  
});
export default LicenseInfo;
