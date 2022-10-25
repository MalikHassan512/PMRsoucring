import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-paper';

import {useNavigation} from '@react-navigation/core';

//SVGs and PNGs
import Melo from '../../../../assets/Melo';

//Diemension of Screen
const {height, width} = Dimensions.get('window');

const AllMaterialCard = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
          <Card style={styles.CardStyle}>
            <View style={styles.flexDirectionRow}>
              <Melo />
              <View style={styles.marginLeft}>
                <View style={styles.TitleAndPharmaCoName}>
                  <Text style={styles.titleText}>Amoxicillin</Text>
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: '#F2A024'}}>
                      {'('}By Pharma Plus{')'}
                    </Text>
                  </View>
                </View>
                <Text>D.S 2.0</Text>
                <View style={styles.flexDirectionRow}>
                  <Text>Rs. </Text>
                  <Text style={styles.RemainText}>500/kg</Text>
                  <Text style={styles.soldtext}>10 Kg</Text>
                  <Text> {'(Min. Order)'} </Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
          <Card style={styles.CardStyle}>
            <View style={styles.flexDirectionRow}>
              <Melo />
              <View style={styles.marginLeft}>
                <View style={styles.TitleAndPharmaCoName}>
                  <Text style={styles.titleText}>Amoxicillin</Text>
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: '#F2A024'}}>
                      {'('}By Pharma Plus{')'}
                    </Text>
                  </View>
                </View>
                <Text>D.S 2.0</Text>
                <View style={styles.flexDirectionRow}>
                  <Text>Rs. </Text>
                  <Text style={styles.RemainText}>500/kg</Text>
                  <Text style={styles.soldtext}>10 Kg</Text>
                  <Text> {'(Min. Order)'} </Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
          <Card style={styles.CardStyle}>
            <View style={styles.flexDirectionRow}>
              <Melo />
              <View style={styles.marginLeft}>
                <View style={styles.TitleAndPharmaCoName}>
                  <Text style={styles.titleText}>Amoxicillin</Text>
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: '#F2A024'}}>
                      {'('}By Pharma Plus{')'}
                    </Text>
                  </View>
                </View>
                <Text>D.S 2.0</Text>
                <View style={styles.flexDirectionRow}>
                  <Text>Rs. </Text>
                  <Text style={styles.RemainText}>500/kg</Text>
                  <Text style={styles.soldtext}>10 Kg</Text>
                  <Text> {'(Min. Order)'} </Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </ScrollView>
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
  soldtext: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  dotMenuView: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 10,
  },
  TitleAndPharmaCoName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginLeft: {marginLeft: 15},
});

export default AllMaterialCard;
