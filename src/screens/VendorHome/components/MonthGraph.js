import React from 'react';

import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

const MonthGraph = () => {
  return (
    <>
      <LineChart
        data={{
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              data: [
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          //   color: (opacity = 1) => `rgba(96, 184, 98, ${opacity})`,
          color: (opacity = 1) => `rgba(71, 109, 250, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            // stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

export default MonthGraph;
