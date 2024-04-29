// components/TestNotificationButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TestNotificationButton = () => {
  const handleTestNotification = async () => {
    try {
      const response = await fetch(
        'https://www.tighaline.ma/product-detail/testing'
      );
      if (response.ok) {
        alert('Commande de test envoyée avec succès');
      } else {
        alert('Erreur lors de l envoi de la commande de test');
      }
    } catch (error) {
      console.error('Error sending test order:', error);
      alert('Erreur lors de l envoi de la commande de test');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleTestNotification}>
      <Text style={styles.buttonText}>Test Notification</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ce6428',
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TestNotificationButton;