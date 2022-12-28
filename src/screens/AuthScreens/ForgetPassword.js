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
        <Text style={styles.pHeading}>Forget Your Password?</Text>
        <Text style={styles.pPara}>Provide your details to reset your password</Text>
        <MainInputFeild placeHolder={'Your Name'} iconName="user" />
        <MainInputFeild placeHolder={'Email'} iconName="envelope" />
        <MainInputFeild placeHolder={'Date of Birth'} iconName="calendar" />
        
        <View style={{marginTop:40}}>

        </View>
        <Button
          BTNtext={'Submit'}
          byPress={() => navigation.navigate('Home')+[Alert.alert('Request submited')]}
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
  pHeading:{
    fontSize:20,
    fontWeight:'600',
    marginBottom:10,
    color: '#16225B',
    alignSelf:'center'
  },
  pPara:{
    fontSize:15,
    fontWeight:'400',
    marginBottom:30,
    color: '#16225B',
    alignSelf:'center'
  }
});
export default Home;
