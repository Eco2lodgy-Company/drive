// BottomNavigation.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

const BottomNavigation = () => {
  const router = useRouter();

  const navItems = [
    { icon: 'home', text: 'Home', path: '/clients/home' },
    { icon: 'search', text: 'Search', path: '/clients/shops' },
    { icon: 'shopping-cart', text: 'Cart', path: '/clients/cart' },
    { icon: 'user', text: 'Profile', path: '/clients/profile' },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <TouchableOpacity 
          key={item.text}
          style={styles.navItem} 
          onPress={() => router.push(item.path)}
        >
          <Icon name={item.icon} size={24} color="#38A169" />
          <Text style={styles.navText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#38A169',
    marginTop: 2,
  },
});

export default BottomNavigation;