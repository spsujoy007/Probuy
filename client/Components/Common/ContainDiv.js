import React from 'react';

const ContainDiv = ({children}) => {
    return (
        <div className='md:max-w-[1240px] mx-auto'>
            {children}
        </div>
    );
};

export default ContainDiv;