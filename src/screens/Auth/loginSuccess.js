import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {logIn} from '../../redux/actions/authActions';
const {height, width} = Dimensions.get('window');

const LoginSuccess = () => {
  const navigation = useNavigation();
  const userType = useSelector(state => state?.user?.code);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../../assets/loginSuccess.png')} />
      </View>
      <View style={styles.phnoAndConfirmView}>
        <Text style={styles.phoneNo}>Phone number</Text>
        <Text style={styles.phoneNo}>Confirmed</Text>
      </View>

      <View style={styles.congratsText}>
        <Text style={{color: '#ADB3BC'}}>
          Congratulations! your phone number has been verified. You
        </Text>
        <Text style={{color: '#ADB3BC'}}>can start using the app</Text>
      </View>

      <TouchableOpacity
        style={styles.loginOpacityStyle}
        onPress={() => {
          dispatch(logIn({status: true}));
        }}>
        <View style={styles.loginViewStyle}>
          <Text style={{color: 'white', fontSize: 17}}>Proceed</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 2.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  phoneNo: {fontSize: 25, color: '#111111', fontWeight: 'bold'},
  congratsText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '20%',
    height: height / 8,
  },
  loginOpacityStyle: {
    marginTop: '10%',
    height: '10%',
    justifyContent: 'center',
  },
  loginViewStyle: {
    backgroundColor: '#37B9C5',
    marginHorizontal: '5%',
    borderRadius: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phnoAndConfirmView: {
    alignItems: 'center',
    height: height / 6,
    justifyContent: 'center',
  },
});

export default LoginSuccess;
