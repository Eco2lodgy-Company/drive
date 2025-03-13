// PanierScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

const PanierScreen = () => {
  const [articles, setArticles] = useState([
    { id: '1', name: 'Premium Coffee Maker', price: 89.99, quantity: 1, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', description: 'High-quality coffee maker with timer' },
    { id: '2', name: 'Stainless Steel Mug', price: 24.99, quantity: 2, image: 'https://images.unsplash.com/photo-1514228742587-6b93ef5afd35', description: 'Keeps drinks hot for 12 hours' },
    { id: '3', name: 'Organic Coffee Beans', price: 15.99, quantity: 1, image: 'https://images.unsplash.com/photo-1494314675223-7d4f9cfd2d66', description: '1lb of freshly roasted beans' },
    { id: '4', name: 'Coffee Grinder', price: 34.99, quantity: 1, image: 'https://images.unsplash.com/photo-1514043459281-2e18a275772c', description: 'Adjustable ceramic burr grinder' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const router = useRouter();
  const updateQuantity = (id, quantity) => {
    setArticles(prevArticles =>
      prevArticles.map(article =>
        article.id === id ? { ...article, quantity: Math.max(1, quantity) } : article
      )
    );
  };

  const removeArticle = (id) => {
    setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
  };

  const calculateSubtotal = () => {
    return articles.reduce((sum, article) => sum + article.price * article.quantity, 0);
  };

  const confirmOrder = async () => {
    router.push('clients/DeliveryScreen');
  //   setIsLoading(true);
  //   try {
  //     await fakeApiCall({
  //       items: articles,
  //       total: calculateSubtotal(),
  //       date: new Date().toISOString(),
  //     });
  //     setOrderStatus('success');
  //     setArticles([]);
  //   } catch (error) {
  //     setOrderStatus('error');
  //     Alert.alert('Erreur', 'Échec de la confirmation de la commande');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const fakeApiCall = (orderData) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => resolve({ status: 'success', orderId: 'ORD123' }), 1500);
  //   });

  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.itemControls}>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, item.quantity - 1)}
              style={styles.quantityBtn}
            >
              <Text style={styles.quantityBtnText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              value={item.quantity.toString()}
              onChangeText={(text) => updateQuantity(item.id, parseInt(text) || 1)}
              keyboardType="numeric"
            />
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, item.quantity + 1)}
              style={styles.quantityBtn}
            >
              <Text style={styles.quantityBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => removeArticle(item.id)}
        style={styles.removeBtn}
      >
        <Text style={styles.removeBtnText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre Panier</Text>
      
      {articles.length === 0 && !orderStatus && (
        <Text style={styles.empty}>Votre panier est vide</Text>
      )}

      {orderStatus === 'success' && (
        <View style={[styles.message, styles.success]}>
          <Text style={styles.messageText}>Commande confirmée avec succès ! Merci pour votre achat.</Text>
        </View>
      )}

      {orderStatus === 'error' && (
        <View style={[styles.message, styles.error]}>
          <Text style={styles.messageText}>Erreur lors de la confirmation. Veuillez réessayer.</Text>
        </View>
      )}

      <ScrollView style={styles.scrollContainer}>
        {articles.map((item) => (
          <View key={item.id}>{renderItem(item)}</View>
        ))}
      </ScrollView>

      {articles.length > 0 && (
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Sous-total :</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Frais de livraison :</Text>
            <Text style={styles.summaryValue}>{shipping === 0 ? 'Gratuit' : `$${shipping.toFixed(2)}`}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total :</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            onPress={confirmOrder}
            disabled={isLoading}
            style={[styles.confirmBtn, isLoading && styles.confirmBtnDisabled]}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.confirmBtnText}>Confirmer la Commande</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 0,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  itemControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e74c3c',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    padding: 5,
  },
  quantityBtn: {
    paddingHorizontal: 12,
  },
  quantityBtnText: {
    fontSize: 20,
    color: '#3498db',
    fontWeight: 'bold',
  },
  quantityInput: {
    borderWidth: 0,
    padding: 6,
    width: 50,
    textAlign: 'center',
    fontSize: 16,
  },
  removeBtn: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  removeBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  summary: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  confirmBtn: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmBtnDisabled: {
    opacity: 0.7,
  },
  confirmBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  success: {
    backgroundColor: '#2ecc71',
  },
  error: {
    backgroundColor: '#e74c3c',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 18,
    marginTop: 20,
  },
});

export default PanierScreen;