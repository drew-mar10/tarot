import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from './Provider'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
