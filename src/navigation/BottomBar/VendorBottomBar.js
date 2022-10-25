import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';
import HomeOfVendor from '../AppDrawer/VendorDrawer';
import HomeIcon from '../../../assets/bottomTabHomeIcon';
import SaleReport from '../../screens/SaleReport/index';
import ReportIcon from '../../../assets/SalesReportBottomIcon';
import AddNewMaterial from '../../screens/AddNewMaterial';
import AddIcon from '../../../assets/AddIcon';
import AllChat from '../../screens/Chat/AllChats/index';
import ChatIcon from '../../../assets/ChatBottomIcon';
import ProfileIcon from '../../../assets/ProfileBottomIcon';
import VendorProfile from '../../screens/Profile/VendorProfile/index';

const Tab = createBottomTabNavigator();

const VendorBottomBar = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeOfVendor"
        component={HomeOfVendor}
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />

      <Tab.Screen
        name="Report"
        component={SaleReport}
        options={{
          headerShown: false,
          tabBarIcon: () => <ReportIcon />,
        }}
      />

      <Tab.Screen
        name="Add"
        component={AddNewMaterial}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: 'Add',
          title: 'Add New Material',
          headerShown: true,
          tabBarIcon: () => <AddIcon />,
        }}
      />

      <Tab.Screen
        name="AllChat"
        component={AllChat}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: 'Chat',
          tabBarIcon: () => <ChatIcon />,
        }}
      />

      <Tab.Screen
        name="VendorProfile"
        component={VendorProfile}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: 'Profile',
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default VendorBottomBar;
