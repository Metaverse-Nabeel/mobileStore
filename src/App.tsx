import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Trending Products"
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Products Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
