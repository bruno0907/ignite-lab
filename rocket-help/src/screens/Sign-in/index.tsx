import React from "react";
import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from 'phosphor-react-native';
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { Input, Button } from "../../components";

import Logo from '../../assets/logo_primary.svg';

const schema = yup.object({
  email: yup.string().email('Formato de e-mail inválido').required('O e-mail é obrigatório'),
  password: yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('A senha é obrigatória'),
})

type SignInProps = {
  email: string;
  password: string;
}

export function SignIn () {
  const { colors } = useTheme()

  const { 
    control,
    handleSubmit, 
    setError,
    formState: { 
      errors, 
      isSubmitting 
    } 
  } = useForm<SignInProps>({
    resolver: yupResolver(schema)
  })

  const handleSignIn: SubmitHandler<SignInProps> = async ({ email, password }) => {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password)

      console.log(user)

    } catch (error) {
      console.log(error.message)
      if(error?.code === 'auth/user-not-found') {        
        setError('email', {
          message: 'E-mail não encontrado'
        })          
        return
      }

      if(error?.code === 'auth/wrong-password') {        
        setError('email', {
          message: 'E-mail ou senha inválidos'
        })          
        return
      }

      setError('email', {
        message: 'Não é possível acessar o sistema no momento'
      })    
    }
  }
  
  const handleSignInError: SubmitErrorHandler<SignInProps> = errors => console.log(errors)

  return (
    <VStack flex="1" alignItems="center" bg="gray.600" px="8" pt="24">
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt="20" mb="6">Acesse sua conta</Heading> 
      <Input   
        name="email" 
        control={control}     
        placeholder="E-mail"           
        InputLeftElement={<Icon as={<Envelope color={errors?.email ? colors.red['500'] : colors.gray['300']} />} ml="4" />} 
        isRequired
        isError={errors?.email}          
        keyboardType="email-address"
        autoCapitalize="none"
        isDisabled={isSubmitting}
        mb="4"
      />
      <Input   
          name="password" 
          control={control}     
          placeholder="Senha"           
          InputLeftElement={<Icon as={<Key color={errors?.password ? colors.red['500'] : colors.gray['300']} />} ml="4" />}
          secureTextEntry
          isRequired
          isError={errors?.password} 
          isDisabled={isSubmitting}     
          mb="8"    
        />      
      <Button
        w="full"
        isLoading={isSubmitting} 
        isLoadingText="Aguarde..."        
        onPress={handleSubmit(handleSignIn, handleSignInError)}
      >        
        Entrar        
      </Button>      
    </VStack>
  )
}