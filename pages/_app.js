import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from './AppContext'


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
