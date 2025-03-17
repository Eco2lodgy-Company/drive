import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Clock, DollarSign, Navigation, Phone, User } from 'lucide-react-native';

export default function DeliveryDetails({ route }) {
  const delivery = route.params?.delivery || {
    id: '1',
    restaurant: 'Pizza Express',
    restaurantAddress: '78 Avenue des Champs-Élysées',
    restaurantPhone: '+33 1 23 45 67 89',
    destination: '123 Rue de Paris',
    customerName: 'Marie Dubois',
    customerPhone: '+33 6 12 34 56 78',
    distance: '2.5 km',
    time: '20-30 min',
    price: '8.50€',
    items: [
      { id: 1, name: 'Pizza Margherita', quantity: 1 },
      { id: 2, name: 'Pizza Quatre Fromages', quantity: 2 },
    ],
    status: 'in_progress',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Restaurant</Text>
          <Text style={styles.restaurantName}>{delivery.restaurant}</Text>
          <View style={styles.infoRow}>
            <MapPin size={16} color="#8E8E93" />
            <Text style={styles.infoText}>{delivery.restaurantAddress}</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Navigation size={20} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Naviguer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Phone size={20} color="#007AFF" />
            <Text style={styles.secondaryButtonText}>Appeler le restaurant</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Client</Text>
          <View style={styles.infoRow}>
            <User size={16} color="#8E8E93" />
            <Text style={styles.infoText}>{delivery.customerName}</Text>
          </View>
          <View style={styles.infoRow}>
            <MapPin size={16} color="#8E8E93" />
            <Text style={styles.infoText}>{delivery.destination}</Text>
          </View>
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Phone size={20} color="#007AFF" />
            <Text style={styles.secondaryButtonText}>Appeler le client</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Commande</Text>
          {delivery.items.map(item => (
            <View key={item.id} style={styles.orderItem}>
              <Text style={styles.itemQuantity}>{item.quantity}x</Text>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.infoRow}>
            <Clock size={16} color="#8E8E93" />
            <Text style={styles.infoText}>Temps estimé: {delivery.time}</Text>
          </View>
          <View style={styles.infoRow}>
            <DollarSign size={16} color="#8E8E93" />
            <Text style={styles.infoText}>Commission: {delivery.price}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  secondaryButton: {
    backgroundColor: '#F2F2F7',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  itemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
    color: '#007AFF',
  },
  itemName: {
    fontSize: 16,
  },
});