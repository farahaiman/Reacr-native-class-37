import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Camera from '../screens/Camera';
import  Picker from '../screens/Image-piker';




const Stack = createStackNavigator();

function Appnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Picker" component={Picker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Appnavigation;