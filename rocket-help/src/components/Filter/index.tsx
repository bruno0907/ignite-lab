import { IButtonProps, Button, useTheme } from "native-base";
import { ReactNode } from "react";


type FilterProps = IButtonProps & {
  isActive?: boolean;
  type: 'open' | 'closed';
  children: ReactNode;
}

export function Filter({ isActive = false, type, children, ...rest }: FilterProps) {
  const { colors } = useTheme()

  const colorType = type === 'open' ? colors.secondary['700'] : colors.green['300']  

  return (
    <Button
      variant="outline"
      bg="gray.600"
      borderColor={ isActive ? colorType : "gray.600" }
      flex="1"
      px="12px"
      py="8px"
      _text={{
        textTransform: 'uppercase',
        fontSize: 'xs',
        color: isActive ? colorType : 'gray.300',
        lineHeight: '2xl'
      }}
      {...rest}
    >{children}</Button>
  )
}