import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TarotCards from '../components/TarotCards'
import { Box, Toast } from '@chakra-ui/react'
import Landing from './Landing'
import Spread from './Spread'

export default function Index() {
  return (
    <>

    <Landing />

    <Box
    sx={{
      backgroundImage: 'url(/clouds.jpg)',
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      // backgroundPosition: 'center',
      // backgroundAttachment: 'fixed',
      // maxWidth: '100%',
      // width: '100vh',
      // minHeight: '100vw',
      // height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: "relative",
      overflow: 'scroll',
      }}
    >

        <Spread />
        {/* <CardDeck /> */}

    </Box>
    </>
  )
}
