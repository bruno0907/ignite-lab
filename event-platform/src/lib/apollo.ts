import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_CLIENT_URI as string,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_APOLLO_CLIENT_AUTH_TOKEN as string}`
  },
  cache: new InMemoryCache(),  
})
