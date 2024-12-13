import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pastikan Anda menginstal expo vector icons

const NavbarProfile = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home-outline" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="settings-outline" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="log-out-outline" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#e0f7fa', // Warna latar belakang yang lebih menarik
    borderTopWidth: 1,
    borderTopColor: '#b2ebf2',
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff', // Warna latar belakang item
    elevation: 2, // Bayangan untuk efek kedalaman
  },
  navText: {
    fontSize: 16,
    color: '#4CAF50', // Warna teks
  },
});

export default NavbarProfile;