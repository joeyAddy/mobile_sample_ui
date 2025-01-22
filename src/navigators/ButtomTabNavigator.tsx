import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/OrdersScreen';
import OrdersScreen from '../screens/HomeScreen';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  HomeIcon,
  GiftIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import RewardsScreen from '../screens/RewardsScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

// Define icons for each route
const icons: Record<string, React.ElementType> = {
  Home: HomeIcon,
  Rewards: GiftIcon,
  Search: MagnifyingGlassIcon,
  Orders: ShoppingBagIcon,
  Account: UserIcon,
};

const CustomTabBar = (props: any) => {
  return (
    <View style={styles.tabBarContainer}>
      {props.state.routes.map((route: any, index: number) => {
        const isFocused = props.state.index === index;
        const IconComponent = icons[route.name];

        const handlePress = () => {
          if (!isFocused) {
            props.navigation.navigate(route.name);
            console.log(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButtonContainer}
            onPress={handlePress}
            activeOpacity={0.8}>
            <IconComponent size={28} color={isFocused ? '#1DC462' : '#000'} />
            <Text style={[styles.label, isFocused && styles.activeLabel]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* Home indicator */}
      <View style={styles.homeIndicator} />
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {display: 'none'},
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 5,
    width: '100%',
    height: 99,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#D0D5DD',
  },
  tabButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
  },
  activeLabel: {
    color: '#4CAF50',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    width: 100,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
