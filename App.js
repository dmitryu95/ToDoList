import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from "./Navigate";

const App = () => {
  return (
    <NavigationContainer> 
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default App;


