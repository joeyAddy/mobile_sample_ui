import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const RewardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rewards Screen</Text>
    </SafeAreaView>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
