import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Image } from 'react-native';

const LoginScreen = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    handleLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logoTighaline.jpg')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        placeholderTextColor="#011c40"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#011c40"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Se connecter"
        onPress={onLogin}
        color="#011c40"
        accessibilityLabel="Se connecter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#011c40',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#011c40',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    resizeMode: 'contain',
    borderRadius: 60
  },
});

export default LoginScreen;