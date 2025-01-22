import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Screen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
