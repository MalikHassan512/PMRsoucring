import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../../src/screens/Home/index';

//import Screens
import AllMaterials from '../../../screens/AllMaterials';
import ProductDetail from '../../../screens/ProductDetail/index';
import VendorDetail from '../../../screens/VendorDetail';
import AllVendor from '../../../screens/AllVendors';
import AddToCart from '../../../screens/Cart/AddToCart/Index';
import ChatDetails from '../../../screens/Chat/ChatDetails';
import PharmaProfile from '../../../screens/Profile/PharmaProfile/index';

const Stack = createNativeStackNavigator();

const PharmaHomeStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{headerShown: false}} />

      <Screen
        name="AllMaterials"
        component={AllMaterials}
        options={{headerShown: false}}
      />
      <Screen
        component={ProductDetail}
        name="ProductDetail"
        options={{headerShown: true, title: 'Product detail'}}
      />

      <Screen
        component={VendorDetail}
        name="VendorDetail"
        options={{headerShown: true, title: 'Vendor Details'}}
      />

      <Screen
        component={AllVendor}
        name="AllVendor"
        options={{headerShown: true}}
      />
      <Screen
        component={AddToCart}
        name="AddToCart"
        options={{headerShown: true, title: 'My Cart'}}
      />

      <Screen
        component={ChatDetails}
        name="ChatDetails"
        options={{
          headerShown: true,
          title: 'Person name ',
          headerTitleAlign: 'center',
        }}
      />

      <Screen
        component={PharmaProfile}
        name="PharmaProfile"
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default PharmaHomeStack;
