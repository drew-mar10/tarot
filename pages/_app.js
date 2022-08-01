import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from './AppContext'
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import Landing from './Landing';


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <ChakraProvider>
      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
      > */}
        <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
