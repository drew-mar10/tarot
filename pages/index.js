import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TarotCards from '../components/TarotCards'
import { Box } from '@chakra-ui/react'
import Deck from '../components/Deck'

export default function Index() {
  return (
    <Box
    sx={{
      backgroundImage: 'url(/Clouds.jpg)',
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      maxWidth: '100%',
      width: '100vh',
      minHeight: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: "relative",
      overflow: 'scroll',
      }}
    >
        <TarotCards />

    </Box>
  )
}
