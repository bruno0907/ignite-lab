import { useNavigation, useRoute } from "@react-navigation/native";
import { HStack, ScrollView, Text, useTheme, useToast, VStack } from "native-base";
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass } from "phosphor-react-native";
import { Button, DetailsCard, Header, Input, Loading, Toast } from "../../components";
import { OrderProps } from "../Home";
import { useOrder } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { OrderFirestoreDTO } from '../../DTOs';

const schema = yup.object({
  solution: yup.string()
  .required('A solução é necessária')
  .min(6, 'A solução deve ter no mínimo 6 caracteres')
  .max(144, 'A solução deve ter no máximo 144 caracteres')
})

type RouteParams = {
  orderId: string
}

type CloseOrderProps = {
  solution: string;
}

export function Details () {
  const route = useRoute()
  const { orderId } = route.params as RouteParams
  const navigation = useNavigation()  
  const { colors } = useTheme()
  const toast = useToast()

  const {order, isLoading} = useOrder(orderId)  

  const { control, handleSubmit, setError, formState: { isSubmitting, errors }} = useForm<OrderProps>({
    resolver: yupResolver(schema)
  })

  const handleCloseOrder: SubmitHandler<Partial<CloseOrderProps>> = async ({ solution }) =>  {
    await firestore()
    .collection<OrderFirestoreDTO>('orders')
    .doc(orderId)    
    .update({
      status: 'closed',
      solution,
      updated_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      toast.show({
        render: () => <Toast variant="success">Solicitação finalizada com sucesso...</Toast>
      })
      navigation.goBack()
    })
    .catch(error => {
      console.log(error)
      toast.show({
        render: () => <Toast variant="error">Erro ao finalizar a solicitação...</Toast>
      })
    })
  }

  const isStatusOpen = order?.status === 'open'
  const colorType = isStatusOpen ? colors.secondary['700'] : colors.green['300']

  return (
    <VStack flex="1" bgColor="gray.700">

      <Header title="Solicitação" p="6" />

      <HStack w="full" bg="gray.500" p="3" alignItems="center" justifyContent="center" space="3"> 
        {isStatusOpen
          ? <Hourglass size="22" color={colorType} />
          : <CircleWavyCheck size="22" color={colorType} />
        }        
        <Text color={colorType} fontSize="sm" textTransform="uppercase" lineHeight="2xl">
          {isStatusOpen ? 'em andamento' : 'finalizado'}
        </Text>
      </HStack>

      {isLoading ? <Loading /> : (
        <ScrollView 
          flex="1" 
          bg="gray.700" 
          showsVerticalScrollIndicator={false} 
          _contentContainerStyle={{ p: '6' }}
        >
          <DetailsCard 
            title="equipamento"
            icon={DesktopTower}            
          >
            <Text fontSize="md" color="gray.100">Patrimônio {order.patrimony}</Text>
          </DetailsCard>

          <DetailsCard 
            title="descrição do problema"
            icon={ClipboardText}            
            footer={`Registrado em ${order?.createdAt}`}
          >
            <Text fontSize="md" color="gray.100">{order.description}</Text>
          </DetailsCard>

          <DetailsCard 
            title="solução"
            icon={CircleWavyCheck}            
            footer={!isStatusOpen && `Finalizado em ${order?.updatedAt}`}
          >        
            {order.solution ? (
              <Text fontSize="md" color="gray.100">{order.solution}</Text>
            ) : (
              <Input 
                name="solution"
                placeholder="Descrição da solução da solicitação"
                multiline
                h={24}
                textAlignVertical="top"
                control={control}
                isDisabled={isSubmitting}
                isError={errors?.solution}
              />           

            )}    
          </DetailsCard>

          {isStatusOpen && <Button 
            mt="auto" 
            isLoading={isSubmitting} 
            isLoadingText="Fechando solicitação..." 
            onPress={handleSubmit(handleCloseOrder)}
          >Finalizar</Button>}          

        </ScrollView>
      )}

    </VStack>
  )
}