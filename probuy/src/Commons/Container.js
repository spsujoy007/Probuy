import React from 'react';

const ContainItem = ({children}) => {
  return (
    <div className='w-[1240px] mx-auto'>
            {children}
        </div>
  );
};

export default ContainItem;