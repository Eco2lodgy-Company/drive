import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedLivraison, setSelectedLivraison] = useState(null);

  const livraisons = [
    { id: 1, adresse: '123 Rue de Paris', composition: ['Livre', 'Cahier', 'Stylo'] },
    { id: 2, adresse: '456 Avenue des Champs', composition: ['Ordinateur', 'Souris'] },
    { id: 3, adresse: '789 Boulevard de Lyon', composition: ['Téléphone', 'Chargeur'] },
  ];

  const toggleStatus = () => {
    setIsActive(previousState => !previousState);
  };

  const handleCardPress = (livraison) => {
    setSelectedLivraison(livraison);
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Statut: {isActive ? 'Actif' : 'En repos'}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#4CAF50' }}
          thumbColor={isActive ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleStatus}
          value={isActive}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {livraisons.map((livraison) => (
          <TouchableOpacity
            key={livraison.id}
            style={styles.card}
            onPress={() => handleCardPress(livraison)}
          >
            <Text style={styles.cardTitle}>Livraison #{livraison.id}</Text>
            <Text style={styles.cardText}>{livraison.adresse}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedLivraison && (
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Détails de la livraison #{selectedLivraison.id}</Text>
          <Text style={styles.modalText}>Adresse: {selectedLivraison.adresse}</Text>
          <Text style={styles.modalText}>Composition du colis:</Text>
          {selectedLivraison.composition.map((item, index) => (
            <Text key={index} style={styles.modalItem}>- {item}</Text>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedLivraison(null)}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  modalItem: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;