import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VendorHomeScreen from '../../../../src/screens/VendorHome/index';
import SaleReport from '../../../screens/SaleReport';
import MaterialListing from '../../../screens/MaterialListing';
import MaterialDetail from '../../../screens/MaterialDetail';
import ChatDetails from '../../../screens/Chat/ChatDetails';
import EditVendorProfile from '../../../screens/Profile/VendorProfile/EditVendorProfile/index';
import AddNewMaterial from '../../../screens/AddNewMaterial';
import EditMaterialDetail from '../../../screens/MaterialDetail/EditMaterialDetail/index';
import OrderList from '../../../screens/OrderList/index';
import CompletedOrderDetails from '../../../screens/OrderDetails/CompletedOrderDetails';
import PendingOrderDetails from '../../../screens/OrderDetails/PendingOrderDetails';

const Stack = createNativeStackNavigator();

const VendorHomeStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator>
      <Screen
        name="VendorHomeScreen"
        component={VendorHomeScreen}
        options={{headerShown: false}}
      />

      <Screen
        name="SaleReport"
        component={SaleReport}
        options={{title: 'Sale Report'}}
      />

      <Screen
        name="MaterialListing"
        component={MaterialListing}
        options={{title: 'Material Listing'}}
      />

      <Screen
        name="MaterialDetail"
        component={MaterialDetail}
        options={{title: 'Material Detail'}}
      />

      <Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{title: 'Person Name', headerTitleAlign: 'center'}}
      />

      <Screen
        name="EditVendorProfile"
        component={EditVendorProfile}
        options={{title: 'Edit Info', headerTitleAlign: 'center'}}
      />

      <Screen
        name="AddNewMaterial"
        component={AddNewMaterial}
        options={{headerShown: false}}
      />

      <Screen
        name="EditMaterialDetail"
        component={EditMaterialDetail}
        options={{headerShown: false}}
      />

      <Screen
        name="OrderList"
        component={OrderList}
        options={{headerShown: true, title: 'All Orders'}}
      />

      <Screen
        name="CompletedOrderDetails"
        component={CompletedOrderDetails}
        options={{headerShown: true, title: 'Order Detail'}}
      />

      <Screen
        name="PendingOrderDetails"
        component={PendingOrderDetails}
        options={{headerShown: true, title: 'Order Detail'}}
      />
    </Navigator>
  );
};

export default VendorHomeStack;
