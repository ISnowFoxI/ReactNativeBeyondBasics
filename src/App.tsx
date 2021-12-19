import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabsNavigator } from './screens/BottomTabsNavigator';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
