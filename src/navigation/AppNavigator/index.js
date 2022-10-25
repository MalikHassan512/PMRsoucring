import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../AppStack/Auth';
import {useSelector} from 'react-redux';
import PharmaBottomBar from '../BottomBar/PharmaBottomBar';
import VendorBottomBar from '../BottomBar/VendorBottomBar';

const AppNavigator = () => {
  const status = useSelector(state => state.auth?.status);
  const userType = useSelector(state => state?.user?.code);
  return (
    <NavigationContainer>
      {status ? (
        userType === 'vendor' ? (
          <VendorBottomBar />
        ) : (
          <PharmaBottomBar />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
