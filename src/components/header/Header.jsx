import React from 'react'
import img1 from '../../assets/Header/Vector.png'
import img2 from '../../assets/Header/Group 40.png'
import img3 from '../../assets/Header/Group 43.png'
import img4 from '../../assets/Header/Group.png'
const Header = () => {
    return (
        <div className='pt-6 px-[72px] '>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold txt-color'>MOODY STUDIO</h1>
                </div>
                <div>
                    <div className='flex items-center justify-center gap-9'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
            <div class="h-[1px] bg-[#323334] w-3/4 sm:w-2/3 md:w-2/2 lg:w-3/3 mx-auto mt-5"></div>

            
            {/* navbar section  */}


            <div className=''>
                <ul className='flex justify-center items-center txt-color gap-17 font-bold my-9'>
                    <li>HOME</li>
                    <li>STORE</li>
                    <li>ACCESSORIES</li>
                    <li>BRAND</li>
                    <li>PAGES</li>
                    <li>ABOUT US</li>
                    <li>NEWS</li>
                    <li>CONTACT US </li>

                </ul>
                <div class="h-[1px] bg-[#323334] w-3/4 sm:w-2/3 md:w-2/2 lg:w-3/3 mx-auto my-5"></div>

            </div>
        </div>
    )
}

export default Header