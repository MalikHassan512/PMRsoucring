import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';

//import SVGs and PNGs
import GrowthCircle from '../../../../assets/salesGrowthCircle';

//Diemension of Screen
const {height, width} = Dimensions.get('window');

import {useNavigation} from '@react-navigation/core';

const StatsCard = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('SaleReport')}>
        <Card style={styles.CardBackground}>
          <View style={styles.SalesGrowthView}>
            <Text style={styles.titleText}>Sales Growth</Text>
          </View>

          <View style={styles.GrowthCircleView}>
            <GrowthCircle />
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  CardBackground: {backgroundColor: '#37B9C5', height: 160},
  titleText: {color: 'white', fontWeight: 'bold', fontSize: 15},
  SalesGrowthView: {marginTop: 20, alignItems: 'center'},
  GrowthCircleView: {alignItems: 'center'},
});

export default StatsCard;
