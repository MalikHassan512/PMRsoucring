import React, {useState, useEffect} from 'react';
import Splash from './src/screens/Auth/splashScreen';
import AppNavigator from './src/navigation/AppNavigator';
import AllMaterials from './src/screens/AllMaterials';
import VendorHome from './src/screens/VendorHome';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

// // to remove reanimated 2 warning
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import SplashScreen from './src/screens/Auth/splashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return clearTimeout();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {loading ? <Splash /> : <AppNavigator />}
      </PersistGate>
    </Provider>
  );
};
export default App;
