import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MapPinIcon} from 'react-native-heroicons/outline';
import CartLogo from '../assets/icons/cart.svg';
import EmptyOrders from '../assets/icons/no-orders.svg';

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Orders</Text>
        <View style={styles.iconContainer}>
          <View style={styles.headerIcons}>
            <MapPinIcon size={24} />
          </View>
          <View style={styles.headerIcons}>
            <CartLogo height={24} width={24} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.emptyIllustration}>
          <EmptyOrders width={159} height={159} />
          <Text style={styles.emptyText}>
            You haven't placed any orders yet. Let's change that—start exploring
            now!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  headerIcons: {
    height: 40,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyIllustration: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
  },
  emptyText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 17.7,
    width: 291,
  },
});
