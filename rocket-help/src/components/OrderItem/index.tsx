import { HStack, VStack, Heading, Text, useTheme, Circle, Pressable, IPressableProps } from "native-base";
import { CircleWavyCheck, Hourglass, ClockAfternoon } from "phosphor-react-native";
import { OrderProps } from "../../screens";

type OrderItemProps = IPressableProps & {
  patrimony: string;
  status: string;
  when: string;  
}

export function OrderItem ({ patrimony, status, when, onPress, ...rest }: OrderItemProps) {
  const { colors } = useTheme()  

  const isStatusOpen = status === 'open'
  const isStatusOpenColor = isStatusOpen ? colors.secondary['700'] : colors.green['300']  

  return (    
    <Pressable onPress={onPress} {...rest}>
      <HStack       
        bg="gray.600"
        borderLeftWidth="8"  
        borderLeftColor={isStatusOpenColor}
        borderRadius="sm"
        p="5"
        alignItems="center"
        justifyContent="space-between"
        mb="4"
        overflow="hidden"
      >
        <VStack space="1">
          <Heading fontSize="md" color="gray.100">Patrimônio {patrimony}</Heading>
          <HStack space="1" alignItems="center">
            <ClockAfternoon size="15" color={colors.gray['300']} />          
            <Text color="gray.300" fontSize="xs" lineHeight="2xl">{when}</Text>
          </HStack>
        </VStack>

        <Circle w="12" h="12" bg="gray.500">
          {isStatusOpen 
            ? <Hourglass size="24" color={isStatusOpenColor} />
            : <CircleWavyCheck size="24" color={isStatusOpenColor}/> 
          }        
        </Circle>
      </HStack>
    </Pressable>
  )
}