// SellerDashboardScreen.js
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

const SellerDashboardScreen = () => {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0); // Animation d'entrée

  // Données d'exemple
  const stats = {
    totalSales: 2450.75,
    pendingOrders: 8,
    completedOrders: 42,
  };

  const recentOrders = [
    { id: 'ORD126', customer: 'Marie Dupont', total: 89.99, status: 'Pending' },
    { id: 'ORD127', customer: 'Pierre Leclerc', total: 34.99, status: 'Shipped' },
    { id: 'ORD128', customer: 'Sophie Martin', total: 150.50, status: 'Completed' },
  ];

  const notifications = [
    { id: '1', message: 'Nouvelle commande reçue !', time: 'Il y a 5 min' },
    { id: '2', message: 'Produit en rupture de stock.', time: 'Il y a 1h' },
    { id: '3', message: 'Produit en rupture de stock.', time: 'Il y a 1h' },
  ];

  // Animation d'entrée
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderOrder = ({ item }) => (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() => router.push(`/sellers/order-details?orderId=${item.id}`)}
    >
      <View style={styles.orderInfo}>
        <Text style={styles.orderId}>#{item.id}</Text>
        <Text style={styles.orderCustomer}>{item.customer}</Text>
        <Text style={styles.orderTotal}>${item.total.toFixed(2)}</Text>
      </View>
      <Text style={[styles.orderStatus, item.status === 'Pending' ? styles.statusPending : item.status === 'Shipped' ? styles.statusShipped : styles.statusCompleted]}>
        {item.status === 'Pending' ? 'En attente' : item.status === 'Shipped' ? 'Expédiée' : 'Complétée'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* En-tête avec vague */}
          <LinearGradient
            colors={['#38A169', '#2D8A5B']}
            style={styles.headerGradient}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Bienvenue, Vendeur</Text>
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => router.push('/sellers/profile')}
              >
                <Icon name="user" size={26} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.wave} />
          </LinearGradient>

          {/* Statistiques animées */}
          <Animated.View style={[styles.statsContainer, { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] }]}>
            <View style={styles.statCard}>
              <Icon name="dollar-sign" size={30} color="#38A169" />
              <Text style={styles.statValue}>${stats.totalSales.toFixed(2)}</Text>
              <Text style={styles.statLabel}>Ventes Totales</Text>
            </View>
            <View style={styles.statCard}>
              <Icon name="clock" size={30} color="#F1C40F" />
              <Text style={styles.statValue}>{stats.pendingOrders}</Text>
              <Text style={styles.statLabel}>En Attente</Text>
            </View>
            <View style={styles.statCard}>
              <Icon name="check-circle" size={30} color="#3498DB" />
              <Text style={styles.statValue}>{stats.completedOrders}</Text>
              <Text style={styles.statLabel}>Terminées</Text>
            </View>
          </Animated.View>

          {/* Actions rapides */}
          <Animated.View style={[styles.actionsContainer, { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [70, 0] }) }] }]}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/sellers/addProduct')}
            >
              <LinearGradient colors={['#38A169', '#2D8A5B']} style={styles.actionGradient}>
                <Icon name="plus-circle" size={26} color="#fff" />
                <Text style={styles.actionButtonText}>Ajouter Produit</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/sellers/orders')}
            >
              <LinearGradient colors={['#3498DB', '#2980B9']} style={styles.actionGradient}>
                <Icon name="package" size={26} color="#fff" />
                <Text style={styles.actionButtonText}>Commandes</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          {/* Notifications rapides */}
          <Animated.View style={[styles.notificationsSection, { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [90, 0] }) }] }]}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            {notifications.map((notif) => (
              <View key={notif.id} style={styles.notificationCard}>
                <Icon name="bell" size={20} color="#F1C40F" style={styles.notificationIcon} />
                <View>
                  <Text style={styles.notificationMessage}>{notif.message}</Text>
                  <Text style={styles.notificationTime}>{notif.time}</Text>
                </View>
              </View>
            ))}
          </Animated.View>

          {/* Dernières commandes */}
          <Animated.View style={[styles.ordersSection, { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [110, 0] }) }] }]}>
            <Text style={styles.sectionTitle}>Dernières Commandes</Text>
            <FlatList
              data={recentOrders}
              renderItem={renderOrder}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              contentContainerStyle={styles.orderList}
            />
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => router.push('/sellers/orders')}
            >
              <Text style={styles.viewAllText}>Voir toutes les commandes</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  container: {
    padding: 20,
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
  profileButton: {
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -40,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 6,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 6,
  },
  actionGradient: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
  notificationsSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFF2',
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
  },
  ordersSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  orderList: {
    paddingBottom: 8,
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
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
    marginVertical: 2,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#38A169',
  },
  orderStatus: {
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 4,
    paddingHorizontal: 10,
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
  viewAllButton: {
    alignItems: 'center',
    marginTop: 8,
  },
  viewAllText: {
    fontSize: 14,
    color: '#38A169',
    fontWeight: '600',
  },
});

export default SellerDashboardScreen;