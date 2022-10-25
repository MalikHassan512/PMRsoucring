import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {setUserType} from '../../redux/actions/userTypeAction';

const {height, width} = Dimensions.get('window');

const Walkthrough = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState();
  return (
    <>
      <View>
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/Delivery.png')} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.AreYouText}>Are you :</Text>
        </View>

        <View style={styles.FirstRadioButtonView}>
          <RadioButton
            color="#37B9C5"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('first');
              dispatch(setUserType('vendor'));
            }}
          />
          <Text style={styles.radioButtonText}>A Vendor</Text>
        </View>

        <View style={styles.secondRadioButtonView}>
          <RadioButton
            color="#37B9C5"
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => {
              dispatch(setUserType('pharma'));
              setChecked('second');
            }}
          />
          <Text style={styles.radioButtonText}>A Pharma Company</Text>
        </View>
        <View style={styles.previousAndNextView}>
          <TouchableOpacity>
            <Text>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (checked === 'first' || checked === 'second') {
                navigation.navigate('Welcome');
              } else {
                alert('Please Select Anyone Option');
              }
            }}>
            <Text style={{color: '#37B9C5'}}>Next</Text>
          </TouchableOpacity>

          {/* <Button title="Previous" color="#37B9C5" />
          <Button title="Next" color="#37B9C5" /> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 15,
    justifyContent: 'flex-end',
    marginHorizontal: '5%',
    height: height / 1.7,
  },
  AreYouText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    height: height / 15,
  },
  FirstRadioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 20,
    marginHorizontal: '5%',
    height: height / 8,
  },
  radioButtonText: {fontWeight: '500', color: 'black'},

  secondRadioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  previousAndNextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: height * 0.09,
    marginHorizontal: '5%',
  },
});

export default Walkthrough;
