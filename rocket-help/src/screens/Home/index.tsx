import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Heading, HStack, IconButton, VStack, FlatList, useTheme } from "native-base";
import { SignOut } from "phosphor-react-native";

import auth from '@react-native-firebase/auth'
import { Button, EmptyList, Filter, Loading, OrderItem } from "../../components";

import Logo from '../../assets/logo_secondary.svg'

import { useOrders } from "../../hooks";

export type OrderProps = {
  id: string;
  patrimony: string;
  description: string;
  solution?: string;
  status: 'open' | 'closed'
  createdAt: string
  updatedAt?: string,
}

export function Home () {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open') 
  const {orders, isLoading} = useOrders(statusSelected)
  
  const { colors } = useTheme()
  const navigation = useNavigation()
  
  function handleNavigateToDetails (id: string) {
    navigation.navigate('details', { orderId: id })
  }

  function handleNewOrder () {
    navigation.navigate('new')
  }

  async function handleSignOut () {
    await auth().signOut().catch(error => console.log(error))
  }

  return (
    <VStack flex="1" pb="6" bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt="12"
        pb="5"
        px="6"
      >
        <Logo />
        <IconButton 
          icon={<SignOut size="26" color={colors.gray['300']} />} 
          onPress={handleSignOut}
        />
      </HStack>
      <VStack flex="1" px="6">
        <HStack w="full" mt="8" mb="4" justifyContent="space-between" alignItems="center">
          <Heading color="gray.100" fontSize="lg">Meus chamados</Heading>
          <Text color="gray.200" fontSize="md">{orders?.length || '0'}</Text>
        </HStack>
        <HStack w="full" justifyContent="space-between" alignItems="center" space="3" mb="8">
          <Filter 
            type="open" 
            isActive={statusSelected === 'open'}
            onPress={() => setStatusSelected('open')}
          >em andamento</Filter>            
          <Filter 
            type="closed"
            isActive={statusSelected === 'closed'}
            onPress={() => setStatusSelected('closed')}
          >finalizados</Filter>
        </HStack> 
        {isLoading ? <Loading /> : (
          <FlatList
            data={orders}
            keyExtractor={(order) => order.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={() => (            
              <EmptyList>
                Você ainda não possui {'\n'} solicitações 
                { statusSelected === 'open' ? 'em aberto' : 'finalizadas'}
              </EmptyList>              
            )}
            renderItem={({ item }) => (
              <OrderItem 
                patrimony={item.patrimony} 
                when={item.createdAt} 
                status={item.status} 
                onPress={() => handleNavigateToDetails(item.id)}
              />
            )}          
          />        
        )}
        <Button onPress={handleNewOrder}>Nova solicitação</Button>
      </VStack>
    </VStack>
  )
}