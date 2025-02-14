import React from 'react'
import Button from '../Button'
import img1 from '../../assets/Main/image1.png'
import img2 from '../../assets/Main/image2.png'

const Main = () => {
    
    return (
        <div className='px-18'>
            <div className='grid grid-cols-2 justify-between items-center gap-5'>
                <div className='bg-[#FAFAFA]'>
                    <div className='flex items-center'>

                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className=' relative right-12 font-extrabold  text-[22px] txt-color '>INY VINTAGE CHAIR</h1>
                            <div>
                                <Button className='relative right-12 primary border border-[#323334] mt-10 '>VIEW DETAILS</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#EAE9E7]'>
                    <div className='flex items-center'>

                        <div className=''>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-[22px] txt-color '>
                                <span className='block'>LARGE TERRACOTA</span>
                                <span className='block'> VASE</span>
                            </h1>
                            <div>
                                <Button className='primary border border-[#323334] mt-10'>VIEW DETAILS</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    )
}

export default Main