import React, {useState, useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import VendorHome from '../AppStack/HomeStack/VendorHomeStack';
import CustomVendorDrawer from '../../components/CustomVendorDrawer';
import MaterialListing from '../../screens/MaterialListing';
import MsgScreen from '../../screens/Chat/AllChats/index';
import SaleReport from '../../screens/SaleReport';
import VendorProfile from '../../screens/Profile/VendorProfile';

//import SVGs
import HomeIcon from '../../../assets/DrawerHomeIcon';
import AllMaterialIcon from '../../../assets/AllMaterialIcon';
import MsgIcon from '../../../assets/MsgsIcon';
import ReportIcon from '../../../assets/ReportIconDrawer';
import ProfileIcon from '../../../assets/ProfileIconDrawer';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = Drawer;
const width = Dimensions.get('screen').width;

const VendorDrawer = () => {
  const {navigate} = useNavigation();

  return (
    <Navigator
      drawerType="slide"
      drawerContent={props => <CustomVendorDrawer {...props} />}>
      <Screen
        name="VendorHome"
        component={VendorHome}
        options={{
          title: 'Home',
          drawerActiveTintColor: 'white',
          headerShown: false,
          // drawerIcon: () => <HomeIcon />,
          drawerIcon: () => <HomeIcon />,
        }}
      />

      <Screen
        name="MaterialListing"
        component={MaterialListing}
        options={{
          title: 'All Material',
          drawerActiveTintColor: 'white',
          headerShown: false,
          // drawerIcon: () => <HomeIcon />,
          drawerIcon: () => <AllMaterialIcon />,
        }}
      />

      <Screen
        name="MsgScreen"
        component={MsgScreen}
        options={{
          title: 'Messages',
          drawerActiveTintColor: 'white',
          headerShown: false,
          // drawerIcon: () => <HomeIcon />,
          drawerIcon: () => <MsgIcon />,
        }}
      />

      <Screen
        name="SaleReport"
        component={SaleReport}
        options={{
          title: 'Report',
          drawerActiveTintColor: 'white',
          headerShown: false,
          // drawerIcon: () => <HomeIcon />,
          drawerIcon: () => <ReportIcon />,
        }}
      />

      <Screen
        name="VendorProfile"
        component={VendorProfile}
        options={{
          title: 'Profile',
          drawerActiveTintColor: 'white',
          headerShown: false,
          // drawerIcon: () => <HomeIcon />,
          drawerIcon: () => <ProfileIcon />,
        }}
      />
    </Navigator>
  );
};

export default VendorDrawer;
