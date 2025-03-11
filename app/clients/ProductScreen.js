import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';


const ProductScreen = ({  }) => {
  const { productId } = useLocalSearchParams(); 
  console.log('Product ID:', productId); 
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

  // Récupération du produit basé sur l'ID
  const product = products.find(item => item.id === productId);

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // Ajoutez ici votre logique pour ajouter au panier
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appName}>Shop by Noor</Text>
      </View>

      {/* Contenu défilant */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image du produit */}
        <Image source={{ uri: product.image }} style={styles.productImage} />

        {/* Détails du produit */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productShop}>{product.shop}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          {/* Description à ajouter si nécessaire */}
          <Text style={styles.productDescription}>Description</Text>

          {/* Bouton Ajouter au panier */}
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
            <Icon name="shopping-cart" size={20} color="#fff" style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#38A169" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="search" size={24} color="#38A169" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={24} color="#38A169" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
  appBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748', // Gris sombre
  },
  scrollContent: {
    paddingBottom: 80, // Espace pour la barre de navigation
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 5,
  },
  productShop: {
    fontSize: 16,
    color: '#718096', // Gris clair
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#DD6B20', // Orange
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    color: '#2D3748',
    lineHeight: 24,
    marginBottom: 20,
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#38A169', // Vert
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  cartIcon: {
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#38A169',
  },
});

export default ProductScreen;
