import React from 'react'
import img1 from '../../assets/Hero/Vector.png'
import img2 from '../../assets/Hero/Vector1.png'
import img3 from '../../assets/Hero/Vector2.png'
import chair from '../../assets/Hero/image2.png'
import Button from '../Button'


const Hero = () => {
    return (
        <div className='min-h-screen mt-9'>
            <div className='flex items-center justify-evenly'>
                <div className='flex items-center gap-4 justify-center'>
                    <img src={img1} alt="" />
                    <p className='text-[#000000] opacity-50 text-xs font-bold '>FREE SHIPPING</p>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <img src={img2} alt="" />
                    <p className='text-[#000000] opacity-50 text-xs font-bold '>100% MONEY BACK</p>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <img src={img3} alt="" />
                    <p className='text-[#000000] opacity-50 text-xs font-bold '>SUPPORT 24/7</p>
                </div>

            </div>
            <div className='border border-black mt-3'>
                <div style={{ backgroundColor: 'rgba(219, 208, 204, 0.8)' }} className='  '>
                    <div className='flex items-center '>
                        <div className='pl-18 pt-16 pb-17 pr-16'>
                            <img src={chair} alt="" />
                        </div>
                        <div>
                            <div>

                                <h3 className='font-bold txt-color '>HOT DEALS THIS WEEK</h3>
                            </div>
                            <div className='mt-6'>
                                <h1 className="font-extrabold text-[#A86A3D]  text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    <span className="block">SALE UP 50%</span>
                                    <span className="block">MODERN FURNITURE</span>
                                </h1>
                            </div>
                            <div>
                                <Button className='primary border border-[#323334] mt-10'>VIEW NOW</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero