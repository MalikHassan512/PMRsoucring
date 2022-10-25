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
import PharmaHomeStack from '../AppStack/HomeStack/PharmaHomeStack';
import CustomPharmaDrawer from '../../components/CustomPharmaDrawer';

//import SVGs
import HomeIcon from '../../../assets/DrawerHomeIcon';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = Drawer;
const width = Dimensions.get('screen').width;

const PharmaDrawer = () => {
  const {navigate} = useNavigation();

  return (
    <Navigator
      drawerType="slide"
      drawerContent={props => <CustomPharmaDrawer {...props} />}>
      <Screen
        name="HomeScreenDrawer"
        component={PharmaHomeStack}
        options={{
          title: 'Home',
          headerShown: false,
          drawerActiveTintColor: 'white',
          drawerIcon: () => <HomeIcon />,
        }}
      />
    </Navigator>
  );
};

export default PharmaDrawer;
