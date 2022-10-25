import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../../redux/actions/authActions';

//import SVGs and PNGs
import DrawerIcon from '../../../assets/DrawerIconSvg';
import BellIconSvg from '../../../assets/BellIconSvg';
import ArrowICon from '../../../assets/Arrow';

//import Cards
import StatsCard from './components/StatsCard';
import SaleGrowth from './components/SalesGrowthCard';
import MaterialListCard from './components/MaterialListCard';

//import Chart
import MonthGraph from './components/MonthGraph';
import NewOrdersCard from './components/NewOrdersCard';

import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const VendorHome = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <>
      <ScrollView>
        <View style={styles.blueBackgroundContainer}>
          <View style={styles.topOverallView}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <DrawerIcon />
            </TouchableOpacity>
            <View>
              <Text style={styles.WelcomUserText}>Welcome Vendor</Text>
            </View>
            <View style={styles.bellandCartContainer}>
              <TouchableOpacity onPress={() => dispatch(logOut())}>
                <BellIconSvg />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.PosterContainerView}>
            <Image
              source={require('../../../assets/VendorSubscribePoster.png')}
            />
          </View>
        </View>

        <View style={styles.totalMateriandSaleGrowthView}>
          <View style={styles.SalesGrowthView}>
            <SaleGrowth />
          </View>

          <View style={styles.StatsCardView}>
            <StatsCard />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <MonthGraph />
        </View>

        <View>
          <NewOrdersCard />
        </View>

        <View style={styles.MaterialListingAndItsIcon}>
          <Text style={styles.materialListingText}>Material Listing</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MaterialListing')}>
            <ArrowICon />
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: 5}}>
          <MaterialListCard />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  blueBackgroundContainer: {
    backgroundColor: '#37B9C5',
    height: 270,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  topOverallView: {
    marginHorizontal: '5%',
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bellandCartContainer: {
    flexDirection: 'row',
  },

  WelcomUserText: {color: 'white', fontWeight: 'bold'},

  PosterContainerView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  totalMateriandSaleGrowthView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    height: 190,
    // backgroundColor: 'black',
  },
  StatsCardView: {
    marginVertical: '5%',
    width: width / 2.2,
    borderRadius: 50,
  },
  SalesGrowthView: {
    marginVertical: '5%',
    width: width / 2.2,
    borderRadius: 50,
  },
  MaterialListingAndItsIcon: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  materialListingText: {color: '#101111', fontWeight: 'bold', fontSize: 16},
});

export default VendorHome;
