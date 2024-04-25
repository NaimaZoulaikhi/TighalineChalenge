// components/Header.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ unreadOrdersCount }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Tighaline Orders</Text>
    <View style={styles.notificationContainer}>
      <Icon name="notifications" size={24} color="#fff" />
      {unreadOrdersCount > 0 && (
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>{unreadOrdersCount}</Text>
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#011c40',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    backgroundColor: '#ce6428',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 4,
  },
  notificationText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;