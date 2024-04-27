// screens/MainScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import TestNotificationButton from '../components/TestNotificationButton'; // Importation du composant
import LogoutButton from '../components/LogoutButton';

const MainScreen = ({ username, password, handleLogout }) => {
  const [orders, setOrders] = useState([]);
  const [unreadOrdersCount, setUnreadOrdersCount] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://tighaline.ma/api/orders');
      const data = await response.json();
      setOrders(data);
      const unreadCount = data.filter((order) => !order.read).length;
      setUnreadOrdersCount(unreadCount);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const markOrderAsRead = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, read: true } : order
      )
    );
    setUnreadOrdersCount((prevCount) => prevCount - 1);
  };

  return (
    <View style={styles.container}>
          <Header unreadOrdersCount={unreadOrdersCount} handleLogout={handleLogout}/>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <OrderItem order={item} markOrderAsRead={markOrderAsRead} />
            )}
          />
          <TestNotificationButton />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;