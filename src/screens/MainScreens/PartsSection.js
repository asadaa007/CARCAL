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
import {AuthHeader} from '../../index'

const PartsSection = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <AuthHeader />
      <View style={styles.PartsSectionScreen}>
      <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  PartsSectionScreen: {
    flex: 4,
    // backgroundColor: '#EFEFEF',
    backgroundColor: 'orange',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
  },
  
});
export default PartsSection;
