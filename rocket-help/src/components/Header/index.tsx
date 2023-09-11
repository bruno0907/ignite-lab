import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, useTheme, Heading, StyledProps } from "native-base";
import { CaretLeft } from "phosphor-react-native";

type HeaderProps = StyledProps & {
  title: string;  
}

export function Header({ title, ...rest }: HeaderProps) {  
  const { colors } = useTheme()
  const navigation = useNavigation()

  function handleGoBack () {
    navigation.goBack()
  }
  
  return (
    <HStack
      w="full"      
      alignItems="center"
      justifyContent="space-between"
      bg="gray.600"
      pt="12"
      pb="6"      
      {...rest} 
    >
      <IconButton icon={<CaretLeft size="24" color={colors.gray['300']} />} mr="auto" onPress={handleGoBack} />
      <Heading         
        color="gray.100" 
        fontSize="lg" 
        textAlign="center"         
        ml="-10"
        mr="auto"        
      >
        {title}
      </Heading>
    </HStack>
  )
}