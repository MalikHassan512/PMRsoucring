import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-paper';

//Import SVGs
import SalesPercentSvg from '../../../assets/salesGrowthCircle';
import TotalOrder from '../../../assets/TotalOrderBlue';
import DotsMenu from '../../../assets/DotsMenu';

//Import Components
import Graph from '../VendorHome/components/MonthGraph';

const {height, width} = Dimensions.get('window');

const SaleReport = () => {
  return (
    <ScrollView>
      <View style={styles.Topbackground}>
        <View style={styles.alignment}>
          <Text style={styles.SalesGrowthText}>Sale Growth</Text>
          <SalesPercentSvg />
        </View>
        <View style={styles.TopViewOfThisMonth}>
          <View style={styles.ThisMonthWhiteBackGround}>
            <Text style={styles.thisMonthText}>This Month</Text>
            <View style={styles.RowDirection}>
              <Text style={styles.thisMonthAmount}>$657.5</Text>
              <Text style={styles.DifferenceInPercentage}>+5.3%</Text>
            </View>
          </View>
          <View style={styles.LastMonthView}>
            <Text style style={styles.LastMonthText}>
              Last Month
            </Text>
            <View style={styles.LastMonthStatsView}>
              <Text style={styles.LastMonthAmount}>$568</Text>
              <Text style={styles.lastMonthPercentage}>+2.3%</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginHorizontal: 10}}>
        <Graph />
      </View>

      <View style={styles.TotalMaterialAndTotalOrderView}>
        <Card style={styles.TotalMaterialCard}>
          <View style={styles.TotaliconandTextAndDotMenuView}>
            <View style={styles.IconAndTextView}>
              <TotalOrder />
              <Text style={styles.TotalMaterialText}>Total Material</Text>
            </View>
            <DotsMenu />
          </View>
        </Card>

        <Card style={styles.TotalMaterialCard}>
          <View style={styles.TotaliconandTextAndDotMenuView}>
            <View style={styles.IconAndTextView}>
              <TotalOrder />
              <Text style={styles.TotalMaterialText}>Total Order</Text>
            </View>
            <DotsMenu />
          </View>
          <View style={styles.OrderView}>
            <Text style={styles.TotalOrderText}>125</Text>
          </View>
        </Card>

        <Card style={styles.NewOrderCard}>
          <View style={styles.NewOrderView}>
            <Text style={styles.NewOrderText}>New Order</Text>
            <View style={styles.NoOfOrderView}>
              <Text style={{color: 'white'}}>3</Text>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Topbackground: {backgroundColor: '#37B9C5', height: 240},
  alignment: {alignItems: 'center', marginTop: '5%'},
  SalesGrowthText: {color: 'white', fontWeight: 'bold'},
  TopViewOfThisMonth: {
    flexDirection: 'row',
    backgroundColor: '#DAF6FF',
    height: 70,
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  ThisMonthWhiteBackGround: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    width: width / 2.5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  thisMonthText: {fontWeight: 'bold', color: 'black', marginVertical: 5},
  RowDirection: {flexDirection: 'row'},
  thisMonthAmount: {color: '#FFBA00', fontWeight: 'bold', marginLeft: 10},
  DifferenceInPercentage: {marginHorizontal: 10, color: '#37B9C5'},
  LastMonthView: {
    alignItems: 'center',
    width: width / 2,
    marginVertical: 10,
  },
  LastMonthText: {fontWeight: 'bold'},
  LastMonthStatsView: {flexDirection: 'row', marginVertical: 5},
  LastMonthAmount: {color: '#3479E1', fontWeight: 'bold'},
  lastMonthPercentage: {
    color: '#ECA335',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  TotalMaterialAndTotalOrderView: {
    flex: 1,
    backgroundColor: 'white',
  },
  TotalMaterialCard: {
    backgroundColor: '#F4F4F4',
    marginTop: 10,
    marginHorizontal: '3%',
    height: 60,
    padding: 10,
  },
  TotaliconandTextAndDotMenuView: {
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  IconAndTextView: {flexDirection: 'row'},
  TotalMaterialText: {
    color: '#37B9C5',
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 16,
  },
  OrderView: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 20,
  },

  NewOrderCard: {
    marginTop: 20,
    elevation: 5,
    marginHorizontal: '3%',
    height: 50,
    padding: 10,
    marginBottom: 10,
  },
  NewOrderText: {
    marginHorizontal: 20,
    color: '#37B9C5',
    fontWeight: 'bold',
    fontSize: 16,
  },
  NewOrderView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginBottom: 10,
  },
  NoOfOrderView: {
    borderRadius: 30,
    width: 30,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  NewOrderText: {color: 'white'},
  NewOrderText: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37B9C5',
  },
  TotalOrderText: {color: '#37B9C5', fontWeight: 'bold', fontSize: 16},
});

export default SaleReport;
