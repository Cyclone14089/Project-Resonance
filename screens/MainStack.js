import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeSVG from '../svg/HomeSVG';
import LikeSVG from '../svg/LikeSVG';
import SearchSVG from '../svg/SearchSVG';
import ProfileSVG from '../svg/ProfileSVG';
import BellSVG from '../svg/BellSVG';

import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import EventScreen from './EventScreen';
import CollabScreen from './CollabScreen';
import NotificationScreen from './NotificationScreen';

const tabs = {
    Home: { 
      labelStyle: {
        color: '#5B37B7',
      },
      icon: {
        component: HomeSVG,
        activeColor: 'rgba(91,55,183,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(223,215,243,1)',
        inactiveColor: 'rgba(223,215,243,0)',
      },
    }, // end of Home
    Notifications: { 
      labelStyle: {
        color: '#5B37B7',
      },
      icon: {
        component: BellSVG,
        activeColor: 'rgba(91,55,183,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(223,215,243,1)',
        inactiveColor: 'rgba(223,215,243,0)',
      },
    }, // end of Notifications
    Event: { 
      labelStyle: {
        color: '#5B37B7',
      },
      icon: {
        component: SearchSVG,
        activeColor: 'rgba(91,55,183,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(223,215,243,1)',
        inactiveColor: 'rgba(223,215,243,0)',
      }, // end of Event
    },
    User: { 
      labelStyle: {
        color: '#1194AA',
      },
      icon: {
        component: ProfileSVG,
        activeColor: 'rgba(17,148,170,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(207,235,239,1)',
        inactiveColor: 'rgba(207,235,239,0)',
      },
    }, // end of User
  };  

const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => (
            <AnimatedTabBar tabs={tabs} {...props} />
          )}
    >
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="User" component={UserScreen} />

    </Tab.Navigator>
);


export default MainStack;