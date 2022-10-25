import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';

//SVGs and PNGs
import MaterialListingIcon from '../../../../assets/materialListingIcon';
import DotsMenu from '../../../../assets/DotsMenu';
import DaysAgoIcon from '../../../../assets/daysAgoIcon';

//Diemension of Screen
const {height, width} = Dimensions.get('window');

import {useNavigation} from '@react-navigation/core';

const NewdOrdersListCard = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('PendingOrderDetails')}>
        <Card style={styles.CardStyle}>
          <View style={styles.flexDirectionRow}>
            <MaterialListingIcon />
            <View style={{marginLeft: '5%'}}>
              <Text style={styles.titleText}>Amoxicillin</Text>
              <Text>D.S 2.0</Text>
              <View style={styles.flexDirectionRow}>
                <Text>Quantity: </Text>
                <Text style={styles.WeightText}>12Kg</Text>
              </View>
            </View>

            <View style={styles.OrderStatusView}>
              <Text style={styles.PendingText}>Pending</Text>
            </View>

            <View style={styles.dotMenuView}>
              <View style={styles.daysAgoIconAndText}>
                <DaysAgoIcon />
                <Text style={styles.DaysAgoText}>2d ago</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('PendingOrderDetails')}>
        <Card style={styles.CardStyle}>
          <View style={styles.flexDirectionRow}>
            <MaterialListingIcon />
            <View style={{marginLeft: '5%'}}>
              <Text style={styles.titleText}>Amoxicillin</Text>
              <Text>D.S 2.0</Text>
              <View style={styles.flexDirectionRow}>
                <Text>Quantity: </Text>
                <Text style={styles.WeightText}>12Kg</Text>
              </View>
            </View>

            <View style={styles.OrderStatusView}>
              <Text style={styles.PendingText}>Pending</Text>
            </View>

            <View style={styles.dotMenuView}>
              <View style={styles.daysAgoIconAndText}>
                <DaysAgoIcon />
                <Text style={styles.DaysAgoText}>2h ago</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  CardStyle: {
    padding: 5,
    marginVertical: '2%',
    marginHorizontal: '3%',
  },
  flexDirectionRow: {flexDirection: 'row'},
  titleText: {color: '#37B9C5', fontWeight: 'bold'},
  RemainText: {fontWeight: 'bold', color: 'black'},
  soldtext: {marginLeft: 10, fontWeight: 'bold', color: 'black'},
  dotMenuView: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  daysAgoIconAndText: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  WeightText: {color: 'black', fontWeight: 'bold', fontSize: 15},

  OrderStatusView: {
    position: 'absolute',
    right: 3,
    bottom: 3,
    marginRight: 5,
  },
  PendingText: {color: '#37B9C5'},
  DaysAgoText: {fontSize: 12, color: '#BEBABA'},
});

export default NewdOrdersListCard;
