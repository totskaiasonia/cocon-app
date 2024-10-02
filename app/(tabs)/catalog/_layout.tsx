import React from 'react';
import { Stack } from 'expo-router';

export default function CatalogLayout() {
  return (
    <Stack initialRouteName='index' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
