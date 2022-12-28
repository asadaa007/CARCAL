import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../components/AuthHeader'

const MechanicsSection = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <MainHeader />
      <View style={styles.MechanicsSectionScreen}>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MechanicsSectionScreen: {
    flex: 4,
    backgroundColor: '#EFEFEF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    paddingTop: 70,
  },
  
});
export default MechanicsSection;
