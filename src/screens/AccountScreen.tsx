import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account Screen</Text>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
