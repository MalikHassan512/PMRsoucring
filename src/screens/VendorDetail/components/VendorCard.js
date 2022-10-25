import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const VendorCard = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Card style={styles.cardStyle}>
            <Image source={require('../../../../assets/pharmaImage.png')} />
            <View style={styles.codeAndPriceView}>
              <Text style={styles.CodeStyle}>Green Pharma</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.cardStyle}>
            <Image source={require('../../../../assets/pharmaImage.png')} />
            <View style={styles.codeAndPriceView}>
              <Text style={styles.CodeStyle}>Green Pharma</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.cardStyle}>
            <Image source={require('../../../../assets/pharmaImage.png')} />
            <View style={styles.codeAndPriceView}>
              <Text style={styles.CodeStyle}>Green Pharma</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    marginTop: '3%',
    marginHorizontal: '3%',
    height: 'auto',
    width: 'auto',
  },
  codeAndPriceView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  CodeStyle: {color: '#37B9C5'},

  PriceStyle: {color: 'black', fontSize: 10},
});

export default VendorCard;
