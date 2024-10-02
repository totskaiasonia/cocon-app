import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeIcon from '@/assets/svg/navbar/HomeIcon';
import CatalogIcon from '@/assets/svg/navbar/CatalogIcon';
import OffersIcon from '@/assets/svg/navbar/OffersIcon';
import BasketIcon from '@/assets/svg/navbar/BasketIcon';
import AccountIcon from '@/assets/svg/navbar/AccountIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].inactiveTint,
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 20,
          borderTopColor: '#773D94',
          borderTopWidth: 1.5,
          paddingVertical: 5,
          height: 60,
          backgroundColor: "#fff",
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Catalog',
          tabBarIcon: ({ color, focused }) => (
            <CatalogIcon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: 'Offers',
          tabBarIcon: ({ color, focused }) => (
            <OffersIcon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: 'Basket',
          tabBarIcon: ({ color, focused }) => (
            <BasketIcon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <AccountIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
