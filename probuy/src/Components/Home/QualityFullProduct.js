import React from 'react';
import bagImg from '../../assets/bag.jpg'
import Image from 'next/image';

const QualityFullProduct = () => {
    return (
        <div className=''>
            <div className='mb-5'>
                <h1 className='text-center text text-4xl'>Lorem ipsum, <span className='text-indigo-500'>dolor sit amet</span> consectetur adipisicing elit.</h1>
                <p className='text-center mt-2 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className='bg-gradient-to-br from-[#F7F7F7] to-[#EDEFEF] rounded-xl overflow-hidden'>
                <Image className='w-[500px]' src={bagImg}></Image>
            </div>
        </div>
    );
};

export default QualityFullProduct;