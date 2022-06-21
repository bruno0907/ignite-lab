import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache()
})

console.log(import.meta.env.VITE_APP_APOLLO_CLIENT_URI)