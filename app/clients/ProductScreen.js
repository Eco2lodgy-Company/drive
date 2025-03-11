import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const ProductScreen = () => {
  const { productId } = useLocalSearchParams();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

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

  const product = products.find(item => item.id === productId);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <LinearGradient
        colors={['#4C68D7', '#8E54E9']}
        style={styles.appBar}
      >
        <Text style={styles.appName}>Drive.re</Text>
        <TouchableOpacity>
          <Icon name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Contenu principal */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image avec ombre */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
        </View>

        {/* Détails du produit */}
        <Animated.View style={[styles.detailsContainer, { opacity: fadeAnim }]}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.shopRatingContainer}>
            <Text style={styles.productShop}>{product.shop}</Text>
            <View style={styles.ratingBadge}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
          
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          
          <View style={styles.descriptionCard}>
            <Text style={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          {/* Bouton avec effet hover */}
          <TouchableOpacity 
            style={styles.addToCartButton}
            activeOpacity={0.8}
            onPress={handleAddToCart}
          >
            <LinearGradient
              colors={['#FF6B6B', '#FF8E53']}
              style={styles.buttonGradient}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
              <Icon name="shopping-cart" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>

      {/* Bottom Navigation améliorée */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'home', label: 'Home' },
          { icon: 'search', label: 'Search' },
          { icon: 'shopping-cart', label: 'Cart' },
          { icon: 'user', label: 'Profile' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Icon name={item.icon} size={24} color="#4C68D7" />
            <Text style={styles.navText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 40,
    elevation: 4,
  },
  appName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'sans-serif-medium',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 350,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 8,
  },
  shopRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productShop: {
    fontSize: 16,
    color: '#636E72',
    marginRight: 10,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    marginLeft: 4,
    color: '#DD6B20',
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF6B6B',
    marginBottom: 15,
  },
  descriptionCard: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 15,
    color: '#2D3436',
    lineHeight: 22,
  },
  addToCartButton: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navText: {
    fontSize: 12,
    color: '#4C68D7',
    marginTop: 4,
  },
});

export default ProductScreen;