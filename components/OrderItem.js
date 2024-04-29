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
        <Text style={styles.orderId}>Commande N° {order.id} :</Text>
        <Text style={styles.orderDate}>
                  Date : {new Date(order.created_at).toLocaleString()}
                </Text>
                <Text style={styles.orderType}>
                          Type : {order.type}
                        </Text>
        <Text style={styles.orderTotal}>
          Total : {order.totalAmount} DH
        </Text>


      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 3,
    borderRadius: 8,
    marginHorizontal:5
  },
  readOrder: {
    backgroundColor: '#d4edda',
  },
  unreadOrder: {
    backgroundColor: '#fff3cd',
  },
  orderId: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderDate: {
  },
});

export default OrderItem;