import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavbarProfile = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navItem}>Home</Text>
      <Text style={styles.navItem}>Settings</Text>
      <Text style={styles.navItem}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  navItem: {
    fontSize: 16,
  },
});

export default NavbarProfile;