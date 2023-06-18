
import React from 'react';
import chair from '../../assets/sofa.jpg'
import Image from 'next/image'
import ContainItem from '../../Commons/Container';

const HeroSection = () => {
    return (
        <div className='pt-20'>
            <ContainItem>
                <div className='flex '>
                  <div className='w-[55%] flex items-center'>
                    <div>
                        <h2 className='text-5xl lowercase leading-[60px]'><span className='capitalize'>Prepare</span> to have Your mind blown by the most mind-bending <span className='text-indigo-500'>ProBuy Product</span> of all time!</h2>
                        <p className='text-xl mt-5'>Prepare to have your mind blown as you delve into the astonishing realm of the most mind-bending ProBuy product ever created. This innovative marvel will redefine your perception of what's possible. </p>
                    </div>
                  </div>
                  <div className='w-[45%] flex items-center justify-center h-[10%]'>
                    <Image className='w-[100%]' src={chair}></Image>
                  </div>
                </div>
            </ContainItem>
        </div>
    );
};

export default HeroSection;