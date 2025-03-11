// HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';
const HomeScreen = () => {
  const [numColumns, setNumColumns] = useState(2);
  const router = useRouter();
  const products = [
    { id: '1', name: 'T-Shirt Black', price: 29.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Jeans Blue', price: 59.99, shop: 'Fashion Hub', image: 'https://plus.unsplash.com/premium_photo-1667049290968-d0e2b9c36e01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Sneakers White', price: 89.99, shop: 'Trendy Wear', image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Jacket Leather', price: 129.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '5', name: 'Cap Gray', price: 19.99, shop: 'Street Style', image: 'https://images.unsplash.com/photo-1606115757624-6b9bfe9fa5e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww' },
    { id: '6', name: 'Hoodie Red', price: 49.99, shop: 'Fashion Hub', image: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '7', name: 'T-Shirt Black', price: 29.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '8', name: 'Jeans Blue', price: 59.99, shop: 'Fashion Hub', image: 'https://plus.unsplash.com/premium_photo-1667049290968-d0e2b9c36e01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '9', name: 'Sneakers White', price: 89.99, shop: 'Trendy Wear', image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '10', name: 'Jacket Leather', price: 129.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '11', name: 'T-Shirt Black', price: 29.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '12', name: 'Jeans Blue', price: 59.99, shop: 'Fashion Hub', image: 'https://plus.unsplash.com/premium_photo-1667049290968-d0e2b9c36e01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '13', name: 'Sneakers White', price: 89.99, shop: 'Trendy Wear', image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '14', name: 'Jacket Leather', price: 129.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '15', name: 'Jacket Leather', price: 129.99, shop: 'Noor Boutique', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  ];

  const categories = [
    { id: '1', name: 'Clothing' },
    { id: '2', name: 'Shoes' },
    { id: '3', name: 'Accessories' },
    { id: '4', name: 'Bags' },
    { id: '5', name: 'Jewelry' },
  ];

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      setNumColumns(screenWidth > 768 ? 5 : 2);
    };
    updateLayout();
    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => subscription?.remove();
  }, []);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  const renderProductCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push('/clients/ProductScreen?productId=' + item.id)}

    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardShop}>{item.shop}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
            <Icon name="plus" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar with "Shop by Noor" */}
      <View style={styles.appBar}>
        <Text style={styles.appName}>Drive.re</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="bell" size={24} color="#DD6B20" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#38A169" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#718096"
        />
      </View>

      {/* Categories Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryContent}
      >
        {categories.map((category) => (
          <View key={category.id}>{renderCategoryCard({ item: category })}</View>
        ))}
      </ScrollView>

      {/* Products Grid */}
      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/clients/home')}>
        <Icon name="home" size={24} color="#38A169" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/clients/search')}>
        <Icon name="search" size={24} color="#38A169" />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/clients/cart')}>
        <Icon name="shopping-cart" size={24} color="#38A169" />
        <Text style={styles.navText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/clients/profile')}>
        <Icon name="user" size={24} color="#38A169" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC', // Blanc cassé
  },
  // App Bar Styles
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748', // Gris sombre pour contraste
  },
  notificationButton: {
    padding: 10,
  },
  // Search Bar Styles
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
    paddingVertical: 8,
  },
  // Category Carousel Styles
  categoryContainer: {
    paddingVertical: 10,
  },
  categoryContent: {
    paddingHorizontal: 15,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginRight: 10,
    minWidth: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#38A169', // Vert pour les bordures
  },
  categoryText: {
    fontSize: 14,
    color: '#38A169', // Vert pour le texte
    fontWeight: '500',
  },
  // Product Card Styles
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 80,
 
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: Dimensions.get('window').width > 768 ? '18%' : '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    margin: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 3,
  },
  cardShop: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 14,
    color: '#DD6B20', // Orange pour le prix
    fontWeight: '500',
  },
  addToCartButton: {
    backgroundColor: '#38A169', // Vert
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Bottom Navigation Styles
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#38A169', // Vert
    marginTop: 2,
  },
});

export default HomeScreen;