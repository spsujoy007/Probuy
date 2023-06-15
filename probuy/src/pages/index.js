import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-[90vh] flex justify-center items-center'>
      <div>
        <h2 className='text-[200px] text-center'><span className='text-indigo-500'>DJ</span> SUJOY</h2>
        <p className='text-center text-3xl'>Let's do something <span className='text-indigo-500'>crazy</span> man</p>

        <div className='flex mt-10 justify-center gap-x-3 items-center'>
          <button className='bg-indigo-500 px-10 py-2 rounded-md  shadow-2xl  shadow-indigo-600 '>Sing a song with SP</button>

          <h3>OR</h3>

          <button className='bg-transparent px-10 py-2 rounded-md border-[1px] border-green-400'>Dance with SP</button>
        </div>
      </div>
    </div>
  )
}
