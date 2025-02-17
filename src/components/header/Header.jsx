import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import img1 from '../../assets/Header/Vector.png';
import img2 from '../../assets/Header/Group 40.png';
import img3 from '../../assets/Header/Group 43.png';
import img4 from '../../assets/Header/Group.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='pt-6 px-6 md:px-[72px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold txt-color'>MOODY STUDIO</h1>

                <div className='flex md:items-center items-end  gap-9'>
                    <img src={img1} alt="" className='hidden md:block' />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" className='hidden md:block' />

                    {/* Hamburger Icon */}
                    <div className='md:hidden'>
                        {isOpen ? (
                            <X size={30} className='cursor-pointer' onClick={() => setIsOpen(false)} />
                        ) : (
                            <Menu size={30} className='cursor-pointer' onClick={() => setIsOpen(true)} />
                        )}
                    </div>
                </div>
            </div>
            <div className='h-[1px] hidden md:block bg-[#323334] w-3/4 sm:w-full mx-auto mt-5'></div>

            {/* Navbar Section */}
            <div className='hidden md:flex justify-center items-center txt-color gap-9 font-bold my-9'>
                <ul className='flex gap-9'>
                    <li>HOME</li>
                    <li>STORE</li>
                    <li>ACCESSORIES</li>
                    <li>BRAND</li>
                    <li>PAGES</li>
                    <li>ABOUT US</li>
                    <li>NEWS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden flex flex-col items-center gap-6 bg-gray-900 text-white py-5 rounded-lg'>
                    <ul className='flex flex-col items-center gap-6 font-bold'>
                        <li>HOME</li>
                        <li>STORE</li>
                        <li>ACCESSORIES</li>
                        <li>BRAND</li>
                        <li>PAGES</li>
                        <li>ABOUT US</li>
                        <li>NEWS</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            )}
            <div className='h-[1px] hidden md:block bg-[#323334] w-full sm:w-full mx-auto my-5'></div>
        </div>
    );
};

export default Header;
