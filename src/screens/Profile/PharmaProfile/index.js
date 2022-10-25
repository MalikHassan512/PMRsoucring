import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

//import SVGs
import ProfilePic from '../../../../assets/ProfilePic';

const PharmaProfile = () => {
  return (
    <>
      <View style={styles.TopView}>
        <ProfilePic />
        <Text style={styles.NameText}>Rick Jones</Text>
        <Text style={styles.CoText}>Pharma Company</Text>
      </View>

      <View style={styles.PhoneNoAndCardView}>
        <Text style={styles.PhoneNoText}>Phone Number</Text>
        <Card style={styles.CardText}>
          <Text style={styles.CardText}>+92 332 8596749</Text>
        </Card>
      </View>

      <TouchableOpacity style={styles.ButtonView}>
        <Text style={styles.ButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  TopView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 300,
  },
  NameText: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  CoText: {color: '#ADB3BC'},
  PhoneNoAndCardView: {marginHorizontal: '5%', marginTop: '10%'},
  PhoneNoText: {color: '#999999', marginBottom: 5},
  CardText: {height: 40, justifyContent: 'center', padding: 6},
  CardText: {fontSize: 16, color: 'black', fontWeight: 'bold'},
  ButtonView: {
    backgroundColor: '#37B9C5',
    marginTop: 50,
    marginHorizontal: '5%',
    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {color: 'white'},
});

export default PharmaProfile;
