import React from 'react';
import logo1 from '../../assets/Footer/logo1.png';
import logo2 from '../../assets/Footer/logo2.png';
import logo3 from '../../assets/Footer/logo3.png';
import logo4 from '../../assets/Footer/logo4.png';

const Footer = () => {
    return (
        // Main footer container
        <div className='bg-[#323334]'>

            {/* Footer grid layout with 4 columns */}
            <div className='grid grid-cols-4 justify-center pt-12 pl-18 gap-30 pr-40 pb-17 text-white'>
                
                {/* Company information section */}
                <div>
                    <div>
                        <h1 className='font-bold text-[28px]'>URBAN OUTFITTERS</h1>
                    </div>
                    <div className='mt-10'>
                        <p className='text-[#FFFFFF80] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className='mt-10 font-bold text-[16px]'>
                        <p>121 king street, Melbourne 3000</p>
                        <p>+61 3 8376 6284</p>
                        <p>+61 3 8376 6284</p>
                    </div>
                    {/* Social media icons */}
                    <div className='flex items-center justify-start gap-18 mt-13'>
                        <img src={logo1} alt='' />
                        <img src={logo2} alt='' />
                        <img src={logo3} alt='' />
                        <img src={logo4} alt='' />
                    </div>
                </div>

                {/* Shopping section */}
                <div>
                    <h1 className='font-bold text-[16px]'>SHOPPING</h1>
                    <ul className='text-[#FFFFFF80] text-[16px] mt-8'>
                        <li>Your cart</li>
                        <li>Your orders</li>
                        <li>Compared items</li>
                        <li>Wishlist items</li>
                        <li>Shipping detail</li>
                    </ul>
                </div>
                
                {/* Additional links section */}
                <div>
                    <h1 className='font-bold text-[16px]'>MORE LINK</h1>
                    <ul className='text-[#FFFFFF80] text-[16px] mt-8'>
                        <li>Blog</li>
                        <li>Gift Center</li>
                        <li>Buying Guides</li>
                        <li>New Arrivals</li>
                        <li>Clearance</li>
                    </ul>
                </div>
                
                {/* Blog posts section */}
                <div>
                    <h1 className='font-bold text-[16px]'>FROM THE BLOG</h1>
                    <div className='text-[#FFFFFF80] text-[16px] mt-8'>
                        {/* First blog post */}
                        <div className='flex items-center gap-2'>
                            <p>26</p>
                            <p>May</p>
                        </div>
                        <div className='font-[300px] text-sm mt-2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='mt-2'>3 comments</p>
                        </div>
                        <div class='h-[2px] bg-[#FFFFFF80] w-full my-4'></div>
                        {/* Second blog post */}
                        <div className='flex items-center gap-2'>
                            <p>26</p>
                            <p>May</p>
                        </div>
                        <div className='font-[300px] text-sm mt-2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='mt-2'>3 comments</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className='bg-[#222222] w-full py-4'>
                <p className='font-light text-[14px] text-white text-center'>Urban Outfitters © – All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
