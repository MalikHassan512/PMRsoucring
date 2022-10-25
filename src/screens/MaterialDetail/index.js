import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

//import SVGs
import MaterialImage from '../../../assets/MaterialDetailTopImage';

const MaterialDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.TopImageView}>
        <MaterialImage />
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Material's Name</Text>
        <Card style={styles.CardStyle}>
          <Text style={styles.Cardtext}>Lexapro</Text>
        </Card>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Price</Text>
        <Card style={styles.CardStyle}>
          <Text style={styles.Cardtext}>345/Kg</Text>
        </Card>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Min. Order</Text>
        <Card style={styles.CardStyle}>
          <Text style={styles.Cardtext}>10-Kg</Text>
        </Card>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Available Quantity</Text>
        <Card style={styles.CardStyle}>
          <Text style={styles.Cardtext}>1220-Kg</Text>
        </Card>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Vendor/Owner</Text>
        <Card style={styles.CardStyle}>
          <Text style={styles.Cardtext}>Online Pharma</Text>
        </Card>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Description</Text>
        <Card style={styles.CardStyle}>
          <Text style={styles.DescriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Card>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('EditMaterialDetail')}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Edit Material Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopImageView: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 'auto',
  },
  MateialNameAndCardView: {marginHorizontal: 20, marginTop: 20},
  MaterialName: {marginHorizontal: '5%'},
  CardStyle: {marginTop: 5},
  Cardtext: {
    marginHorizontal: '5%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  DescriptionText: {padding: 10},
  buttonStyle: {
    backgroundColor: '#37B9C5',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 40,
  },
  buttonText: {color: 'white'},
});

export default MaterialDetail;
