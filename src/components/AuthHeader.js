import {Image, StyleSheet, Text, TouchableOpacity, View, DrawerLayoutAndroid} from 'react-native';
import React, {useEffect, useState,useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';






const AuthHeader = () => {

  //Current Date Picker
  const [currentDate, setcurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 

    setcurrentDate(date + '-' + month + '-' + year);
  }, []);


  return (
    <View style={styles.hederBack}>

      <View style={styles.topHeader}>

        <TouchableOpacity>
          <Text>
            <FontAwesome5 style={styles.ico} name={'bars'} size={20} solid />
          </Text>
        </TouchableOpacity>
        <View style={styles.userIcoBox}>
          <TouchableOpacity>
            <Image
              style={styles.UserIcon}
              source={{uri:'https://scontent.flhe7-2.fna.fbcdn.net/v/t1.6435-9/52766786_2063747760382006_980604307135004672_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGjWiL-QyQsTZAYPaFvK3_62H1xgsrs9pLYfXGCyuz2kiR41MFyfgLssBfyZ7yIrfNHDmYFb_ihGlb7K1DjdrqY&_nc_ohc=ApZaJT-7duQAX-HKkpo&tn=9mW9vFkGewdWOw-H&_nc_ht=scontent.flhe7-2.fna&oh=00_AT8y0Zhu1q9x0gxcjnAmUtMb_TJcpQ0KKuTwnPHE9AvVDg&oe=637C908A'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.userInfoBox}>
          <Text style={styles.userNameText}>Asad Ur Rehman</Text>
          <Text style={styles.lastLoginTime}>Last Login {currentDate}</Text>
        </View>
        <TouchableOpacity>
          <Text>
            <FontAwesome5 style={styles.ico} name={'search'} size={20} solid />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <FontAwesome5 style={styles.ico} name={'bell'} size={20} solid />
          </Text>
          <View style={styles.badgeStyle}>
            <Text style={{color: 'white'}}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>CARCAL</Text>
      <Text style={styles.tagline}>your dealership's delivery board</Text>

      

    </View>
  );
};

const styles = StyleSheet.create({
  hederBack: {
    // flex: 1,
    maxHeight:160,
    backgroundColor: '#16225B',
    alignItems: 'center',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  heading: {
    fontSize: 50,
    fontWeight: '900',
    color: 'white',
    marginBottom: 0,
  },
  tagline: {
    color: 'white',
    fontSize: 10.5,
    marginTop: -10,
    textTransform: 'uppercase',
    marginBottom:10
  },
  userIcoBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius: 50,
    overflow:'hidden'
  },
  UserIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  ico: {
    fontSize: 25,
    color: 'white',
  },
  userNameText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  lastLoginTime: {
    color: 'white',
  },
  badgeStyle: {
    backgroundColor: '#16225B',
    width: 25,
    height: 25,
    position: 'absolute',
    borderRadius: 50,
    top: -10,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
});
export default AuthHeader;
