import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const RelatedItemCardItem = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Card style={styles.cardStyle}>
          <Image source={require('../../../../assets/ric.png')} />
          <View style={styles.codeAndPriceView}>
            <Text style={styles.CodeStyle}>Name</Text>
          </View>
          <View style={styles.PriceView}>
            <Text style={styles.PriceStyle}>$5-$10</Text>
          </View>
        </Card>

        <Card style={styles.cardStyle}>
          <Image source={require('../../../../assets/ric.png')} />
          <View style={styles.codeAndPriceView}>
            <Text style={styles.CodeStyle}>Name</Text>
          </View>
          <View style={styles.PriceView}>
            <Text style={styles.PriceStyle}>$5-$10</Text>
          </View>
        </Card>

        <Card style={styles.cardStyle}>
          <Image source={require('../../../../assets/ric.png')} />
          <View style={styles.codeAndPriceView}>
            <Text style={styles.CodeStyle}>Name</Text>
          </View>
          <View style={styles.PriceView}>
            <Text style={styles.PriceStyle}>$5-$10</Text>
          </View>
        </Card>

        <Card style={styles.cardStyle}>
          <Image source={require('../../../../assets/ric.png')} />
          <View style={styles.codeAndPriceView}>
            <Text style={styles.CodeStyle}>Name</Text>
          </View>
          <View style={styles.PriceView}>
            <Text style={styles.PriceStyle}>$5-$10</Text>
          </View>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    // backgroundColor: 'red',
    marginTop: '3%',
    marginHorizontal: '2%',
    height: 'auto',
    width: width / 4,
  },
  codeAndPriceView: {
    // justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  CodeStyle: {color: '#37B9C5'},

  PriceStyle: {color: 'black', fontSize: 10},
  PriceView: {alignItems: 'flex-end', marginRight: '5%'},
});

export default RelatedItemCardItem;
