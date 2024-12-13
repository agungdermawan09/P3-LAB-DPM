import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderProfile = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Profile Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default HeaderProfile;