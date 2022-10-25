import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import HomeCard from './components/Card';
import VendorCard from './components/VendorCard';

import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';
//import SVGs
import DrawerIcon from '../../../assets/DrawerIcon';
import Filter from '../../../assets/FilterWhiteSvg';
import Bell from './../../../assets/BellIconSvg';
import Cart from '../../../assets/CartIconSvg';
import Arrow from '../../../assets/ArrowSVG';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../../redux/actions/authActions';
const {height, width} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.blueBackgroundContainer}>
            <View style={styles.topOverallView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }>
                <DrawerIcon />
              </TouchableOpacity>
              <View style={{marginLeft: 30}}>
                <Text style={styles.WelcomUserText}>Welcome User</Text>
              </View>
              <View style={styles.bellandCartContainer}>
                <TouchableOpacity onPress={() => dispatch(logOut())}>
                  <Bell />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Cart />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.topBannerStyle}>
              {/* <Image source={require('../../../assets/LeftMedicinePic.png')} /> */}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Image source={require('../../../assets/LeftBanner.png')} />
                <Image source={require('../../../assets/LeftBanner.png')} />
                <Image source={require('../../../assets/LeftBanner.png')} />
              </ScrollView>
              {/* <RightBanner /> */}
              {/* <Image source={require('../../../assets/RightMedicinePic.png')} /> */}
            </View>
            <View style={styles.SearchandfilterTopView}>
              <View>
                <Searchbar
                  icon={() => (
                    <Image source={require('../../../assets/Search.png')} />
                  )}
                  placeholder="10,000 Drugs and Goods"
                  placeholderTextColor="#ADB3BC"
                  style={styles.searchBarStyle}
                />
              </View>
              <TouchableOpacity>
                <Filter />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.all_title_View_Style}>
            <Text style={styles.all_title}>All Materials</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AllMaterials');
              }}>
              <Arrow />
            </TouchableOpacity>
          </View>
          <HomeCard />
          <View style={{marginVertical: 30}}>
            <HomeCard />
          </View>

          <View style={styles.all_title_View_Style}>
            <Text style={styles.all_title}>All Vendors</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllVendor')}>
              <Arrow />
            </TouchableOpacity>
          </View>
          <VendorCard />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  all_title_View_Style: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  all_title: {fontSize: 16, fontWeight: 'bold', color: '#090F47'},
  blueBackgroundContainer: {
    backgroundColor: '#37B9C5',
    height: 300,
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
    width: '20%',
    justifyContent: 'space-between',
  },
  WelcomUserText: {color: 'white', fontWeight: 'bold'},
  topBannerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  SearchandfilterTopView: {
    flexDirection: 'row',
    width: width - 40,
    marginHorizontal: '3%',
    marginTop: '6%',
    alignItems: 'center',
  },
  searchBarStyle: {
    borderRadius: 30,
    marginHorizontal: '3%',
    width: width - 70,
  },
});

export default Home;
