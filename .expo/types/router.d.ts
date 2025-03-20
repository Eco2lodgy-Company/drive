/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cart` | `/(tabs)/explore` | `/(tabs)/notifications` | `/(tabs)/profile` | `/LocationContext` | `/_sitemap` | `/cart` | `/clients/DeliveryScreen` | `/clients/OrdersScreen` | `/clients/PaymentScreen` | `/clients/ProductScreen` | `/clients/ProfileEditScreen` | `/clients/TrackOrderScreen` | `/clients/cart` | `/clients/components/BottomNavigation` | `/clients/home` | `/clients/notifications` | `/clients/onboarding` | `/clients/profile` | `/clients/shopOption` | `/clients/shopProfile` | `/clients/shops` | `/clients/signup` | `/deliverer` | `/deliverer/components/DeliveryCard` | `/deliverer/components/StatusToggle` | `/deliverer/home` | `/deliverer/screens/historique` | `/deliverer/screens/profile` | `/explore` | `/login` | `/notifications` | `/profile` | `/sellers/ShopCreationScreen` | `/sellers/addProduct` | `/sellers/components/BottomNavigation` | `/sellers/editProduct` | `/sellers/home` | `/sellers/login` | `/sellers/onboarding` | `/sellers/orders` | `/sellers/ordersDetails` | `/sellers/products` | `/sellers/profile` | `/sellers/signup` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
