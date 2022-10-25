import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

//import Components
import AllMaterialCard from './components/AllMaterialCard';

//import SVGs and PNGs
import SearchBarIcon from '../../../assets/searchBarIcon';
import FilterSVG from '../../../assets/FilterSVG';

//Dimensions of Screen
const {height, width} = Dimensions.get('window');

const AllMaterials = () => {
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
      <AllMaterialCard />
      <View></View>
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
});

export default AllMaterials;
