import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

//import SVGs
import AddNewMaterialPlaceHolder from '../../../assets/AddNewMaterialPlaceHolder';

const {height, width} = Dimensions.get('window');

const AddNewMaterial = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <ScrollView>
      <View style={styles.AddNewMaterialPlaceHolderView}>
        <AddNewMaterialPlaceHolder />
      </View>

      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Material's Name</Text>
        <View style={styles.TextInputView}>
          <TextInput
            placeholder="Name of the material"
            style={{marginLeft: '4%'}}
          />
        </View>
      </View>

      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Price</Text>
        <View style={styles.TextInputView}>
          <TextInput
            placeholder="Price of the material"
            style={{marginLeft: '4%'}}
          />
        </View>
      </View>

      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Min. Order limit</Text>
        <View style={styles.TextInputViewwithDownArrow}>
          <Picker
            style={{width: 350, height: 40}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="3" value="3" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="7" value="7" />
          </Picker>
        </View>
        {/* <Text style={styles.TitleText}>Min. Order</Text>
        <View style={styles.TextInputViewwithDownArrow}>
          <TextInput
            placeholder="Choose min oder limit"
            style={{marginLeft: '4%'}}
          />
          <TouchableOpacity>
            <DownArrow />
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Available Quantity</Text>
        <View style={styles.TextInputView}>
          <TextInput
            placeholder="Price of the material"
            style={{marginLeft: '4%'}}
          />
        </View>
      </View>

      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Material Description</Text>
        <View style={styles.TextInputView2}>
          <TextInput
            multiline={true}
            placeholder="Description about material"
            style={{marginLeft: '4%'}}
          />
        </View>
      </View>

      <View style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Save</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TextInputView2: {
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 10,
    marginTop: 8,
    height: 150,
  },
  AddNewMaterialPlaceHolderView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 150,
  },
  TitleView: {marginTop: '5%', marginHorizontal: '5%'},
  TitleText: {color: 'black', fontWeight: 'bold', marginLeft: '5%'},
  TextInputView: {
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 10,
    marginTop: 8,
  },

  TextInputViewwithDownArrow: {
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 10,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#37B9C5',
    marginHorizontal: '5%',
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: 'white'},
});

export default AddNewMaterial;
