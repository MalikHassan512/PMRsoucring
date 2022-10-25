import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

//importing SVGs and PNGs
import TotalMaterialIcon from '../../../../assets/TotalMaterialSvg';
import DividingLine from '../../../../assets/dividingLine';
import TotalOrderIcon from '../../../../assets/TotalOrderICon';

//Dimension of Screen
const {height, width} = Dimensions.get('window');

const StatsCard = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity>
        {/* <Card style={{backgroundColor: 'black', height: 75}}></Card>
        <Card
          style={{backgroundColor: 'black', height: 75, marginTop: 10}}></Card>
         */}

        <Card
          onPress={() => navigation.navigate('MaterialListing')}
          style={styles.CardBackground}>
          <View style={styles.totalMaterialIconAndItsTitle}>
            <View style={styles.totalMaterialIconView}>
              <TotalMaterialIcon />
            </View>
            <Text style={styles.titleText}>Total Material</Text>
          </View>

          <View style={styles.totalMaterialNumberView}>
            <Text style={styles.totalMaterialNumberText}>225</Text>
          </View>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity>
        <Card
          style={styles.secondCardBackground}
          onPress={() => navigation.navigate('OrderList')}>
          <View style={styles.totalMaterialIconAndItsTitle}>
            <View style={styles.TotalOrderIconView}>
              <TotalOrderIcon />
            </View>
            <View>
              <Text style={styles.titleText}>Total Orders</Text>
            </View>
          </View>

          <View style={styles.TotalOrderView}>
            <Text style={styles.TotalOrderText}>154</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  secondCardBackground: {backgroundColor: '#37B9C5', height: 75, marginTop: 10},
  CardBackground: {backgroundColor: '#37B9C5', height: 75},
  totalMaterialIconAndItsTitle: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 20,
  },
  titleText: {color: 'white', fontWeight: 'bold'},
  totalMaterialIconView: {marginHorizontal: '5%'},
  totalMaterialNumberView: {
    alignItems: 'flex-end',
    paddingRight: 5,
    marginVertical: 1,
  },
  totalMaterialNumberText: {color: 'white', fontSize: 18},
  DividingLineView: {alignItems: 'center', marginTop: '5%'},
  TotalOrderView: {alignItems: 'flex-end', paddingRight: 5, marginVertical: 5},
  TotalOrderText: {color: 'white', fontSize: 18},

  TotalOrderIconView: {marginHorizontal: '5%'},
});

export default StatsCard;
