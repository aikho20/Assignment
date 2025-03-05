
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FigureProvider } from './context/FigureContext';
import FigureList from './screens/FigureList';
import AddFigure from './screens/AddFigure';
import EditFigure from './screens/EditFigure';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FigureProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FigureList">
          <Stack.Screen name="FigureList" component={FigureList} />
          <Stack.Screen name="AddFigure" component={AddFigure} />
          <Stack.Screen name="EditFigure" component={EditFigure} />
        </Stack.Navigator>
      </NavigationContainer>
    </FigureProvider>
  );
};

export default App;
