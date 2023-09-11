import { ReactNode } from "react";
import { Box, IBoxProps, StyledProps, Text, useTheme } from "native-base";

type ToastProps = IBoxProps & {
  variant?: 'success' | 'error' | 'warning'
  children: ReactNode;
}

export function Toast ({ variant, children, ...rest }: ToastProps) {
  const { colors } = useTheme()

  const colorType = 
    variant === 'success' ? colors.primary['700'] 
    : variant === 'error' ? colors.red['500'] 
    : variant === 'warning' ? colors.secondary['700'] 
    : colors.gray['300']

  return (
    <Box 
      bg="gray.600" 
      p="5" 
      borderRadius="sm" 
      borderLeftWidth={variant ? "8" : '0'} 
      borderLeftColor={colorType}
      {...rest}
    >            
      <Text 
        fontSize="md" 
        color="gray.100" 
        fontWeight="medium"
      >
        {children}
      </Text>
    </Box>
  )
}