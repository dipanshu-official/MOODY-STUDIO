import React from 'react';
import Button from '../Button.jsx';

const BedImage = () => {
  return (
    <div className="bed-img bg-cover bg-center h-[510px] mt-24 flex items-center justify-center px-4">
      <div className='bg-[#FFFFFFE5] p-6 md:p-10 max-w-lg w-full text-center md:text-left'>
        <div className='txt-color'>
          <h1 className='font-bold text-2xl md:text-3xl'>BEDSHEET SETS</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5 mt-4 md:mt-6'>
          <h1 className='font-bold text-[24px] md:text-[28px] text-[#7B5136]'>$50.00</h1>
          <p className='font-bold text-[18px] md:text-[22px] text-[#7B5136] line-through'>$220.00</p>
        </div>
        <div className='w-full md:w-[312px] mt-4 hidden md:block'>
          <p className='txt-color text-sm font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className='mt-4 flex justify-center md:justify-start'>
          <Button className='primary border text-xs'>VIEW DETAILS</Button>
        </div>
      </div>
    </div>
  );
};

export default BedImage;
