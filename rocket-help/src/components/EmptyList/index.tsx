import { ReactNode } from "react";

import { Center, Heading, useTheme } from "native-base";
import { ChatTeardropText } from "phosphor-react-native";

type EmptyListProps = {
  children: ReactNode;
}

export function EmptyList ({ children }: EmptyListProps) {
  const { colors} = useTheme()

  return (
    <Center>
      <ChatTeardropText color={colors.gray['400']} size="40" />
      <Heading color={colors.gray['300']} fontWeight="normal" mt="6" textAlign="center">
        {children}
      </Heading>
    </Center>
  )
}