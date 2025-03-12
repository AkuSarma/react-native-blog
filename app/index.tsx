import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Auth from '../components/Auth'
import { View, Text, Button } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      <Auth />
      {session && session.user && <Text>{session.user.id}</Text>}

      <Text>Welcome to the Blog App</Text>
      <Button title="Get Started" onPress={() => router.push("/home")} />
    </View>
  );
}