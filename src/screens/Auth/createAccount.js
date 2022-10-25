import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';

const CreateAccount = () => {
  const navigation = useNavigation();

  let backarrow = '<';
  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <View style={{alignItems: 'center', marginTop: 90}}>
          <Text style={{color: '#111111', fontSize: 24, fontWeight: 'bold'}}>
            Create Account
          </Text>
        </View>
        <View style={styles.username}>
          <Text style={styles.textColor}>Username</Text>
          <TextInput />
        </View>

        <View style={styles.userInputStyles}>
          <Text style={styles.textColor}>Phone Number</Text>
          <TextInput />
        </View>

        <View style={styles.userInputStyles}>
          <TextInput placeholder="Email" />
        </View>

        <View style={styles.Password}>
          <TextInput placeholder="Password" />
          <TouchableOpacity>
            <Image source={require('../../../assets/viewPassword.png')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            navigation.navigate('Verification');
          }}>
          <Text style={{color: 'white'}}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={{fontWeight: '300'}}>
            {backarrow} Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  textColor: {color: '#090F47', fontWeight: '300', fontSize: 13},
  username: {
    marginTop: '10%',
    marginHorizontal: '10%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  userInputStyles: {
    marginTop: '0.5%',
    marginHorizontal: '10%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  Password: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },

  continueButton: {
    alignItems: 'center',
    marginTop: '15%',
    backgroundColor: '#37B9C5',
    marginHorizontal: '10%',
    borderRadius: 40,
    height: '8%',
    justifyContent: 'center',
  },
  loginContainer: {
    marginTop: '5%',
    //   backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default CreateAccount;
