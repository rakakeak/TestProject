import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransactionList, TransactionDetail} from '@/screens';

const Stack = createNativeStackNavigator();

const NavigationRouter = () => {
  return (
    <Stack.Navigator initialRouteName="TransactionList">
      <Stack.Screen
        name="TransactionList"
        component={TransactionList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailTransaction"
        component={TransactionDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NavigationRouter;
