import React from 'react'
import { useState } from 'react'
import Header from '../components/header/Header'
import SliderCard from '../components/Card/SliderCard'
import Footer from '../components/Footer/Footer'
import img1 from '../assets/ShopingBag/Rectangle 83.png'
import img2 from '../assets/ShopingBag/Rectangle 96.png'
import heart from '../assets/ShopingBag/Vector.png'


const ShopingBag = () => {

    const [selectedNumber, setSelectedNumber] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const numbers = [1, 2, 3, 4, 5];
  
    return (
        <div>

            <Header />

            <div className='px-18'>
                <div className='text-center mt-8 mb-13'>
                    <p className='lowercase font-normal '>HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM</p>
                </div>
                <div>

                    <div>
                        <h1 className='uppercase text-center font-medium text-[34px] txt-color'>Shopping bag</h1>
                    </div>
                    <div className='flex  items-center gap-10'>
                        <div className='flex  gap-4'>
                            <div className='flex-col '>
                                <div className='flex gap-4'>

                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div>

                                        <div className='mb-5'>
                                            <h1 className='font-medium text-[16px] txt-color'>Checked Duvet Cover Set</h1>
                                            <p className='font-medium text-[16px] txt-color mt-2'>39.99 $</p>
                                        </div>

                                        <div className='flex gap-10 ' >
                                            <div>
                                                <p className='font-light txt-color text-[14px]'>Art. No.: <span className='font-light txt-color text-[14px] ml-4'>54637253  </span></p>
                                            </div>
                                            <div>
                                                <p className='font-light txt-color text-[14px]'>Size: <span className='font-light txt-color text-[14px] ml-4'>21*45</span> </p>
                                            </div>
                                        </div>
                                        <div className='flex gap-10 ' >
                                            <div>
                                                <p className='font-light txt-color text-[14px]'>Color: <span className='font-light txt-color text-[14px] ml-4'>54637253  </span></p>
                                            </div>
                                            <div>
                                                <p className='font-light txt-color text-[14px]'>Mint: <span className='font-light txt-color text-[14px] ml-4'>39.99*45</span> </p>
                                            </div>
                                        </div>

                                        <div className='mt-4'>
                                            <img src={heart} alt="" className='p-2 border border-[#323334]' />
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div>

                            </div>
                        </div>

                        <div></div>
                    </div>

                </div>

                <div className='mt-30'>
                    <h1 className='font-medium text-[24px] txt-color'>Also You May Like</h1>
                </div>

            </div>
            <SliderCard />
            <Footer />
        </div>

    )
}

export default ShopingBag