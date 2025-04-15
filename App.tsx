import NavigationRouter from '@/navigations';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
