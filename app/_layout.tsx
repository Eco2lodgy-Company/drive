import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import ProductScreen from '../app/clients/ProductScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
        <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
        <Stack.Screen name="sellers/onboarding" options={{ presentation: 'modal' }} />
        <Stack.Screen name="clients/onboarding" options={{ presentation: 'modal' }} />
        <Stack.Screen name="clients/login" options={{ presentation: 'modal' }} />
        <Stack.Screen name="clients/signup" options={{ presentation: 'modal' }} />
        <Stack.Screen name="clients/home" options={{ presentation: 'modal',headerShown: false }} />
        <Stack.Screen name="clients/productScreen" options={{ presentation: 'modal',headerShown: false }}  />
        <Stack.Screen name="clients/cart" options={{ presentation: 'modal' }} />
        <Stack.Screen name="client/profile" options={{presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="shops" options={{ headerShown: false }} />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen name="shopProfile" options={{ headerShown: false }} />
        <Stack.Screen name="PaymentScreen" options={{ headerShown: false }} />
        <Stack.Screen name="DeliveryScreen" options={{ headerShown: false }} />
        <Stack.Screen name="TrackOrderScreen" options={{ headerShown: false }} />



        

      </Stack>
  );
}
