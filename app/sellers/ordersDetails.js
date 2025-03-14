// OrderDetailsScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useLocalSearchParams } from 'expo-router';

const OrderDetailsScreen = () => {
  const router = useRouter();
  const { orderId } = useLocalSearchParams(); // Récupérer l'ID de la commande depuis les paramètres

  // Données d'exemple pour une commande (à remplacer par une requête API)
  const [order, setOrder] = useState({
    id: orderId,
    customer: 'Marie Dupont',
    date: '2025-03-12',
    total: 89.99,
    status: 'Pending',
    shippingAddress: '12 Rue des Lilas, 75001 Paris, France',
    items: [
      { id: '1', name: 'T-shirt Bleu', quantity: 2, price: 19.99 },
      { id: '2', name: 'Jeans Slim', quantity: 1, price: 50.01 },
    ],
  });

  // Simuler la récupération des données de la commande (remplacer par une API)
  useEffect(() => {
    // Exemple : fetchOrder(orderId).then(data => setOrder(data));
  }, [orderId]);

  // Rendu des éléments de la commande
  const renderOrderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemQuantity}>Quantité : {item.quantity}</Text>
      </View>
      <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* En-tête */}
      <LinearGradient
        colors={['#38A169', '#2D8A5B']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Détails de la commande</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/sellers/orders')}
          >
            <Icon name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.wave} />
      </LinearGradient>

      {/* Contenu */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.detailsCard}>
          {/* Informations générales */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Informations</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Commande #</Text>
              <Text style={styles.infoValue}>{order.id}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Client</Text>
              <Text style={styles.infoValue}>{order.customer}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>{order.date}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Statut</Text>
              <Text
                style={[
                  styles.infoValue,
                  order.status === 'Pending' ? styles.statusPending :
                  order.status === 'Shipped' ? styles.statusShipped :
                  styles.statusCompleted,
                ]}
              >
                {order.status === 'Pending' ? 'En attente' : order.status === 'Shipped' ? 'Expédiée' : 'Complétée'}
              </Text>
            </View>
          </View>

          {/* Adresse de livraison */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Adresse de livraison</Text>
            <Text style={styles.infoValue}>{order.shippingAddress}</Text>
          </View>

          {/* Liste des produits */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Produits</Text>
            <FlatList
              data={order.items}
              renderItem={renderOrderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>

          {/* Total */}
          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${order.total.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  headerGradient: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 40,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 12,
  },
  wave: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#F0F4F8',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  contentContainer: {
    padding: 20,
  },
  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  statusPending: {
    color: '#F1C40F',
  },
  statusShipped: {
    color: '#3498DB',
  },
  statusCompleted: {
    color: '#38A169',
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#38A169',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EDEFF2',
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#38A169',
  },
});

export default OrderDetailsScreen;