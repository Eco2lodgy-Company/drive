import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

const ShopsScreen = () => {
  const router = useRouter();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  // Données fictives des boutiques avec images
  const shops = [
    {
      id: '1',
      name: 'Noor Boutique',
      address: '123 Fashion St, Paris',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1555529669-2263d137507b?q=80&w=1965&auto=format&fit=crop',
    },
    {
      id: '2',
      name: 'Fashion Hub',
      address: '456 Style Ave, London',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: '3',
      name: 'Trendy Wear',
      address: '789 Chic Rd, New York',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: '4',
      name: 'Street Style',
      address: '321 Urban Ln, Tokyo',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1591219067796-2573f8e8fb01?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: '5',
      name: 'Elegance Shop',
      address: '654 Grace Blvd, Milan',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=1974&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'Elegance Shop',
        address: '654 Grace Blvd, Milan',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: '7',
        name: 'Elegance Shop',
        address: '654 Grace Blvd, Milan',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: '8',
        name: 'Elegance Shop',
        address: '654 Grace Blvd, Milan',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=1974&auto=format&fit=crop',
      },
  ];

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleShopPress = (shopId) => {
    console.log(`Navigating to shop ${shopId}`);
    // router.push(`/shop/${shopId}`); // Décommentez pour navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-left" size={24} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.appName}>Shops</Text>
      </View> */}

      {/* Liste des boutiques */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {shops.map((shop, index) => (
          <Animated.View
            key={shop.id}
            style={[
              styles.shopCard,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50 * (index + 1), 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.cardContent}
              onPress={() => handleShopPress(shop.id)}
              activeOpacity={0.8}
            >
              {/* Image avec overlay */}
              <View style={styles.imageContainer}>
                <Image source={{ uri: shop.image }} style={styles.shopImage} />
                <View style={styles.imageOverlay} />
              </View>

              {/* Informations */}
              <View style={styles.shopInfo}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <View style={styles.addressContainer}>
                  <Icon name="map-pin" size={14} color="#718096" />
                  <Text style={styles.shopAddress}> {shop.address}</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{shop.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>

      {/* Barre de menu en bas */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'home', label: 'Home', route: '/' },
          { icon: 'search', label: 'Search', route: '/search' },
          { icon: 'shopping-cart', label: 'Cart', route: '/cart' },
          { icon: 'user', label: 'Profile', route: '/profile' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => router.push(item.route)}
          >
            <Icon name={item.icon} size={24} color="#38A169" />
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
    backgroundColor: '#F0F4F8',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingTop: 40,
    backgroundColor: '#fff',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2D3748',
    marginLeft: 15,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Espace pour la barre de navigation
  },
  shopCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  shopImage: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Léger overlay pour contraste
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  shopInfo: {
    flex: 1,
    padding: 15,
  },
  shopName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  shopAddress: {
    fontSize: 14,
    color: '#718096',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DD6B20',
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navText: {
    fontSize: 12,
    color: '#38A169',
    marginTop: 4,
  },
});

export default ShopsScreen;