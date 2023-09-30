import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/tailwind.css'
import { ThemeProvider } from '@material-tailwind/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4001/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
)
