
import React, { useState } from 'react';
import Image from 'next/image'
import chair from '../../assets/sofawbg.png'
import Head from 'next/head';
import ContainDiv from '../Common/ContainDiv';
import StartingDiv from '../Common/StartingDiv';

const HeroSection = () => {

  const [focusButton, setFocusButton] = useState(true)

    return (
        <StartingDiv>
            <ContainDiv>
            <div className='bg-indigo-100 px-12 py-2 rounded-xl mt-5 min-h-[50vh] flex items-center heroBanner'>
              <div className='w-[50%]'>
                <h3 className='text-2xl uppercase text-indigo-500 font-bold'>Colorful accessories</h3>
                <h2 className='text-5xl uppercase font-bold mt-1'>Super creative <br /> products</h2>
                <p className='mt-3 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatum, inventore consequatur tempore illum perferendis rem ratione.</p>
              </div>
            </div>
            </ContainDiv>
        </StartingDiv>
    );
};

export default HeroSection;