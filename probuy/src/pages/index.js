import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/Components/Home/Home'
import Header from '@/Components/Home/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout() {
  return (
    <div className='bg-white'>
      <div className='min-h-[100vh]'>
        <Header></Header>
        <Home></Home>
      </div>
    </div>
  )
}
