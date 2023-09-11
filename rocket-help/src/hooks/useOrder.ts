import { useEffect, useState } from "react"

import firestore from '@react-native-firebase/firestore'
import { OrderProps } from "../screens";
import { dateFormat } from "../utils";
import { OrderFirestoreDTO } from "../DTOs";

type UseOrdersProps = {
  order: OrderProps;
  isLoading: boolean;
}

export function useOrder(orderId: string): UseOrdersProps {
  const [order, setOrder] = useState<OrderProps>(null)
  const [isLoading, setIsLoading] = useState(true)  

  useEffect(() => {  
    setIsLoading(true)   
    
    firestore()
    .collection<OrderFirestoreDTO>('orders')
    .doc(orderId)
    .get()
    .then(doc => {
      const { patrimony, description, status, solution, created_at, updated_at } = doc.data()

      setOrder({
        id: doc.id,
        patrimony,
        status,
        description,
        solution,
        createdAt: dateFormat(created_at),
        updatedAt: dateFormat(updated_at)
      })

      setIsLoading(false)
    })

  }, [orderId])

  return {
    order, isLoading
  }
}