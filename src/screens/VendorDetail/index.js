import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Rating from '../../../assets/rating';
import LocationIcon from '../../../assets/locationIcon';
import SeeMoreArrow from '../../../assets/seeMoreArrow';
import VendorCard from './components/VendorCard';
import VendorLogo from '../../../assets/VendorLogo';
import SearchIcon from '../../../assets/SearchIconInVendor';
import SalesGrowth from '../../../assets/SalesGrowth';

import VendorMaterialCard from './components/VendorMaterialCard';

const {height, width} = Dimensions.get('window');

const VendorDetail = () => {
  return (
    <ScrollView>
      <View style={styles.TopImageView}>
        <Avatar.Image
          source={() => <VendorLogo />}
          style={styles.AvatarStyle}
        />
      </View>

      <View style={styles.OffandSearchView}>
        <View style={styles.VendorStatsInnerView}>
          <Text style={styles.Off}>25% off</Text>
        </View>

        <TouchableOpacity style={styles.VendorStatsInnerView}>
          <SearchIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.ProductTitleView}>
        <Text style={styles.TitleText}>Online Pharma</Text>
      </View>

      <View style={styles.ratingAndLocationView}>
        <Rating />

        <View style={styles.kmAndLocationIcon}></View>
      </View>

      <View style={styles.VendorStatView}>
        <View style={styles.alignCenter}>
          <Text>No. of Materials</Text>
          <Text style={styles.VendorStatText}>698</Text>
        </View>
        <View style={styles.alignCenter}>
          <Text>Completed Orders</Text>
          <Text style={styles.VendorStatText}>367</Text>
        </View>
        <View style={styles.alignCenter}>
          <Text>Sales Growth</Text>
          <SalesGrowth />
        </View>
      </View>

      <View style={styles.DescriptionAndDetailView}>
        <Text style={styles.DescriptionText}>About Us</Text>

        <Text style={styles.DescriptionDetailText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and....
        </Text>
      </View>

      <View style={styles.RelatedItemsandSeeMoreView}>
        <Text style={styles.relatedItemText}>Related Vendors</Text>

        <TouchableOpacity>
          <Text style={{color: '#37B9C5'}}>
            See more <SeeMoreArrow />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginVertical: '5%', marginBottom: 30}}>
        <VendorMaterialCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopImageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProductTitleView: {
    marginTop: 20,
    justifyContent: 'center',
    marginHorizontal: '3%',
  },
  TitleText: {color: '#37B9C5', fontWeight: 'bold', fontSize: 18},
  ratingAndLocationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginVertical: '3%',
  },
  kmAndLocationIcon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  DescriptionAndDetailView: {marginTop: '1%', marginHorizontal: '3%'},
  DescriptionText: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  DescriptionDetailText: {marginTop: '3%', marginHorizontal: '3%'},
  RelatedItemsandSeeMoreView: {
    marginHorizontal: '5%',
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  relatedItemText: {color: '#333333', fontWeight: 'bold', fontSize: 16},

  alignCenter: {alignItems: 'center'},

  VendorStatText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
  },

  AvatarStyle: {
    height: 'auto',
    width: 'auto',
    borderRadius: 70,
    backgroundColor: 'white',
  },

  OffandSearchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    height: 40,
  },
  VendorStatsInnerView: {
    backgroundColor: '#37B9C5',
    justifyContent: 'center',
    width: 70,
    alignItems: 'center',
    borderRadius: 40,
  },

  Off: {color: 'white', fontWeight: 'bold', fontSize: 16},
  VendorStatView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
  },
});

export default VendorDetail;
