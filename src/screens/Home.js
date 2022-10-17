import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import MainHeader from '../components/MainHeader';
import AuthHeader from '../components/AuthHeader';
import MainInputFeild from '../components/MainInputFeild';
import Button from '../components/Button';

const Home = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <MainHeader />
      {/* <AuthHeader/> */}

      <View style={styles.homeScreen}>
        <MainInputFeild placeHolder={'Email'} iconName="envelope" />
        <MainInputFeild
          placeHolder={'Password'}
          iconName="lock"
          secureTextEntry={true}
        />
        <View style={styles.chkBox}>
        <CheckBox
          tintColors='#16225B'
          boxType='circle'
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.chkText}>Keep me logged in</Text>
        </View>
        <Button
        BTNtext={'LOGIN'}
        />
        
        <TouchableOpacity><Text style={styles.forgotLink}>Forgot Password?</Text></TouchableOpacity>

        <View style={{flexDirection:'row'}}>
          <View style={{flex:3, borderBottomColor:'black', borderBottomWidth:1}}></View>
          <View style={{flex:2, alignItems:'center'}}><Text style={{color:'black', fontWeight:'600'}}>OR</Text></View>
          <View style={{flex:3, borderBottomColor:'black', borderBottomWidth:1}}></View>
        </View>
      <View style={{flexDirection:'row',paddingVertical:20, justifyContent:'center'}}>
        <TouchableOpacity>
          <Image
          style={styles.loginLinkStyles}
          source={require('../assets/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
          style={styles.loginLinkStyles}
          source={require('../assets/facebook.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Text style={{color:'black', fontWeight:'400'}}>Don't have account?   </Text>
        <TouchableOpacity>
          <Text style={{color:'#16225B',fontWeight:'600', textDecorationLine:'underline'}}>Register Now</Text>
        </TouchableOpacity>
      </View>


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
  chkBox:{
    flexDirection:'row',
    // alignItems:'center'
    alignSelf:'flex-end',
    alignItems:'center',
    marginBottom:40,
  },
  chkText:{
    color:'#16225B',
    fontWeight:'600',
  },
  forgotLink:{
    color:'#16225B',
    alignSelf:'center',
    fontWeight:'600',
    marginVertical:30
  },
  loginLinkStyles:{
    height:50,
    width:50,
    resizeMode:'contain',
    backgroundColor:'white',
    borderRadius:50,
    marginHorizontal:20
  }
});
export default Home;
