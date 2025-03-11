import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'installer ce package

const ProductPage: React.FC = () => {
  const [buttonScale] = useState(new Animated.Value(1)); // Pour l'animation du bouton

  const handleAddToCart = () => {
    // Animation au clic
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Ajouter la logique pour ajouter au panier ici
    console.log('Produit ajouté au panier');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image du produit */}
      <Image
        source={{ uri: 'https://via.placeholder.com/400' }}
        style={styles.productImage}
      />

      {/* Titre et note en étoiles */}
      <View style={styles.titleContainer}>
        <Text style={styles.productTitle}>Nom du Produit</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Icon key={i} name="star" size={20} color="#FFD700" />
          ))}
          <Text style={styles.ratingText}>(4.5)</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.productDescription}>
        Ceci est une description détaillée du produit. Elle peut inclure des informations sur les matériaux, les dimensions, et d'autres détails pertinents.
      </Text>

      {/* Couleurs disponibles */}
      <View style={styles.colorContainer}>
        <Text style={styles.colorTitle}>Couleurs disponibles :</Text>
        <View style={styles.colorOptions}>
          {['#FF5733', '#33FF57', '#3357FF', '#F333FF'].map((color, index) => (
            <View
              key={index}
              style={[styles.colorCircle, { backgroundColor: color }]}
            />
          ))}
        </View>
      </View>

      {/* Prix */}
      <Text style={styles.productPrice}>$99.99</Text>

      {/* Bouton Ajouter au panier */}
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
          <Icon name="shopping-cart" size={20} color="#FFF" style={styles.cartIcon} />
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'justify',
  },
  colorContainer: {
    marginBottom: 24,
  },
  colorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  colorOptions: {
    flexDirection: 'row',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  productPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 24,
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  addToCartButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  cartIcon: {
    marginLeft: 8,
  },
});

export default ProductPage;