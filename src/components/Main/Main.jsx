import React from 'react'
import Button from '../Button'
import img1 from '../../assets/Main/image1.png'
import img2 from '../../assets/Main/image2.png'

const Main = () => {

    return (
        <div className='px-4 md:px-8 lg:px-18'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {/* First Item */}
                <div className='bg-[#FAFAFA] p-5 rounded-lg'>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                        <div className='w-full md:w-auto'>
                            <img src={img1} alt="INY VINTAGE CHAIR" className="w-full md:w-auto" />
                        </div>
                        <div className='text-center md:text-left'>
                            <h1 className='font-extrabold text-[20px] md:text-[22px] txt-color'>INY VINTAGE CHAIR</h1>
                            <div className='mt-6'>
                                <Button className='primary border border-[#323334]'>VIEW DETAILS</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Item */}
                <div className='bg-[#EAE9E7] p-5 rounded-lg'>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                        <div className='w-full md:w-auto'>
                            <img src={img2} alt="LARGE TERRACOTA VASE" className="w-full md:w-auto" />
                        </div>
                        <div className='text-center md:text-left'>
                            <h1 className='font-bold text-[20px] md:text-[22px] txt-color'>
                                <span className='block'>LARGE TERRACOTA</span>
                                <span className='block'>VASE</span>
                            </h1>
                            <div className='mt-6'>
                                <Button className='primary border border-[#323334]'>VIEW DETAILS</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main