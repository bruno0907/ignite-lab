import { Button as NativeBaseButton, IButtonProps } from 'native-base'
import { ReactNode } from 'react'

interface ButtonProps extends IButtonProps {
  children: ReactNode;
}

export function Button ({ children, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton 
      bg="green.700"       
      px="7" 
      py="4"       
      {...rest}
      _pressed={{ bg: 'green.500' }}
      _text={{ fontSize: 'md', fontWeight: 'bold' }}
    >
      {children}      
    </NativeBaseButton>
  )
}
