// SellerProfileScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

const SellerProfileScreen = () => {
  const router = useRouter();

  // Données d'exemple pour le profil de la boutique
  const [shopProfile, setShopProfile] = useState({
    name: 'Boutique Éco Chic',
    description: 'Vêtements et accessoires durables fabriqués avec amour.',
    email: 'contact@ecochic.com',
    phone: '+33 6 12 34 56 78',
    address: '12 Rue Verte, 75001 Paris, France',
    bannerImage: 'https://via.placeholder.com/400x200',
  });

  // Animations pour chaque carte
  const [fadeAnims] = useState([
    new Animated.Value(0), // Nom
    new Animated.Value(0), // Description
    new Animated.Value(0), // Email
    new Animated.Value(0), // Téléphone
    new Animated.Value(0), // Adresse
    new Animated.Value(0), // Déconnexion
  ]);

  // Animation d’entrée
  useEffect(() => {
    const animations = fadeAnims.map((anim) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      })
    );
    Animated.stagger(100, animations).start();
  }, []);

  // Fonction de déconnexion (exemple)
  const handleLogout = () => {
    // Logique de déconnexion ici (par exemple, effacer le token, rediriger vers la page de connexion)
    Alert.alert('Déconnexion', 'Vous avez été déconnecté avec succès.');
    router.push('/login'); // Redirection vers une page de connexion hypothétique
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* En-tête avec bannière immersive */}
        <View style={styles.headerContainer}>
          <LinearGradient
            colors={['rgba(56, 161, 105, 0.8)', 'rgba(45, 138, 91, 0.8)']}
            style={styles.headerGradient}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{shopProfile.name}</Text>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.push('/sellers/home')}
              >
                <Icon name="arrow-left" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <Image
            source={{ uri: shopProfile.bannerImage }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.wave} />
        </View>

        {/* Contenu animé */}
        <View style={styles.profileContainer}>
          {/* Description */}
          <Animated.View
            style={[
              styles.infoCard,
              {
                opacity: fadeAnims[1],
                transform: [
                  {
                    translateY: fadeAnims[1].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Icon name="info" size={24} color="#38A169" style={styles.infoIcon} />
            <Text style={styles.infoText}>{shopProfile.description}</Text>
          </Animated.View>

          {/* Email */}
          <Animated.View
            style={[
              styles.infoCard,
              {
                opacity: fadeAnims[2],
                transform: [
                  {
                    translateY: fadeAnims[2].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Icon name="mail" size={24} color="#38A169" style={styles.infoIcon} />
            <Text style={styles.infoText}>{shopProfile.email}</Text>
          </Animated.View>

          {/* Numéro de téléphone */}
          <Animated.View
            style={[
              styles.infoCard,
              {
                opacity: fadeAnims[3],
                transform: [
                  {
                    translateY: fadeAnims[3].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Icon name="phone" size={24} color="#38A169" style={styles.infoIcon} />
            <Text style={styles.infoText}>{shopProfile.phone}</Text>
          </Animated.View>

          {/* Adresse */}
          <Animated.View
            style={[
              styles.infoCard,
              {
                opacity: fadeAnims[4],
                transform: [
                  {
                    translateY: fadeAnims[4].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Icon name="map-pin" size={24} color="#38A169" style={styles.infoIcon} />
            <Text style={styles.infoText}>{shopProfile.address}</Text>
          </Animated.View>

          {/* Bouton Modifier */}
          <Animated.View
            style={[
              styles.actionButtonContainer,
              {
                opacity: fadeAnims[0],
                transform: [
                  {
                    translateY: fadeAnims[0].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => router.push('/sellers/edit-profile')}
            >
              <LinearGradient colors={['#38A169', '#2D8A5B']} style={styles.editGradient}>
                <Icon name="edit-2" size={24} color="#fff" />
                <Text style={styles.editButtonText}>Modifier le profil</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          {/* Bouton Déconnexion */}
          <Animated.View
            style={[
              styles.actionButtonContainer,
              {
                opacity: fadeAnims[5],
                transform: [
                  {
                    translateY: fadeAnims[5].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <LinearGradient colors={['#E74C3C', '#C0392B']} style={styles.logoutGradient}>
                <Icon name="log-out" size={24} color="#fff" />
                <Text style={styles.logoutButtonText}>Déconnexion</Text>
              </LinearGradient>
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
    paddingBottom: 100, // Espace pour la barre de navigation
  },
  headerContainer: {
    position: 'relative',
  },
  headerGradient: {
    paddingTop: 40,
    paddingBottom: 140, // Espace pour la bannière
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 8,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 12,
  },
  bannerImage: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    height: 160,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
  profileContainer: {
    padding: 20,
    marginTop: -80, // Remonte le contenu pour chevaucher la bannière
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '600',
    flex: 1,
  },
  actionButtonContainer: {
    marginBottom: 16,
  },
  editButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  editGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
  logoutButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
});

export default SellerProfileScreen;