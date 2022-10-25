import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const {height, width} = Dimensions.get('window');

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/Welcome.png')} />
      </View>
      <View
        style={{
          // backgroundColor: 'pink',
          alignItems: 'center',
          height: height / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#37B9C5', fontSize: 24, fontWeight: 'bold'}}>
          Welcome To
        </Text>
        <Text style={{color: '#324C64', fontSize: 24, fontWeight: 'bold'}}>
          PMRsourcing
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}>
        <View style={[styles.button]}>
          <Text style={{color: 'white'}}> Sign up with Email</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.button, styles.specialProps]}>
          <Image source={require('../../../assets/googleIcon.png')} />
          <Text style={{color: 'black'}}> Sign up with Google</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '8%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: '#37B9C5'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: height / 3,
    marginTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    // marginTop: '30%',
    alignItems: 'center',
    backgroundColor: '#37B9C5',
    marginHorizontal: '5%',
    borderRadius: 40,
    height: 50,
    alignContent: 'center',
  },
  specialProps: {
    marginTop: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.1,
  },
});

export default Welcome;
