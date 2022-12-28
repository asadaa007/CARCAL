import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  DrawerLayoutAndroid
} from 'react-native';
import React, {useState} from 'react';
import {AuthHeader,CategBtn1,CategBtn2} from '../../index'
import SwitchSelector from 'react-native-switch-selector';
import {Calendar} from 'react-native-calendars';




const Home = ({navigation}) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [showHide, setShowHide] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#16225B', flexDirection: 'column'}}>
      <AuthHeader
      // openD={openDrawer}
      />
      <View style={styles.homeScreen}>
        <>
          <SwitchSelector
            initial={0}
            textColor={'black'}
            selectedColor={'white'}
            fontSize={15}
            bold
            backgroundColor={'#EFEFEF'}
            buttonColor={'#1B2763'}
            height={60}
            onPress={value => setShowHide(value)}
            options={[
              {label: 'Add/Edit Job Card', value: false},
              {label: 'Monthly Calander', value: true},
            ]}
          />
        </>
        <View style={{flex: 1}}>
          {showHide !== true ? (
            <View style={styles.fListBox}>
              <View style={styles.CategoryBox}>
                  <Text style={{color: '#16225B',alignSelf:'center',fontSize:25,fontWeight:'600',marginBottom:20}}>Category</Text>
                <CategBtn1
                onPress={() => navigation.navigate('TabsIn')}
                titleBtnCat='Add Job Card'
                />
                <CategBtn2
                titleBtnCat='Courtesy Car'
                />
              </View>
              <View style={styles.flatListBox}>
                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    top: 5,
                    left: 5,
                    zIndex: 5,
                  }}>
                  ABC
                </Text>
                <Image
                  resizeMode="contain"
                  style={styles.flatBack}
                  source={require('../../assets/backFlatlist.jpeg')}
                />
              </View>
            </View>
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Calendar
                theme={{
                  'stylesheet.calendar.header': {
                    week: {
                      marginTop: 2,
                      dayTextColor: '#16225B',
                      marginHorizontal: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: '#EFEFEF',
                      paddingVertical: 25,
                    },
                    headerContainer: {
                      backgroundColor: '#16225B',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flex: 1,
                      borderTopRightRadius: 15,
                      borderTopLeftRadius: 15,
                      justifyContent: 'center',
                      paddingVertical: 10,
                    },
                    monthText: {
                      paddingVertical: 25,
                      color: 'white',
                    },
                    dayTextAtIndex0: {
                      color: 'red'
                    },
                    dayTextAtIndex1: {
                      color: '#16225B'
                    },
                    dayTextAtIndex2: {
                      color: '#16225B'
                    },
                    dayTextAtIndex3: {
                      color: '#16225B'
                    },
                    dayTextAtIndex4: {
                      color: '#16225B'
                    },
                    dayTextAtIndex5: {
                      color: '#16225B'
                    },
                    dayTextAtIndex6: {
                      color: 'red'
                    }
                  },
                }}
                style={{width: 365, height: 500}}
                hideArrows={true}
                enableSwipeMonths={true}
                markingType={'custom'}
                markedDates={{
                  '2022-10-28': {
                    customStyles: {
                      container: {
                        backgroundColor: 'red',
                        elevation: 2,
                        borderRadius: 0,
                      },
                      text: {color: 'white'},
                    },
                  },
                  '2022-10-04': {
                    customStyles: {
                      container: {
                        backgroundColor: 'yellow',
                        elevation: 2,
                        borderRadius: 0,
                      },
                      text: {color: 'black'},
                    },
                  },
                  '2022-10-29': {
                    customStyles: {
                      container: {
                        backgroundColor: 'red', 
                        elevation: 2,
                        borderRadius: 0,
                      },
                      text: {color: 'white'},
                    },
                  },
                  '2022-10-13': {
                    customStyles: {
                      container: {
                        backgroundColor: 'green', 
                        elevation: 2,
                        borderRadius: 0,
                      },
                      text: {color: 'white'},
                    },
                  },
                }}
              />
            </View>
          )}
        </View>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 4,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 25,
    overflow: 'hidden',
  },
  fListBox: {
    paddingHorizontal: 10,
    flex: 4,
    position: 'relative',
    // backgroundColor: 'gray',
    marginTop: 10,
    overflow: 'hidden',
    // borderRadius: 8,
    // justifyContent:'center',
    // alignItems:'center'
  },
  flatListBox: {
    flex: 4,
    position: 'relative',
    backgroundColor: 'gray',
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatBack: {
    // width: '100%',
    resizeMode: 'cover',
    // flex: 1,
    // zIndex:1,5
    justifyContent: 'center',
  },
  CategoryBox: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    flex: 6,
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
    justifyContent:'center',
  },
});
export default Home;
