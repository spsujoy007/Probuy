
import React, { useState } from 'react';
import chair from '../../assets/sofa.jpg'
import Image from 'next/image'
import ContainItem from '../../Commons/Container';

const HeroSection = () => {

  const [focusButton, setFocusButton] = useState(true)

    return (
        <div className='pt-20 md:h-[100vh]'>
          <div className='md:h-[80vh] flex items-center'>
            <ContainItem>
                <div className='flex lg:flex-row flex-col w-[1240px] '>
                  <div className='md:w-[55%] flex items-center'>
                    <div>
                        <h2 className='text-5xl lowercase leading-[60px] select-none'><span className='capitalize'>Prepare</span> to have Your mind <span className='text-4xl'>blown by the most mind bending  <span className='text-indigo-500 capitalize font-[600]'>ProBuy Product</span> of all time!</span> </h2>
                        <p className='text-xl mt-5'>Prepare to have your mind blown as you delve into the astonishing realm of the most mind-bending ProBuy product ever created. This innovative marvel will redefine your perception of what's possible. </p>

                        {/* action items  */}
                        <div className='mt-8 flex gap-x-3'>
                            <button 
                            onMouseEnter={() => setFocusButton(false)} 
                            onMouseLeave={() => setFocusButton(true)}
                            className={`text-md bg-indigo-500 text-white py-3 px-10 rounded-md hover:bg-white hover:text-indigo-500 border-2  border-indigo-500 select-none duration-500 ${focusButton ? 'btnShadow' : 'btnShadow2'}`}>Getting started</button>

                            <button className='text-md hover:bg-black hover:text-white py-3 px-10 rounded-md bg-white text-indigo-500 border-2  border-indigo-500 hover:border-black duration-500 select-none'>Shop now</button>
                        </div>
                    </div>
                  </div>
                  <div className='md:w-[45%] flex items-center justify-center h-[10%]'>
                    <Image className='w-[100%] select-none' src={chair}></Image>
                  </div>
                </div>
            </ContainItem>
          </div>
        </div>
    );
};

export default HeroSection;