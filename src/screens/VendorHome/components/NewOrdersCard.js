import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const NewOrdersCard = () => {
  return (
    <Card style={styles.cardStyle}>
      <TouchableOpacity>
        <View style={styles.OverallView}>
          <Text style={styles.newOrderText}>New Orders</Text>

          <View style={styles.noOfMsgView}>
            <Text style={styles.noOfMsgText}>5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: '3%',
    height: 40,
    marginVertical: 10,
  },
  OverallView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
  },
  newOrderText: {
    color: '#37B9C5',
    fontWeight: 'bold',
    fontSize: 18,
  },
  noOfMsgView: {
    backgroundColor: 'red',
    width: width / 9,
    alignItems: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
  },
  noOfMsgText: {color: 'white'},
});

export default NewOrdersCard;
