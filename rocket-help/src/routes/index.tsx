import { useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { SignIn } from '../screens'
import { AppRoutes } from './app.routes'

export function Routes () {
  const [user, setUser] = useState<FirebaseAuthTypes.User>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(response => setUser(response))

    return subscriber
  }, [])
  return (
    <NavigationContainer>
      { !user ? <SignIn /> : <AppRoutes /> }
    </NavigationContainer>
  )
}