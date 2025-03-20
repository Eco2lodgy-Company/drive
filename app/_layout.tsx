import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { LocationProvider } from "./LocationContext"; // Import du contexte de localisation
import { AuthProvider } from "../authContext"; // Import du contexte d'authentification
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <AuthProvider>
    <LocationProvider>
      <Stack>
        {/* Clients */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ presentation: "modal" }} />
        <Stack.Screen name="signup" options={{ presentation: "modal" }} />
        <Stack.Screen name="clients/onboarding" options={{ presentation: "modal" }} />
        <Stack.Screen name="clients/login" options={{ presentation: "modal" }} />
        <Stack.Screen name="clients/signup" options={{ presentation: "modal" }} />
        <Stack.Screen name="clients/home" options={{ presentation: "modal", headerShown: false }} />
        <Stack.Screen name="clients/productScreen" options={{ presentation: "modal", headerShown: false }} />
        <Stack.Screen name="clients/cart" options={{ presentation: "modal" }} />
        <Stack.Screen name="clients/profile" options={{ presentation: "modal", headerShown: false }} />
        <Stack.Screen name="clients/shops" options={{ headerShown: false }} />
        <Stack.Screen name="clients/notifications" options={{ headerShown: false }} />
        <Stack.Screen name="clients/shopProfile" options={{ headerShown: false }} />
        <Stack.Screen name="clients/PaymentScreen" options={{ headerShown: false }} />
        <Stack.Screen name="clients/DeliveryScreen" options={{ headerShown: false }} />
        <Stack.Screen name="clients/TrackOrderScreen" options={{ headerShown: false }} />
        <Stack.Screen name="clients/OrderScreen" options={{ headerShown: false }} />
        <Stack.Screen name="clients/ProfileEditScreen" options={{ headerShown: false }} />
        <Stack.Screen name="clients/shopOption" options={{ headerShown: false }} />

        {/* Deliverers */}
        <Stack.Screen name="deliverer/home" options={{ headerShown: false }} />

        {/* Sellers */}
        <Stack.Screen name="sellers/login" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/signup" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/ShopCreationScreen" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/home" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/orders" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/products" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/profile" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/addProduct" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/editProduct" options={{ headerShown: false }} />
        <Stack.Screen name="sellers/ordersDetails" options={{ headerShown: false }} />
      </Stack>
    </LocationProvider>
    </AuthProvider>
  );
}
