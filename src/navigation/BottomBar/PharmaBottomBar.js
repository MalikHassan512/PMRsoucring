import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';
import PharmaHomeStack from '../AppDrawer/PharmaDrawer';
import HomeIcon from '../../../assets/bottomTabHomeIcon';
import SearchScreen from '../../screens/SearchScreen';
import SearchIcon from '../../../assets/SearchBottomIcon';
import AddToCart from '../../screens/Cart/AddToCart/Index';
import CartIcon from '../../../assets/CartBottomIcon';
import AllChats from '../../screens/Chat/AllChats';
import ChatIcon from '../../../assets/ChatBottomIcon';
import PharmaProfile from '../../screens/Profile/PharmaProfile/index';
import ProfileBottomIcon from '../../../assets/ProfileBottomIcon';

const Tab = createBottomTabNavigator();

const PharmaBottomBar = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={PharmaHomeStack}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: () => <SearchIcon />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={AddToCart}
        options={{
          title: 'Cart',
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: () => <CartIcon />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={AllChats}
        options={{
          title: 'Chat',
          headerTitleAlign: 'center',
          tabBarIcon: () => <ChatIcon />,
        }}
      />

      <Tab.Screen
        name="PharmaProfile"
        component={PharmaProfile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: () => <ProfileBottomIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default PharmaBottomBar;
