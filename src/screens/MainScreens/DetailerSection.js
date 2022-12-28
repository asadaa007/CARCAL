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

const DetailerSection = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <MainHeader />
      <View style={styles.DetailerSectionScreen}>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  DetailerSectionScreen: {
    flex: 4,
    backgroundColor: '#EFEFEF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    paddingTop: 70,
  },
  
});
export default DetailerSection;
