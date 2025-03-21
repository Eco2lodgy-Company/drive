// AddProductScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const AddProductScreen = () => {
  const router = useRouter();

  // État pour les champs du formulaire
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [photo, setPhoto] = useState(null);

  // Fonction pour sélectionner une photo
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = () => {
    const product = {
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      photo,
    };
    console.log('Nouveau produit :', product);
    // Ici, vous pouvez ajouter la logique pour envoyer les données au backend
    router.push('/sellers/dashboard'); // Retour au tableau de bord après ajout
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* En-tête */}
      <LinearGradient
        colors={['#38A169', '#2D8A5B']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ajouter un produit</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/sellers/dashboard')}
          >
            <Icon name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.wave} />
      </LinearGradient>

      {/* Formulaire */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.formCard}>
          {/* Libellé du produit */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Libellé du produit</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nom du produit"
              placeholderTextColor="#999"
            />
          </View>

          {/* Description */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Description du produit"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Prix */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Prix ($)</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              placeholder="0.00"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>

          {/* Stock */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Stock</Text>
            <TextInput
              style={styles.input}
              value={stock}
              onChangeText={setStock}
              placeholder="0"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>

          {/* Photo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Photo du produit</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Icon name="upload" size={20} color="#38A169" />
              <Text style={styles.uploadText}>Choisir une photo</Text>
            </TouchableOpacity>
            {photo && (
              <Image source={{ uri: photo }} style={styles.previewImage} />
            )}
          </View>

          {/* Bouton Soumettre */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <LinearGradient
              colors={['#38A169', '#2D8A5B']}
              style={styles.submitGradient}
            >
              <Text style={styles.submitText}>Ajouter le produit</Text>
            </LinearGradient>
          </TouchableOpacity>
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
  formContainer: {
    padding: 20,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F6F8',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#1A1A1A',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    borderRadius: 12,
    padding: 12,
  },
  uploadText: {
    fontSize: 16,
    color: '#38A169',
    marginLeft: 10,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },
  submitButton: {
    marginTop: 20,
  },
  submitGradient: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});

export default AddProductScreen;