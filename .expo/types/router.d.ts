/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cart` | `/(tabs)/explore` | `/(tabs)/notifications` | `/(tabs)/profile` | `/_sitemap` | `/cart` | `/clients/DeliveryScreen` | `/clients/OrdersScreen` | `/clients/PaymentScreen` | `/clients/ProductScreen` | `/clients/ProfileEditScreen` | `/clients/TrackOrderScreen` | `/clients/cart` | `/clients/components/BottomNavigation` | `/clients/home` | `/clients/login` | `/clients/notifications` | `/clients/onboarding` | `/clients/profile` | `/clients/shopProfile` | `/clients/shops` | `/clients/signup` | `/explore` | `/notifications` | `/profile` | `/sellers/ShopCreationScreen` | `/sellers/components/BottomNavigation` | `/sellers/home` | `/sellers/login` | `/sellers/onboarding` | `/sellers/orders` | `/sellers/products` | `/sellers/profile` | `/sellers/signup` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
