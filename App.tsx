import Routes from './src/routes'
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex:0}}/>
      <Routes />
    </NavigationContainer>

  )
}