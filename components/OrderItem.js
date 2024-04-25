// components/OrderItem.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const OrderItem = ({ order, markOrderAsRead }) => {
  const handlePress = () => {
    markOrderAsRead(order.id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        order.read ? styles.readOrder : styles.unreadOrder,
      ]}
      onPress={handlePress}
    >
      <View style={styles.details}>
        <Text style={styles.orderId}>Commande #{order.id}</Text>
        <Text style={styles.orderStatus}>
          Statut : {order.status}
        </Text>
        <Text style={styles.orderDate}>
          Date : {new Date(order.date).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  readOrder: {
    backgroundColor: '#d4edda',
  },
  unreadOrder: {
    backgroundColor: '#fff3cd',
  },
  details: {
  },
  orderId: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderStatus: {
  },
  orderDate: {
  },
});

export default OrderItem;