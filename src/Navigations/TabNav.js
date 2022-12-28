import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Cervices,DetailerSection,JobCard,LicenseInfo,MechanicsSection,PartsSection} from '../index'

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabsNav() {
  return (
    <Tab.Navigator
    initialRouteName="JobCard"
    screenOptions={{
        tabBarActiveBackgroundColor:'#16225B',
        tabBarActiveTintColor:'white',
        headerShown:false,
        tabBarStyle: {backgroundColor:'#EFEFEF'},
      }}
    >
      <Tab.Screen
        name="JobCard"
        component={JobCard}
        options={{
          tabBarLabel: 'Job Card',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} solid/>
          ),
        }}
      />
      <Tab.Screen
        name="LicenseInfo"
        component={LicenseInfo}
        options={{
          tabBarLabel: 'Licensing',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-alt" color={color} size={size} solid/>
          ),
        }}
      />
      <Tab.Screen
        name="Cervices"
        component={Cervices}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list-ul" color={color} size={size} regular/>
          ),
        }}
      />
      <Tab.Screen
        name="Mechanics"
        component={MechanicsSection}
        options={{
          tabBarLabel: 'Mechanics',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tools" color={color} size={size} regular/>
          ),
        }}
      />
      <Tab.Screen
        name="Parts"
        component={PartsSection}
        options={{
          tabBarLabel: 'Parts',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cogs" color={color} size={size} light/>
          ),
        }}
      />
      <Tab.Screen
        name="Detailer"
        component={DetailerSection}
        options={{
          tabBarLabel: 'Detailer',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard" color={color} size={size} solid/>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}


