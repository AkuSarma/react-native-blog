import React from 'react';
import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome to the Blog App</Text>
      <Button title="Get Started" onPress={() => router.push('/home')} />
    </View>
  );
}
