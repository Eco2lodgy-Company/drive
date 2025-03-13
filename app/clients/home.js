import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  FlatList, 
  TouchableOpacity, 
  SafeAreaView, 
  TextInput, 
  useWindowDimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

// Données d'exemple
const initialProducts = [
  { id: '1', name: 'T-Shirt Black', price: 29.99, shop: 'Noor Boutique', category: 'Clothing', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1887&auto=format&fit=crop' },
  { id: '2', name: 'Jeans Blue', price: 59.99, shop: 'Fashion Hub', category: 'Clothing', image: 'https://plus.unsplash.com/premium_photo-1667049290968-d0e2b9c36e01?q=80&w=1974&auto=format&fit=crop' },
  { id: '3', name: 'Sneakers White', price: 89.99, shop: 'Trendy Wear', category: 'Shoes', image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?q=80&w=1974&auto=format&fit=crop' },
  { id: '4', name: 'Jacket Leather', price: 129.99, shop: 'Noor Boutique', category: 'Clothing', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop' },
  { id: '5', name: 'Cap Gray', price: 19.99, shop: 'Street Style', category: 'Accessories', image: 'https://images.unsplash.com/photo-1606115757624-6b9bfe9fa5e4?q=80&w=500&auto=format&fit=crop' },
  { id: '6', name: 'Hoodie Red', price: 49.99, shop: 'Fashion Hub', category: 'Clothing', image: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?q=80&w=1964&auto=format&fit=crop' },
  { id: '7', name: 'Necklace Gold', price: 39.99, shop: 'Trendy Wear', category: 'Jewelry', image: 'https://images.unsplash.com/photo-1606760227091-3dd44d7f7f91?q=80&w=1887&auto=format&fit=crop' },
];

const categories = ["All", "Clothing", "Shoes", "Accessories", "Jewelry", "Bags"];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // Calcul grille responsive
  const numColumns = Math.max(2, Math.floor(width / 180));
  const cardWidth = width / numColumns - 20;

  // Filtrer les produits
  const filteredProducts = selectedCategory === "All" 
    ? initialProducts 
    : initialProducts.filter(product => product.category === selectedCategory);

  // Rendu des produits
  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={[styles.productCard, { width: cardWidth }]}
      onPress={() => router.push(`/clients/ProductScreen?productId=${item.id}`)}
    >
      <Image 
        source={{ uri: item.image }} 
        style={[styles.productImage, { height: cardWidth * 0.8 }]} 
        resizeMode="cover"
      />
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.productShop}>{item.shop}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => console.log(`Added ${item.name} to cart`)}
        >
          <Icon name="plus" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Rendu des catégories
  const renderCategory = (category) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.categoryButtonActive,
        { paddingHorizontal: width > 600 ? 20 : 15 }
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text 
        style={[
          styles.categoryText,
          selectedCategory === category && styles.categoryTextActive,
          { fontSize: width > 600 ? 16 : 14 }
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={[styles.appName, { fontSize: width > 600 ? 28 : 24 }]}>Drive.re</Text>
        <TouchableOpacity 
          style={styles.notificationButton} 
          onPress={() => router.push('/clients/notifications')}
        >
          <Icon name="bell" size={width > 600 ? 28 : 24} color="#DD6B20" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { marginHorizontal: width * 0.04 }]}>
        <Icon name="search" size={20} color="#38A169" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#718096"
        />
      </View>

      {/* Catégories */}
      <View style={[styles.categoriesContainer, { paddingHorizontal: width * 0.04 }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <View key={category}>{renderCategory(category)}</View>
          ))}
        </ScrollView>
      </View>

      {/* Catalogue */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        key={numColumns}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={[styles.listContent, { paddingHorizontal: width * 0.04 }]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>No products in this category</Text>}
      />
  <BottomNavigation></BottomNavigation>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // App Bar
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
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    padding: 10,
  },
  // Search Bar
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 10,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  // Categories
  categoriesContainer: {
    marginBottom: 15,
  },
  categoryButton: {
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#2ecc71',
  },
  categoryText: {
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Products
  listContent: {
    paddingBottom: 80,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  productShop: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  addToCartButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;