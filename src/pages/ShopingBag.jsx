import React from 'react'
import Header from '../components/header/Header'
import SliderCard from '../components/Card/SliderCard'
import Footer from '../components/Footer/Footer'
import img1 from '../assets/ShopingBag/Rectangle 83.png'
import img2 from '../assets/ShopingBag/Rectangle 96.png'

const ShopingBag = () => {
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
                                        <h1 className='font-medium text-[16px] txt-color'>Checked Duvet Cover Set</h1>
                                        <p className='font-medium text-[16px] txt-color mt-2'>39.99 $</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-10' >

                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-medium text-[16px] txt-color'>Checked Duvet Cover Set</h1>
                                        <p className='font-medium text-[16px] txt-color mt-2'>39.99 $</p>
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