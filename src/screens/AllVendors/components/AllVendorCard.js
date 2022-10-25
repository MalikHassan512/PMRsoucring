import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

const {height, width} = Dimensions.get('window');

const AllVendorCard = () => {
  const navigation = useNavigation();

  return (
    <>
      <Card style={styles.CardStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VendorDetail');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../../../assets/VendorImage.png')} />
            <View style={{marginLeft: '10%'}}>
              <Text style={styles.onlinePharma}>Online Pharma</Text>
              <Image source={require('../../../../assets/rating.png')} />
              <View style={styles.contactButton}>
                <Text style={styles.buttonText}>Conatact</Text>
              </View>
            </View>
            <View style={styles.locationView}>
              <Text style={styles.km}> </Text>
              {/* <Image source={require('../../../../assets/locationIcon.png')} /> */}
            </View>
          </View>
        </TouchableOpacity>
      </Card>

      <Card style={styles.CardStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VendorDetail');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../../../assets/VendorImage.png')} />
            <View style={{marginLeft: '10%'}}>
              <Text style={styles.onlinePharma}>Online Pharma</Text>
              <Image source={require('../../../../assets/rating.png')} />
              <View style={styles.contactButton}>
                <Text style={styles.buttonText}>Conatact</Text>
              </View>
            </View>
            <View style={styles.locationView}>
              <Text style={styles.km}> </Text>
              {/* <Image source={require('../../../../assets/locationIcon.png')} /> */}
            </View>
          </View>
        </TouchableOpacity>
      </Card>

      <Card style={styles.CardStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VendorDetail');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../../../assets/VendorImage.png')} />
            <View style={{marginLeft: '10%'}}>
              <Text style={styles.onlinePharma}>Online Pharma</Text>
              <Image source={require('../../../../assets/rating.png')} />
              <View style={styles.contactButton}>
                <Text style={styles.buttonText}>Conatact</Text>
              </View>
            </View>
            <View style={styles.locationView}>
              <Text style={styles.km}> </Text>
              {/* <Image source={require('../../../../assets/locationIcon.png')} /> */}
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  CardStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 10,
    borderRadius: 10,
    padding: 20,
  },
  onlinePharma: {
    color: '#37B9C5',
    fontSize: 16,
  },
  contactButton: {
    backgroundColor: '#37B9C5',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    width: 70,
    // width: width - 800,
  },
  buttonText: {color: 'white', fontSize: 13, padding: 5},
  locationView: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  km: {fontSize: 10, color: '#ADB3BC'},
});

export default AllVendorCard;
