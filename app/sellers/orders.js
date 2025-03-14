// SellerOrdersScreen.js
import React, { useState } from 'react';
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
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

const SellerOrdersScreen = () => {
  const router = useRouter();

  // Données d'exemple pour les commandes
  const [orders, setOrders] = useState([
    { id: 'ORD126', customer: 'Marie Dupont', total: 89.99, status: 'Pending', date: '2025-03-12' },
    { id: 'ORD127', customer: 'Pierre Leclerc', total: 34.99, status: 'Shipped', date: '2025-03-11' },
    { id: 'ORD128', customer: 'Sophie Martin', total: 150.50, status: 'Completed', date: '2025-03-10' },
    { id: 'ORD129', customer: 'Lucas Durand', total: 200.00, status: 'Pending', date: '2025-03-12' },
    { id: 'ORD130', customer: 'Emma Laurent', total: 75.30, status: 'Shipped', date: '2025-03-11' },
  ]);

  // Filtres disponibles
  const filters = ['Toutes', 'En attente', 'Expédiées', 'Complétées'];
  const [activeFilter, setActiveFilter] = useState('Toutes');

  // Filtrer les commandes selon le statut sélectionné
  const filteredOrders = activeFilter === 'Toutes'
    ? orders
    : orders.filter((order) =>
        activeFilter === 'En attente' ? order.status === 'Pending' :
        activeFilter === 'Expédiées' ? order.status === 'Shipped' :
        order.status === 'Completed'
      );

  const renderOrder = ({ item }) => (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() => router.push(`/sellers/ordersDetails?orderId=${item.id}`)}
    >
      <View style={styles.orderInfo}>
        <Text style={styles.orderId}>#{item.id}</Text>
        <Text style={styles.orderCustomer}>{item.customer}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
        <Text style={styles.orderTotal}>${item.total.toFixed(2)}</Text>
      </View>
      <View style={styles.orderStatusContainer}>
        <Text style={[
          styles.orderStatus,
          item.status === 'Pending' ? styles.statusPending :
          item.status === 'Shipped' ? styles.statusShipped :
          styles.statusCompleted
        ]}>
          {item.status === 'Pending' ? 'En attente' : item.status === 'Shipped' ? 'Expédiée' : 'Complétée'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* En-tête */}
      <LinearGradient
        colors={['#38A169', '#2D8A5B']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Commandes</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/sellers/home')}
          >
            <Icon name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.wave} />
      </LinearGradient>

      {/* Filtres */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              activeFilter === filter && styles.filterButtonActive,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Liste des commandes */}
      <FlatList
        data={filteredOrders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.orderList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucune commande trouvée.</Text>
        }
      />

      <BottomNavigation />
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
  filterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFF2',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F5F6F8',
  },
  filterButtonActive: {
    backgroundColor: '#38A169',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#fff',
  },
  orderList: {
    padding: 20,
    paddingBottom: 100, // Espace pour la barre de navigation
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  orderCustomer: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  orderDate: {
    fontSize: 12,
    color: '#999',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#38A169',
    marginTop: 4,
  },
  orderStatusContainer: {
    alignItems: 'center',
  },
  orderStatus: {
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    color: '#fff',
  },
  statusPending: {
    backgroundColor: '#F1C40F',
  },
  statusShipped: {
    backgroundColor: '#3498DB',
  },
  statusCompleted: {
    backgroundColor: '#38A169',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SellerOrdersScreen;