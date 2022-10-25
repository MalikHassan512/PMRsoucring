import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import SeeMoreArrow from '../../../assets/seeMoreArrow';
import RelatedItemCardItem from './components/relatedItemCard';

import {useNavigation} from '@react-navigation/core';

const {height, width} = Dimensions.get('window');

const ProductDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.TopImageView}>
        <Image
          source={require('../../../assets/ProductDetail.png')}
          style={{width: width}}
        />
      </View>
      <View style={styles.ProductTitleView}>
        <Text style={styles.TitleText}>CMC - This is the Product Title</Text>
      </View>

      <View style={styles.DS20View}>
        <Text style={styles.DS20Text}>D.S 2.0</Text>
      </View>

      <View style={styles.WeightAndPriceView}>
        <View style={styles.kgView}>
          <Text style={styles.kgandPriceText}>10.0 Kg</Text>
          <Text style={styles.minOrderText}>(Min.Order)</Text>
        </View>

        <Text style={styles.kgandPriceText}>Rs. 800/kg</Text>
      </View>

      <View style={styles.DS20View}>
        <Text style={styles.DS20Text}>8 yrs CN</Text>
      </View>

      <View style={styles.DescriptionAndDetailView}>
        <Text style={styles.DescriptionText}>Description</Text>

        <Text style={styles.DescriptionDetailText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and....
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddToCart')}
        style={styles.AddtoCarButton}>
        <Text style={{color: 'white'}}>Add to Cart</Text>
      </TouchableOpacity>

      <View style={styles.RelatedItemsandSeeMoreView}>
        <Text style={styles.relatedItemText}>Related Items</Text>

        <TouchableOpacity>
          <Text style={{color: '#37B9C5'}}>
            See more <SeeMoreArrow />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginVertical: 10}}>
        <RelatedItemCardItem />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopImageView: {
    height: 'auto',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  ProductTitleView: {
    marginTop: 10,
    justifyContent: 'center',
    marginHorizontal: '3%',
  },
  TitleText: {color: '#37B9C5', fontWeight: 'bold', fontSize: 18},
  DS20View: {marginHorizontal: '3%'},
  DS20Text: {color: '#ADB3BC', marginTop: 3},
  kgView: {
    flexDirection: 'row',
  },
  kgandPriceText: {fontWeight: 'bold', fontSize: 16},
  minOrderText: {marginHorizontal: '1%', color: '#ADB3BC'},
  WeightAndPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginTop: '1%',
  },
  DescriptionAndDetailView: {marginTop: '5%', marginHorizontal: '3%'},
  DescriptionText: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  DescriptionDetailText: {marginTop: '3%', marginHorizontal: '3%'},
  RelatedItemsandSeeMoreView: {
    marginHorizontal: '3%',
    // marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  relatedItemText: {color: '#333333', fontWeight: 'bold', fontSize: 16},

  AddtoCarButton: {
    backgroundColor: '#37B9C5',
    justifyContent: 'center',
    alignItems: 'center',
    // height: height / 16,
    height: 50,
    marginHorizontal: '5%',
    marginVertical: '5%',
    borderRadius: 40,
  },
});

export default ProductDetail;
