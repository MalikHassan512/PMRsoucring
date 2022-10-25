import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Searchbar} from 'react-native-paper';
import SearchBarIcon from '../../../../assets/searchBarIcon';
import PersonImage from '../../../../assets/chatPersonPic';

import {useNavigation} from '@react-navigation/core';

const AllChats = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.searchBarView}>
        <Searchbar
          placeholder="Search Chat"
          placeholderTextColor={'#ADB3BC'}
          icon={() => <SearchBarIcon />}
          style={{borderRadius: 40}}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChatDetails')}
        style={styles.chatOutterView}>
        <PersonImage />
        <View style={styles.NameAndMsgView}>
          <Text style={styles.NameText}>Ellie David</Text>
          <Text style={styles.Msgtext}>Hey, are you there?</Text>
        </View>
        <View style={styles.MsgTimeView}>
          <Text>8:30pm</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.chatOutterView}>
        <PersonImage />
        <View style={styles.NameAndMsgView}>
          <Text style={styles.NameText}>Ellie David</Text>
          <Text style={styles.Msgtext}>Hey, are you there?</Text>
        </View>
        <View style={styles.MsgTimeView}>
          <Text>8:30pm</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  searchBarView: {marginHorizontal: '5%'},
  chatOutterView: {
    marginHorizontal: '5%',
    marginVertical: '3%',
    flexDirection: 'row',
  },
  NameAndMsgView: {marginHorizontal: '5%', marginTop: '2%'},
  NameText: {fontWeight: 'bold', color: 'black', fontSize: 16},
  Msgtext: {fontSize: 13},
  MsgTimeView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default AllChats;
