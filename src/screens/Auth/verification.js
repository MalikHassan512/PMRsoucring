import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const Verification = () => {
  const navigation = useNavigation();

  //input field count
  const CELL_COUNT = 4;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <>
      <View style={styles.pageTopSetting}>
        <Text style={styles.VerificationColor}>Verification</Text>
      </View>
      <View style={styles.topTextStyle}>
        <Text style={styles.textStyle}>
          Four Digit Code has Sent to your Phone Number
        </Text>
        <Text>xx-xxxxxxxx</Text>
      </View>

      <View style={{marginHorizontal: '10%'}}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('LoginSuccess');
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 18}}>Verify</Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.codeExpire}>Code expires in: 00:00</Text>
      </View>
      <TouchableOpacity style={{alignItems: 'center', marginTop: '3%'}}>
        <Text style={{color: '#FFC618'}}>Resend Verification Code</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  pageTopSetting: {alignItems: 'center', marginTop: 90},
  VerificationColor: {color: '#111111', fontSize: 24, fontWeight: 'bold'},
  textStyle: {color: '#090F47', fontWeight: '300'},
  topTextStyle: {marginHorizontal: '10%', marginTop: '3%'},

  buttonStyle: {
    marginTop: '10%',
    backgroundColor: '#37B9C5',
    alignItems: 'center',
    marginHorizontal: '10%',
    borderRadius: 40,
    height: 70,
    justifyContent: 'center',
  },
  codeExpire: {color: '#090F47', fontWeight: '300', marginTop: '10%'},

  TextInputInnerStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  //RN-Confirmation-code-field
  codeFieldRoot: {marginTop: 20},
  cell: {
    alignItems: 'center',
    width: 60,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    backgroundColor: '#E8E7E3',
    textAlign: 'center',
    color: '#090F47',
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 0.3,
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default Verification;
