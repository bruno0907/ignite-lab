import { createNativeStackNavigator, NativeStackNavigationOptions  } from "@react-navigation/native-stack"

import { Home, Register, Details } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  const screenOptions: NativeStackNavigationOptions  = {
    headerShown: false
  }
  
  return (    
    <Navigator screenOptions={screenOptions}>
      <Screen name="home" component={Home} />        
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>    
  )
}