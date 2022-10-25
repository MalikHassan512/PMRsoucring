import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

//import Components
import MaterialListingCard from '../VendorHome/components/MaterialListCard';
//import SVGs and PNGs
import SearchBarIcon from '../../../assets/searchBarIcon';
import FilterSVG from '../../../assets/FilterSVG';

//Dimensions of Screen
const {height, width} = Dimensions.get('window');

const MaterialListing = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.searchBarAndFIlterView}>
        <Searchbar
          placeholder="100,000 drugs and goods"
          placeholderTextColor={'#ADB3BC'}
          icon={() => <SearchBarIcon />}
          style={styles.searchBarStyle}
        />
        <TouchableOpacity>
          <FilterSVG />
        </TouchableOpacity>
      </View>
      <MaterialListingCard />
      <View></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddNewMaterial')}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}> Add New Material </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  searchBarAndFIlterView: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarStyle: {
    borderRadius: 30,
    marginHorizontal: '3%',
    width: width - 70,
  },
  buttonStyle: {
    backgroundColor: '#37B9C5',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginLeft: 15,
    marginBottom: 5,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: width / 1.1,
  },
  buttonText: {color: 'white'},
});

export default MaterialListing;
