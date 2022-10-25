import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {Card} from 'react-native-paper';

import {useNavigation} from '@react-navigation/core';

export default function HomeCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Card style={styles.CardStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail');
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Title}>Cymbalta</Text>
            <Image
              style={{width: 90, height: 70}}
              source={require('../../../../assets/Salt.png')}
            />
          </View>
          <View style={styles.detail}>
            <Text style={styles.DS}>D.S 2.0</Text>
            <Text style={styles.yrs}>S yrs CN</Text>
          </View>
          <Text style={styles.price}>$4.50 - $5.50</Text>
          <View style={styles.gramContainer}>
            <Text style={styles.weight}>1000.0 kg</Text>
            <Text style={styles.order}>(Min. Order)</Text>
          </View>
        </TouchableOpacity>
      </Card>

      <Card style={styles.CardStyle}>
        <TouchableOpacity
          TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail');
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Title}>Cymbalta</Text>
            <Image
              style={{width: 90, height: 70}}
              source={require('../../../../assets/Salt.png')}
            />
          </View>
          <View style={styles.detail}>
            <Text style={styles.DS}>D.S 2.0</Text>
            <Text style={styles.yrs}>S yrs CN</Text>
          </View>
          <Text style={styles.price}>$4.50 - $5.50</Text>
          <View style={styles.gramContainer}>
            <Text style={styles.weight}>1000.0 kg</Text>
            <Text style={styles.order}>(Min. Order)</Text>
          </View>
        </TouchableOpacity>
      </Card>

      <Card style={styles.CardStyle}>
        <TouchableOpacity
          TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail');
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Title}>Cymbalta</Text>
            <Image
              style={{width: 90, height: 70}}
              source={require('../../../../assets/Salt.png')}
            />
          </View>
          <View style={styles.detail}>
            <Text style={styles.DS}>D.S 2.0</Text>
            <Text style={styles.yrs}>S yrs CN</Text>
          </View>
          <Text style={styles.price}>$4.50 - $5.50</Text>
          <View style={styles.gramContainer}>
            <Text style={styles.weight}>1000.0 kg</Text>
            <Text style={styles.order}>(Min. Order)</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  order: {
    fontSize: 7,
    color: '#ADB3BC',
    marginLeft: 5,
  },
  weight: {
    fontWeight: '500',
    fontSize: 11,
  },
  gramContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  price: {
    fontWeight: '800',
    fontSize: 13,
  },
  yrs: {
    fontSize: 7,
    color: '#ADB3BC',
  },
  DS: {
    fontSize: 11,
    color: '#ADB3BC',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  Title: {
    fontSize: 14,
    marginVertical: 10,
    color: '#37B9C5',
    justifyContent: 'center',
  },
  CardStyle: {
    width: '31.5%',
    height: '110%',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    elevation: 5,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
