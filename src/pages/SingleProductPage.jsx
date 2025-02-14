import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import img1 from '../assets/SingleProduct/Rectangle 82.png'
import img2 from '../assets/SingleProduct/Rectangle 83.png'
import img3 from '../assets/SingleProduct/Rectangle 97.png'
import SliderCard from '../components/Card/SliderCard'
const SingleProductPage = () => {
    return (
        <div>

            <Header />
            <div className='text-center mt-8 mb-13'>
                <p className='lowercase font-normal '>HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM</p>
            </div>
            <div className='px-18'>

                <div className='flex  items-center'>
                    <div className='flex-1'>
                        <div className='grid grid-cols-2 items-center'>
                            <div>
                                <img src={img2} alt="" />
                            </div>
                            <div><img src={img1} alt="" /></div>
                        </div>

                        <div className='mt-10'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='mt-10 bg-[#F0EFED]'>
                            <div className='py-14 px-18'>
                                <div>
                                    <h1 className='font-light text-[#FE1313]'>Conscious</h1>
                                    <p className='mt-3'>Twin duvet cover set in soft, woven fabric made from a Tencel™lyocell and cotton blend with a printed pattern. One pillowcase. Thread count 144.</p>
                                </div>
                                <div className='mt-3'>
                                    <p>Composition — <span className='font-light  txt-color'>Cotton 50%, Lyocell 50%</span></p>
                                    <p>Art. No. — <span className='font-light  txt-color'>0643448004</span></p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <aside className='w-110'>

                    </aside>
                </div>
                <div className='mt-30'>
                    <h1 className='font-medium text-[24px] txt-color'>Also You May Like</h1>
                </div>
                <SliderCard />
            </div>
            <Footer />
        </div>
    )
}

export default SingleProductPage