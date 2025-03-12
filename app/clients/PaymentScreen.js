import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const PaymentScreen = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // Données fictives du panier (augmentées pour plus de contenu)
  const cartItems = [
    { id: '1', name: 'T-Shirt Black', price: 29.99, quantity: 1 },
    { id: '2', name: 'Jeans Blue', price: 59.99, quantity: 2 },
    { id: '3', name: 'Sneakers White', price: 89.99, quantity: 1 },
    { id: '4', name: 'Jacket Leather', price: 129.99, quantity: 1 },
    { id: '5', name: 'Cap Gray', price: 19.99, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  // État pour les champs de paiement et la méthode sélectionnée
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('visa');

  // Vérification si tous les champs sont remplis
  const isFormValid = cardNumber.length === 16 && expiryDate.length === 5 && cvv.length === 3 && cardHolder.length > 0;

  const handlePayment = () => {
    if (isFormValid) {
      console.log('Processing payment:', { paymentMethod, cardNumber, expiryDate, cvv, cardHolder, total });
      router.push('/clients/order-confirmation');
    }
  };

  const renderCartItem = (item) => (
    <View key={item.id} style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>
        Qté: {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { padding: width * 0.04 }]}
        showsVerticalScrollIndicator={true} // Indicateur de défilement visible
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={[styles.pageTitle, { fontSize: width > 600 ? 28 : 24 }]}>
          Paiement
        </Text>

        {/* Récapitulatif du panier */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Votre panier</Text>
          {cartItems.map(renderCartItem)}
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Sous-total :</Text>
            <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Livraison :</Text>
            <Text style={styles.totalValue}>${shipping.toFixed(2)}</Text>
          </View>
          <View style={[styles.totalContainer, styles.totalFinal]}>
            <Text style={[styles.totalLabel, { fontWeight: 'bold' }]}>Total :</Text>
            <Text style={[styles.totalValue, { fontWeight: 'bold', color: '#2ecc71' }]}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Sélection de la méthode de paiement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Méthode de paiement</Text>
          <View style={styles.paymentOptions}>
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentMethod === 'visa' && styles.paymentOptionSelected,
              ]}
              onPress={() => setPaymentMethod('visa')}
            >
              <Icon name="credit-card" size={20} color={paymentMethod === 'visa' ? '#2ecc71' : '#666'} />
              <Text style={[
                styles.paymentText,
                paymentMethod === 'visa' && styles.paymentTextSelected,
              ]}>
                Visa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentMethod === 'mastercard' && styles.paymentOptionSelected,
              ]}
              onPress={() => setPaymentMethod('mastercard')}
            >
              <Icon name="credit-card" size={20} color={paymentMethod === 'mastercard' ? '#2ecc71' : '#666'} />
              <Text style={[
                styles.paymentText,
                paymentMethod === 'mastercard' && styles.paymentTextSelected,
              ]}>
                Mastercard
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Formulaire de paiement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Détails de la carte</Text>
          <TextInput
            style={styles.input}
            placeholder="Numéro de carte"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            maxLength={16}
            placeholderTextColor="#666"
          />
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="MM/AA"
              value={expiryDate}
              onChangeText={setExpiryDate}
              keyboardType="numeric"
              maxLength={5}
              placeholderTextColor="#666"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVV"
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
              maxLength={3}
              placeholderTextColor="#666"
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Titulaire de la carte"
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholderTextColor="#666"
          />
        </View>

        {/* Informations supplémentaires pour augmenter la hauteur */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Note</Text>
          <Text style={styles.noteText}>
            Votre paiement sera traité en toute sécurité. Assurez-vous que les informations saisies sont correctes avant de confirmer.
          </Text>
        </View>

        {/* Bouton de paiement */}
        <TouchableOpacity 
          style={[styles.payButton, !isFormValid && styles.payButtonDisabled]}
          onPress={handlePayment}
          activeOpacity={0.85}
          disabled={!isFormValid}
        >
          <LinearGradient
            colors={isFormValid ? ['#2ecc71', '#27ae60'] : ['#ccc', '#bbb']}
            style={styles.buttonGradient}
          >
            <Icon 
              name="credit-card" 
              size={22} 
              color="#fff" 
              style={styles.buttonIcon} 
            />
            <Text style={styles.payButtonText}>Payer ${total.toFixed(2)}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Espace supplémentaire pour garantir le défilement */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'home', label: 'Home', route: '/clients/home' },
          { icon: 'search', label: 'Search', route: '/clients/shops' },
          { icon: 'shopping-cart', label: 'Cart', route: '/clients/cart' },
          { icon: 'user', label: 'Profile', route: '/clients/profile' },
        ].map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.navItem}
            onPress={() => router.push(item.route)}
          >
            <Icon name={item.icon} size={24} color="#2ecc71" />
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
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 150, // Augmenté pour garantir l'espace sous la navigation
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalValue: {
    fontSize: 14,
    color: '#333',
  },
  totalFinal: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  paymentOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  paymentOptionSelected: {
    borderColor: '#2ecc71',
    elevation: 2,
  },
  paymentText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  paymentTextSelected: {
    color: '#2ecc71',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  noteText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  payButton: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 20, // Espace supplémentaire sous le bouton
  },
  payButtonDisabled: {
    opacity: 0.7,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonIcon: {
    marginRight: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  spacer: {
    height: 50, // Espace supplémentaire pour garantir le défilement
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navText: {
    fontSize: 12,
    color: '#2ecc71',
    marginTop: 4,
  },
});

export default PaymentScreen;