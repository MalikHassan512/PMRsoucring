import React from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import PersonImage from '../../../../assets/chatPersonPic';
//import SVGs
import AttachFileIcon from '../../../../assets/AttachFilesIcon';
import Emoji from '../../../../assets/Emoji';
import SendMsg from '../../../../assets/SendMsg';

const {height, width} = Dimensions.get('window');

const ChatDetails = () => {
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.TopView}>
          <PersonImage height={30} />
          <View style={styles.MsgTextView}>
            <Text style={styles.FirstMsgText}>Looking for Something? </Text>
          </View>
        </View>
        <View style={styles.FirstMsgTime}>
          <Text>12:10 Pm</Text>
        </View>

        <View style={styles.SecondMsgView}>
          <Text style={styles.SecondMsgText}>Do u have Sodium?</Text>
          <Text style={styles.SecondMsgTime}>13:21 Pm</Text>
        </View>

        <View style={styles.MsgOutterView}>
          <View style={styles.ThreeComponentView}>
            <AttachFileIcon />
            <View style={styles.TextInputAndEmojiView}>
              <TextInput
                placeholder="Message"
                backgroundColor={'#F0F3F6'}
                width={280}
                height={40}
                style={styles.TextIputStyle}
              />
              <Emoji style={styles.EmojiStyle} />
            </View>
            <SendMsg style={{marginLeft: 10}} height={40} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  TopView: {
    marginVertical: '3%',
    flexDirection: 'row',
  },
  MsgTextView: {
    backgroundColor: '#37B9C5',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    width: width / 2,
  },
  FirstMsgTime: {marginHorizontal: '15%'},
  SecondMsgView: {
    alignItems: 'flex-end',
    marginHorizontal: '5%',
    height: 40,
  },
  FirstMsgText: {color: 'white'},
  SecondMsgText: {
    backgroundColor: '#CBDFE1',
    height: 40,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  SecondMsgTime: {marginTop: '2%'},
  MsgOutterView: {
    borderTopWidth: 0.2,
    paddingTop: 10,
    bottom: 0,
    position: 'absolute',
    borderColor: 'grey',
    width: width,
  },
  ThreeComponentView: {
    marginBottom: '2%',
    marginHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextInputAndEmojiView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
  },
  TextIputStyle: {
    borderRadius: 30,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  EmojiStyle: {marginLeft: -25},
});

export default ChatDetails;
