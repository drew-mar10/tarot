import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TarotCards from './TarotCards'

export default function Index() {
  return (
    <div className={styles.container}>
      
      <TarotCards />

    </div>
  )
}
