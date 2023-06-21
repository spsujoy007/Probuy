
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
            <div className='bg-indigo-100'>
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatum, inventore consequatur tempore illum perferendis rem ratione dolorum quaerat id nesciunt possimus omnis officiis impedit.</p>
            </div>
            </ContainDiv>
        </StartingDiv>
    );
};

export default HeroSection;