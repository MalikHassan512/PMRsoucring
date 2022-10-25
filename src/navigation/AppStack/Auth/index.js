import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccount from '../../../screens/Auth/createAccount';
import Login from '../../../screens/Auth/login';
import LoginSuccess from '../../../screens/Auth/loginSuccess';
import Verification from '../../../screens/Auth/verification';
import Walkthrough from '../../../screens/Auth/walkthrough';
import Welcome from '../../../screens/Auth/welcome';
import Home from '../../../screens/Home/index';
import AllMaterials from '../../../screens/AllMaterials/index';
// import ProductDetail from '../../../ProductDetail/index';
import VendorHome from '../../../screens/VendorHome';
import AllVendor from '../../../screens/AllVendors';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        component={Walkthrough}
        name="Walkthrough"
        options={{headerShown: false}}
      />
      <Screen
        component={Welcome}
        name="Welcome"
        options={{headerShown: false}}
      />
      <Screen component={Login} name="Login" options={{headerShown: false}} />
      <Screen
        component={Verification}
        name="Verification"
        options={{headerShown: false}}
      />
      <Screen
        component={LoginSuccess}
        name="LoginSuccess"
        options={{headerShown: false}}
      />
      <Screen
        component={CreateAccount}
        name="CreateAccount"
        options={{headerShown: false}}
      />

      <Screen component={Home} name="Home" options={{headerShown: false}} />

      <Screen
        component={VendorHome}
        name="VendorHome"
        options={{headerShown: false}}
      />

      <Screen
        component={AllMaterials}
        name="AllMaterials"
        options={{headerShown: true}}
      />
    </Navigator>
  );
};

export default AuthStack;
