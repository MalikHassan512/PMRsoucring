import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

//import SVGs
import MaterialImage from '../../../../assets/MaterialDetailTopImage';
import EditMaterialPic from '../../../../assets/EditMaterialPic';

const EditMaterialDetail = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView>
      <View style={styles.TopImageView}>
        <EditMaterialPic />
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Material's Name</Text>
        <View style={styles.TextInputView}>
          <TextInput
            placeholder="Enter material name"
            style={{marginLeft: 15}}
          />
        </View>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Price</Text>
        <View style={styles.TextInputView}>
          <TextInput
            placeholder="Enter material price"
            style={{marginLeft: 15}}
          />
        </View>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Min. Order</Text>
        <View style={styles.TextInputView}>
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
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Available Quantity</Text>
        <View style={styles.TextInputView}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Enter material available quantity"
            style={{marginLeft: 15}}
          />
        </View>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Vendor/Owner</Text>
        <View style={styles.TextInputView}>
          <TextInput
            placeholder="Enter Vendor/Owner Name"
            style={{marginLeft: 15}}
          />
        </View>
      </View>

      <View style={styles.MateialNameAndCardView}>
        <Text style={styles.MaterialName}>Description</Text>
        <View style={styles.TextInputWithDescriptionView}>
          <TextInput
            placeholder="Description about material"
            style={{marginLeft: 15}}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopImageView: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 'auto',
  },
  MateialNameAndCardView: {marginHorizontal: 20, marginTop: 20},
  MaterialName: {marginHorizontal: '5%', color: 'black'},
  CardStyle: {marginTop: 5},
  Cardtext: {
    marginHorizontal: '5%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  DescriptionText: {padding: 10},
  buttonStyle: {
    backgroundColor: '#37B9C5',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 40,
  },
  buttonText: {color: 'white'},
  TextInputView: {
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
  },

  TextInputWithDescriptionView: {
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 10,
    // justifyContent: 'center',
    height: 100,
  },
});

export default EditMaterialDetail;
