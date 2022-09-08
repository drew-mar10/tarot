import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TarotCards from './TarotCards'
import { Box } from '@chakra-ui/react'
import Landing from './Landing'
import Spread from './Spread'
import Card from '../components/Card'

export default function Index() {
  return (
    <>
    <Landing />
    </>
  )
}
