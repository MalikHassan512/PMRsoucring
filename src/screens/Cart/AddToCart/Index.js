import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AllMaterialCard from '../../AllMaterials/components/AllMaterialCard';

//import SVGs
import Line from '../../../../assets/blackline';

const AddToCart = () => {
  return (
    <>
      <View>
        <AllMaterialCard />
      </View>

      <View style={styles.SubTotalAndTotalView}>
        <Text>Subtotal(3 items)</Text>
        <Text style={styles.boldAndBlack}>Rs,1500</Text>
      </View>

      <View style={{marginHorizontal: '5%', marginTop: '5%'}}>
        <Line />
      </View>

      <View style={styles.SubTotalAndTotalView}>
        <Text style={styles.boldAndBlack}>Total</Text>
        <Text style={styles.boldAndBlack}>Rs,1500</Text>
      </View>

      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.buttonTextColor}>Continue</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  SubTotalAndTotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  boldAndBlack: {fontWeight: 'bold', color: 'black'},
  buttonView: {
    backgroundColor: '#37B9C5',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: '5%',
    borderRadius: 40,
    marginTop: 20,
  },
  buttonTextColor: {color: 'white'},
});

export default AddToCart;
