import React, { useState } from 'react';
import { FormControl, Input as NativeBaseInput, IInputProps, IconButton, useTheme } from 'native-base';
import { Eye, EyeSlash, WarningCircle } from 'phosphor-react-native';
import { FieldError, useController } from 'react-hook-form';

type InputProps = IInputProps & {
  control: any;
  name: string;
  isError?: FieldError;  
  mb?: string | number;  
};

export function Input ({ control, name, secureTextEntry, isError, mb, ...rest }: InputProps) {
  const [isSecureText, setIsSecureText] = useState(secureTextEntry)

  const { colors } = useTheme()

  const { field: { value, onChange }} = useController({
    name,
    defaultValue: '',
    control
  })
  
  const handleIsSecureText = () => setIsSecureText(!isSecureText)

  return (    
    <>
      <FormControl isInvalid={!!isError} mb={mb} flex={rest.flex}>
        <NativeBaseInput   
          type={isSecureText ? 'password' : 'text'}        
          bgColor="gray.700" 
          borderColor="gray.900"
          color="gray.200"
          fontSize="md"   
          fontFamily="body"
          py="4"
          placeholderTextColor="gray.300"
          InputRightElement={
            secureTextEntry && <IconButton 
            _icon={{ as: isSecureText ? <Eye color={colors.gray['300']} /> : <EyeSlash color={colors.green['500']} /> }}      
            _pressed={{ bgColor: 'transparent' }}
            onPress={handleIsSecureText}
            mr="2"            
            />        
          }
          onChangeText={onChange}
          value={value}
          _focus={{ borderColor: 'green.500'}}
          {...rest}     
        />      
        {isError && (
          <FormControl.ErrorMessage leftIcon={<WarningCircle color={colors.red['500']} />}>
            {isError.message}
          </FormControl.ErrorMessage>
        )}
      </FormControl>      
    </>
  )
}
