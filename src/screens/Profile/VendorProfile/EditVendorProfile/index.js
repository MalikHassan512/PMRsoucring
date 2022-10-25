import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

//import SVGs
import ProfilePic from '../../../../../assets/ProfilePic';

const EditVendorProfile = () => {
  return (
    <ScrollView>
      <View style={styles.TopView}>
        <ProfilePic />
        <Text style={styles.NameText}>Rick Jones</Text>
        <Text style={styles.CoText}>vendorname@gmail.com</Text>
      </View>

      <View style={styles.PhoneNoAndCardView}>
        <Text style={styles.PhoneNoText}>Phone Number</Text>
        <View style={styles.InfoFieldView}>
          {/* <Text style={styles.infoFieldText}>+92-5078601</Text> */}
          <TextInput
            style={{marginLeft: 7}}
            placeholder="Enter Your Phone Number"
          />
        </View>
      </View>

      <View style={styles.PhoneNoAndCardView}>
        <Text style={styles.PhoneNoText}>Comapny Name</Text>
        <View style={styles.InfoFieldView}>
          <TextInput
            style={{marginLeft: 7}}
            placeholder="Enter Your Company Name"
          />
        </View>
      </View>

      <View style={styles.PhoneNoAndCardView}>
        <Text style={styles.PhoneNoText}>Address</Text>
        <View style={styles.InfoFieldView}>
          <TextInput
            style={{marginLeft: 7}}
            placeholder="Enter Your Company Address"
          />
        </View>
      </View>

      <View style={styles.PhoneNoAndCardView}>
        <Text style={styles.PhoneNoText}>Company Bio</Text>
        <View style={styles.InfoFieldWithDescriptionView}>
          <TextInput
            style={{marginLeft: 7}}
            placeholder="Description about your Company"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.ButtonView}>
        <Text style={styles.ButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TopView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 150,
  },
  NameText: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  CoText: {color: '#ADB3BC'},
  PhoneNoAndCardView: {marginHorizontal: '5%', marginTop: '5%'},
  PhoneNoText: {color: 'black', marginBottom: 5, marginLeft: 10},
  CardText: {height: 40, justifyContent: 'center', padding: 6},
  CardText: {fontSize: 16, color: 'black', fontWeight: 'bold'},
  ButtonView: {
    backgroundColor: '#37B9C5',
    marginTop: 20,
    marginHorizontal: '5%',
    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {color: 'white'},
  InfoFieldView: {
    borderColor: 'grey',
    borderWidth: 0.3,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  infoFieldText: {color: 'black', fontWeight: 'bold', marginLeft: 10},

  InfoFieldWithDescriptionView: {
    borderColor: 'grey',
    borderWidth: 0.3,
    height: 70,
    padding: 5,
    // justifyContent: 'center',
    borderRadius: 10,
  },
});

export default EditVendorProfile;
