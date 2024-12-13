import React from 'react';
import { SafeAreaView } from 'react-native';
import HeaderProfile from './src/componetns/header';
import NavbarProfile from './src/componetns/nabvar';
import Profile from './src/componetns/profile';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderProfile />
      <NavbarProfile />
      <Profile />
    </SafeAreaView>
  );
};

export default App;