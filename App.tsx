import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtomTabNavigator from './src/navigators/ButtomTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Define the navigation stack types
export type RootStackParamList = {
  Main: undefined;
  ButtonTabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Main"
            options={{
              animation: 'slide_from_bottom',
            }}
            component={ButtomTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
