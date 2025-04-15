import NavigationRouter from '@/navigations';
import {navigationRef} from '@/navigations/function';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <NavigationRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
