import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';

const Login = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.usernameView}>
          <Image source={require('../../../assets/usernameIcon.png')} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#50555C"
            style={styles.TextInputStyle}
          />
        </View>

        <View style={styles.PasswordWholeView}>
          <View style={styles.PasswordView}>
            <Image source={require('../../../assets/passwordIcon.png')} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#50555C"
              style={styles.TextInputStyle}
            />
          </View>
          <TouchableOpacity>
            <Text>Forget?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginOpacityStyle}>
          <View style={styles.loginViewStyle}>
            <Text style={{color: 'white', fontSize: 17}}>Log in</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '20%',
          }}>
          <TouchableOpacity>
            <Text>{'<'} Forget Password? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateAccount');
            }}>
            <Text style={{color: '#FFC618'}}>Login using another account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  welcomeText: {color: '#090F47', fontSize: 30, fontWeight: 'bold'},

  loginViewStyle: {
    backgroundColor: '#37B9C5',
    marginHorizontal: '5%',
    borderRadius: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginOpacityStyle: {
    marginTop: '5%',
    height: '10%',
    justifyContent: 'center',
  },
  usernameView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
    marginHorizontal: '8%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },

  PasswordView: {
    marginVertical: '1%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInputStyle: {marginLeft: '3%'},
  PasswordWholeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    borderColor: 'grey',
    borderBottomWidth: 0.3,
  },
});

export default Login;
