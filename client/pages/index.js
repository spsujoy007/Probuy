import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Home/Header'
import MyHome from '@/Components/Home/Home'
import { useEffect } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='bg-white min-h-screen'>
      <Head>
        <title>Probuy</title>
      </Head>
      <Header></Header>
      <MyHome></MyHome>
    </div>
  )
}
