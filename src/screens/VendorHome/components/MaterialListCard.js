import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';

//SVGs and PNGs
import MaterialListingIcon from '../../../../assets/materialListingIcon';
import DotsMenu from '../../../../assets/DotsMenu';

//Diemension of Screen
const {height, width} = Dimensions.get('window');

import {useNavigation} from '@react-navigation/core';

const MaterialListCard = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('MaterialDetail')}>
        <Card style={styles.CardStyle}>
          <View style={styles.flexDirectionRow}>
            <MaterialListingIcon />
            <View style={{marginLeft: '5%'}}>
              <Text style={styles.titleText}>Amoxicillin</Text>
              <Text>D.S 2.0</Text>
              <View style={styles.flexDirectionRow}>
                <Text style={styles.RemainText}>Remain:12 Kg</Text>
                <Text style={styles.soldtext}>Sold:10 Kg</Text>
              </View>
            </View>
            <View style={styles.dotMenuView}>
              <TouchableOpacity>
                <DotsMenu />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MaterialDetail')}>
        <Card style={styles.CardStyle}>
          <View style={styles.flexDirectionRow}>
            <MaterialListingIcon />
            <View style={{marginLeft: '5%'}}>
              <Text style={styles.titleText}>Amoxicillin</Text>
              <Text>D.S 2.0</Text>
              <View style={styles.flexDirectionRow}>
                <Text style={styles.RemainText}>Remain:12 Kg</Text>
                <Text style={styles.soldtext}>Sold:10 Kg</Text>
              </View>
            </View>
            <View style={styles.dotMenuView}>
              <TouchableOpacity>
                <DotsMenu />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MaterialDetail')}>
        <Card style={styles.CardStyle}>
          <View style={styles.flexDirectionRow}>
            <MaterialListingIcon />
            <View style={{marginLeft: '5%'}}>
              <Text style={styles.titleText}>Amoxicillin</Text>
              <Text>D.S 2.0</Text>
              <View style={styles.flexDirectionRow}>
                <Text style={styles.RemainText}>Remain:12 Kg</Text>
                <Text style={styles.soldtext}>Sold:10 Kg</Text>
              </View>
            </View>
            <View style={styles.dotMenuView}>
              <TouchableOpacity>
                <DotsMenu />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  CardStyle: {
    marginVertical: '3%',
    marginHorizontal: '3%',
  },
  flexDirectionRow: {flexDirection: 'row'},
  titleText: {color: '#37B9C5', fontWeight: 'bold'},
  RemainText: {fontWeight: 'bold', color: 'black'},
  soldtext: {marginLeft: 10, fontWeight: 'bold', color: 'black'},
  dotMenuView: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 10,
  },
});

export default MaterialListCard;
