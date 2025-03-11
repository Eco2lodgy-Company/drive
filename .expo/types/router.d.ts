/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cart` | `/(tabs)/explore` | `/(tabs)/notifications` | `/(tabs)/profile` | `/_sitemap` | `/cart` | `/clients/home` | `/clients/login` | `/clients/onboarding` | `/clients/productCard` | `/clients/signup` | `/explore` | `/notifications` | `/profile` | `/sellers/onboarding` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
