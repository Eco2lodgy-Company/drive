import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeliveryCard from '../components/DeliveryCard';
import StatusToggle from '../components/StatusToggle';

// Mock data - replace with actual API calls
const SAMPLE_DELIVERIES = [
  {
    id: '1',
    restaurant: 'Pizza Express',
    destination: '123 Rue de Paris',
    distance: '2.5 km',
    time: '20-30 min',
    price: '8.50€',
    status: 'available',
  },
  {
    id: '2',
    restaurant: 'Sushi Shop',
    destination: '45 Avenue des Champs',
    distance: '1.8 km',
    time: '15-25 min',
    price: '7.00€',
    status: 'in_progress',
  },
];

export default function DeliveryList() {
  const [isActive, setIsActive] = useState(false);
  const [deliveries, setDeliveries] = useState(SAMPLE_DELIVERIES);

  const handleAcceptDelivery = (delivery) => {
    setDeliveries(deliveries.map(d => 
      d.id === delivery.id 
        ? { ...d, status: 'in_progress' }
        : d
    ));
  };

  const handleCancelDelivery = (delivery) => {
    setDeliveries(deliveries.map(d => 
      d.id === delivery.id 
        ? { ...d, status: 'available' }
        : d
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusToggle isActive={isActive} onToggle={setIsActive} />
      <FlatList
        data={deliveries}
        renderItem={({ item }) => (
          <DeliveryCard
            delivery={item}
            onAccept={handleAcceptDelivery}
            onCancel={handleCancelDelivery}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  listContainer: {
    padding: 16,
  },
});