// App.js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import { notificationService } from './NotificationService';

const App = () => {
   useEffect(() => {
       notificationService.configure();
       notificationService.configureBackgroundTask();

       return () => {
         notificationService.unregister();
       };
     }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (usernameInput, passwordInput) => {
    if (usernameInput === 'TighalineAdmin' && passwordInput === '123456789') {
      setIsLoggedIn(true);
      setUsername(usernameInput);
      setPassword(passwordInput);
    } else {
      alert('Nom utilisateur ou mot de passe incorrect');
    }
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername('');
      setPassword('');
    };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <MainScreen username={username} password={password} handleLogout={handleLogout} />
      ) : (
        <LoginScreen handleLogin={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;