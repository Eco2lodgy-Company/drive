// SellerSignupScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const SellerSignupScreen = () => {
  const router = useRouter();

  // État pour les champs du formulaire et le chargement
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [buttonScale] = useState(new Animated.Value(1)); // Animation pour le bouton

  // Gestion des changements dans les champs
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Animation au clic du bouton
  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // Gestion de la soumission du formulaire
  const handleSignup = async () => {
    const { name, email, password, confirmPassword } = formData;

    // Validation de base
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erreur', 'Veuillez entrer un email valide.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulation d'un appel API pour l'inscription
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert('Succès', 'Inscription réussie ! Vous pouvez maintenant vous connecter.');
      router.push('/sellers/login');
    } catch (error) {
      Alert.alert('Erreur', error.message || 'Échec de l’inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1528952686551-542043782ab9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Image illustrative
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.4)']} // Dégradé noir subtil
          style={styles.overlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Logo sans cadre */}
            <Image
              source={{ uri: 'https://via.placeholder.com/120' }} // Remplacez par votre logo
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Créer un compte vendeur</Text>
            <Text style={styles.subtitle}>Rejoignez notre plateforme dès aujourd'hui</Text>

            {/* Formulaire */}
            <View style={styles.form}>
              <Text style={styles.label}>Nom complet</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(text) => handleChange('name', text)}
                placeholder="Entrez votre nom"
                placeholderTextColor="#A0A0A0"
              />

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
                placeholder="Entrez votre email"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.label}>Mot de passe</Text>
              <TextInput
                style={styles.input}
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
                placeholder="Entrez votre mot de passe"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
              />

              <Text style={styles.label}>Confirmer le mot de passe</Text>
              <TextInput
                style={styles.input}
                value={formData.confirmPassword}
                onChangeText={(text) => handleChange('confirmPassword', text)}
                placeholder="Confirmez votre mot de passe"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
              />

              <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
                <TouchableOpacity
                  style={[styles.signupButton, isLoading && styles.signupButtonDisabled]}
                  onPress={handleSignup}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text style={styles.signupButtonText}>S'inscrire</Text>
                  )}
                </TouchableOpacity>
              </Animated.View>
            </View>

            {/* Lien pour se connecter */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Déjà un compte ? </Text>
              <TouchableOpacity onPress={() => router.push('/sellers/login')}>
                <Text style={styles.loginLink}>Se connecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Légère transparence
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EDEFF2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 20,
  },
  signupButton: {
    backgroundColor: '#38A169',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  signupButtonDisabled: {
    backgroundColor: '#95C9A6',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  loginLink: {
    fontSize: 14,
    color: '#38A169',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default SellerSignupScreen;