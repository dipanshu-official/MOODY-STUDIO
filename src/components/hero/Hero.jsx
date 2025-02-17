import React from 'react'
import img1 from '../../assets/Hero/Vector.png'
import img2 from '../../assets/Hero/Vector1.png'
import img3 from '../../assets/Hero/Vector2.png'
import chair from '../../assets/Hero/image2.png'
import Button from '../Button'

const Hero = () => {
    return (
        <div className='min-h-screen mt-9 px-4 md:px-8 hidden md:block'>
            {/* Header Section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center md:flex items-center justify-evenly'>
                <div className='flex items-center gap-2 justify-center'>
                    <img src={img1} alt="Free Shipping" className="w-6 h-6" />
                    <p className='text-[#000000] opacity-50 text-sm font-bold'>FREE SHIPPING</p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <img src={img2} alt="Money Back" className="w-6 h-6" />
                    <p className='text-[#000000] opacity-50 text-sm font-bold'>100% MONEY BACK</p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <img src={img3} alt="Support 24/7" className="w-6 h-6" />
                    <p className='text-[#000000] opacity-50 text-sm font-bold'>SUPPORT 24/7</p>
                </div>
            </div>

            {/* Hero Section */}
            <div className='border border-black mt-6 bg-[#DBD0CC] bg-opacity-80 p-6 rounded-lg'>
                <div className='flex flex-col md:flex-row items-center'>
                    {/* Image */}
                    <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
                        <img src={chair} alt="Chair" className="w-3/4 md:w-auto" />
                    </div>

                    {/* Text Content */}
                    <div className='text-center md:text-left mt-6 md:mt-0'>
                        <h3 className='font-bold txt-color text-lg md:text-xl'>HOT DEALS THIS WEEK</h3>
                        <h1 className="font-extrabold text-[#A86A3D] text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3">
                            <span className="block">SALE UP 50%</span>
                            <span className="block">MODERN FURNITURE</span>
                        </h1>
                        <div className='mt-6 flex justify-center md:justify-start'>
                            <Button className='primary border border-[#323334]'>VIEW NOW</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
