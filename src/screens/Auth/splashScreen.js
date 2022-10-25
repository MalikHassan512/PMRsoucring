import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  Text,
} from 'react-native';
import Splash from '../../../assets/splashScreen';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Splash /> */}
      <Image
        resizeMode="contain"
        height={700}
        width={500}
        style={{marginRight: 5}}
        source={require('../../../assets/splash.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;
