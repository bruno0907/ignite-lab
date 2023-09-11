import { useEffect, useState } from "react"

import firestore from '@react-native-firebase/firestore'
import { OrderProps } from "../screens";
import { dateFormat } from "../utils";
import { OrderFirestoreDTO } from "../DTOs";

type UseOrdersProps = {
  orders: OrderProps[];
  isLoading: boolean;
}

export function useOrders(statusSelected: string): UseOrdersProps {
  const [orders, setOrders] = useState<OrderProps[]>(null)
  const [isLoading, setIsLoading] = useState(true)  

  useEffect(() => {  
    setIsLoading(true)      

    const subscriber = firestore()
    .collection<OrderFirestoreDTO>('orders')
    .where('status', '==', statusSelected)
    .onSnapshot(snapshot => {
      const data: OrderProps[] = snapshot.docs.map(doc => {
        const { patrimony, description, solution, status, created_at, updated_at } = doc.data()

        return {
          id: doc.id,
          patrimony,
          description,  
          solution,                  
          status,
          createdAt: dateFormat(created_at),
          updatedAt: dateFormat(updated_at)
        }
      })
      setOrders(data)
      setIsLoading(false)
    })
    
    return subscriber    

  }, [statusSelected])

  return {
    orders, isLoading
  }
}