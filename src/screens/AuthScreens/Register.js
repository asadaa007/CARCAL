import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {MainHeader,MainInputFeild,Button} from '../../index'


const Home = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <MainHeader />
      <View style={styles.homeScreen}>
        <MainInputFeild placeHolder={'Your Name'} iconName="user" />
        <MainInputFeild placeHolder={'Email'} iconName="envelope" />
        <MainInputFeild placeHolder={'Date of Birth'} iconName="calendar" />
        <MainInputFeild
          placeHolder={'Password'}
          iconName="lock"
          secureTextEntry={true}
        />
        <MainInputFeild
          placeHolder={'ReEnter Password'}
          iconName="lock"
          secureTextEntry={true}
        />
        <View style={{marginTop:40}}>

        </View>
        <Button
          BTNtext={'Register'}
          byPress={() => navigation.navigate('Home')+[Alert.alert('Successfully Registered')]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 3,
    backgroundColor: '#EFEFEF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    paddingTop: 70,
  },
 
});
export default Home;
