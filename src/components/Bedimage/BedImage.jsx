import React from 'react';
import Button from '../Button.jsx'

const BedImage = () => {
  return (
    <div className="bed-img bg-cover bg-center h-[510px]  mt-24"> 
    <div className='flex items-center justify-start pl-36 pt-36 '>
        <div className='bg-[#FFFFFFE5] '>
            <div className='flex flex-col items-start justify-center py-15 pl-32 pr-25'> 
              <div className='txt-color'>
                <h1 className='font-bold text-3xl'>BEDSHEET SETS</h1>
              </div>
              <div className='flex items-center gap-5 mt-6'>
                <h1 className='font-bold text-[28px] text-[#7B5136]'>$50.00</h1>
                <p className='font-bold text-[22px] text-[#7B5136]'>$220.00</p>
              </div>
              <div className='w-[312px] mt-4'>
                <p className='txt-color text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
              <div className='mt-4'>
                <Button className='primary border text-xs  '>VIEW DETAILS</Button>
              </div>
            </div>
        </div>

    </div>

    
    </div>
  );
};

export default BedImage;