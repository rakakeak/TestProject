import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size={'large'} color={'#FF5000'} />
    </View>
  );
};

export default Loading;
