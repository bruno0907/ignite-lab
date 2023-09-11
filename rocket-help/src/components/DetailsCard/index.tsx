
import { ReactNode } from "react";
import { VStack, HStack, Divider, Text, useTheme } from "native-base";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import { IconProps } from "phosphor-react-native";

type DetailsCardProps = IVStackProps & {
  title: string;
  icon: React.ElementType<IconProps>;  
  footer?: string;  
  children?: ReactNode;
}

export function DetailsCard ({ title, icon: Icon, footer = null, children, ...rest }: DetailsCardProps) {
  const { colors } = useTheme()

  return (
    <VStack p="5" bg="gray.600" borderRadius="sm" space="5" mb="5" {...rest}>
      <HStack space="2" alignItems="center">
        <Icon size="20" color={colors.primary['700']} />
        <Text color="gray.300" fontSize="sm" textTransform="uppercase">{title}</Text>
      </HStack>
      {children}
      { footer && (
        <>
          <Divider bg="gray.500" />
          <Text color="gray.300" fontSize="sm">{footer}</Text>
        </>
      )}
    </VStack>
  )
}