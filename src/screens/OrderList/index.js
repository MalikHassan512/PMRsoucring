import React, {useState} from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

//Components
import CompleteOrderCard from './components/CompletedOrderCard';
import NewOrdersListCard from './components/NewOrdersListCard';

const FirstRoute = () => (
  <View>
    <CompleteOrderCard />
  </View>
);

const SecondRoute = () => (
  <>
    <View>
      <NewOrdersListCard />
    </View>
  </>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function OrderList() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Completed Orders'},
    {key: 'second', title: 'New Orders'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: '#faf9f5'}}
          indicatorStyle={{backgroundColor: '#37B9C5'}}
          labelStyle={{color: '#37B9C5'}}
        />
      )}
    />
  );
}
