// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Pour les icônes
import Home from './home';
import HistoriqueLivraisonsScreen from './screens/historique';
import ProfileScreen from './screens/profile';

// Créez des écrans simples pour chaque onglet
function AccueilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accueil</Text>
    </View>
  );
}

function LivraisonsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Livraisons</Text>
    </View>
  );
}

function ProfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil</Text>
    </View>
  );
}

// Créez la Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Retourne l'icône correspondante
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50', // Couleur de l'onglet actif
          tabBarInactiveTintColor: 'gray', // Couleur des onglets inactifs
        })}
      >
        <Tab.Screen name="Accueil" component={Home} options={{ headerShown: false }}/>
        
        <Tab.Screen name="Historique" component={HistoriqueLivraisonsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Livraisons" component={LivraisonsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profil" component={ProfileScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}