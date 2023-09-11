import { VStack, useToast } from "native-base";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Header, Input, Toast } from "../../components";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';


type RegisterProps = {
  patrimony: string;
  description: string;
}

const schema = yup.object({
  patrimony: yup.string().min(6, 'O patrimônio deve conter no mínimo 6 caracteres').required('O patrimônio é obrigatório'),
  description: yup.string().min(6, 'A descrição deve conter no mínimo 6 caracteres').required('A descrição é obrigatória')
})

export function Register () {
  const navigation = useNavigation()
  const toast = useToast()

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterProps>({
    resolver: yupResolver(schema)
  })

  const handleRegister: SubmitHandler<RegisterProps> = async ({ patrimony, description }) => {
    try {      
      await firestore()
      .collection('orders')
      .add({
        patrimony,
        description,        
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp(),        
      })

      toast.show({
        render: () => <Toast variant="success">Solicitação registrada com sucesso.</Toast>
      })

      navigation.goBack()      
    } catch (error) {      
      toast.show({        
        render: () => <Toast variant="error">Erro ao registrar a solicitação</Toast>
      })
    }
  }

  const handleRegisterError: SubmitErrorHandler<RegisterProps> = async errors => console.log(errors)   

  return (
    <VStack flex="1" p="6" bg="gray.600">
      <Header title="Nova solicitação" />
      <Input 
        name="patrimony"
        placeholder="Número do patrimônio"
        mb="4"
        control={control}
        isError={errors.patrimony}
        isDisabled={isSubmitting}
      />
      <Input 
        name="description"
        placeholder="Descrição do problema"
        mb="5"
        multiline
        flex="1"
        textAlignVertical="top"
        control={control}
        isError={errors.description}
        isDisabled={isSubmitting}
      />      
      <Button 
        isLoading={isSubmitting} 
        isLoadingText="Enviando" 
        onPress={handleSubmit(handleRegister, handleRegisterError)}
      >Cadastrar</Button>
    </VStack>
  )
}