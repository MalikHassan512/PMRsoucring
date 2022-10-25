import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Divider} from 'react-native-paper';

//import SVGs
// import ProfilePic from '../../assets/ProfilePic';

const CustomVendorDrawer = props => {
  return (
    <View style={styles.drawerBackground}>
      <View style={styles.ImageAndTextView}>
        <Image source={require('../../assets/PicInDrawer.png')} />
        <View style={styles.ProfileDataView}>
          <Text style={styles.VendorNameText}>Vendor Name</Text>
          <Text style={styles.emailText}>vedor@gmail.com</Text>
        </View>
      </View>
      <Divider style={styles.dividerStyle} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    backgroundColor: '#37B9C5',
  },
  ImageAndTextView: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 25,
  },
  ProfileDataView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  VendorNameText: {color: 'white', fontWeight: 'bold', fontSize: 16},
  emailText: {color: 'white'},
  dividerStyle: {backgroundColor: 'white', marginTop: 20},
});

export default CustomVendorDrawer;
