/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cart` | `/(tabs)/explore` | `/(tabs)/notifications` | `/(tabs)/profile` | `/_sitemap` | `/cart` | `/clients/DeliveryScreen` | `/clients/PaymentScreen` | `/clients/ProductScreen` | `/clients/TrackOrderScreen` | `/clients/cart` | `/clients/components/BottomNavigation` | `/clients/home` | `/clients/login` | `/clients/notifications` | `/clients/onboarding` | `/clients/profile` | `/clients/shopProfile` | `/clients/shops` | `/clients/signup` | `/explore` | `/notifications` | `/profile` | `/sellers/onboarding` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
