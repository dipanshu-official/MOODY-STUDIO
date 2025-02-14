import React from 'react'
import img1 from '../../assets/Toprating/Rectangle 26.png'
import img2 from '../../assets/Toprating/Rectangle 27.png'
import img3 from '../../assets/Toprating/Rectangle 28.png'
import img4 from '../../assets/Toprating/Rectangle 29.png'
import img5 from '../../assets/Toprating/Rectangle 30.png'
import img6 from '../../assets/Toprating/Rectangle 31.png'
import img7 from '../../assets/Toprating/Rectangle 32.png'
import img8 from '../../assets/Toprating/Rectangle 33.png'
import img9 from '../../assets/Toprating/Rectangle 34.png'
import logo from '../../assets/Toprating/Vector.png'



const Topcreators = () => {
    const items = [
        {
            img: img1,
            category: "Tray",
            name: "with Foot",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img2,
            category: "Twill",
            name: "Seat Cushion",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img3,
            category: "Fluted Beverage",
            name: "Glass",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img4,
            category: "Ceramic",
            name: "Egg Cup",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img5,
            category: "Small",
            name: "Bamboo Box",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img6,
            category: "Metal Cutlery",
            name: "Basket",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img7,
            category: "4-pack Ceramic",
            name: "Cups",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img8,
            category: "2-pack Linen",
            name: "Napkins",
            rating: "☆☆☆☆☆",
            price: "30$"

        },
        {
            img: img9,
            category: "Glazed Stoneware",
            name: "Plate",
            rating: "☆☆☆☆☆",
            price: "30$"

        },

    ]


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16">
            <div>
                <h1 className='txt-color font-bold text-[34px]'>TOP RATING</h1>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12'>

                {items.map((item, index) => (
                    <div key={index} className='grid grid-cols-2 items-center'>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='p-8'>
                            <div>
                                <h1 className='txt-color font-bold text-lg'>
                                    <span className='block'>{item.category}</span>
                                    <span className='block'>{item.name}</span>
                                </h1>
                            </div>
                            <div>
                                <p className='font-bold text-[#F2C94C] text-2xl'>{item.rating}</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px] txt-color'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))


                }


            </div>


            <div className='flex items-center justify-center py-8 md:py-12'>
                <h1 className='bg-[#323334] py-3 px-8 md:py-4 md:px-24 text-white uppercase font-bold text-sm md:text-lg text-center w-full md:w-auto'>
                    load more products
                </h1>
            </div>

            <div className='flex items-center justify-between mb-27'>
                <div>
                    <h1 className='font-bold text-[22px] txt-color'>SING UP FOR THE NEWSLETTER</h1>
                    <p className='font-normal text-[15px] txt-color'>Subscribe for the latest stories and promotions</p>
                </div>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <input
                            type="email"
                            placeholder='Enter your e-mail address'
                            className='w-full md:w-96 px-4 py-3 border border-[#323334] rounded-none'
                        />
                    <div className='bg-[#323334] p-3 px-4'>

                    <img src={logo} alt="Logo" className='w-6 h-6 ml-2 bg-[#323334] ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topcreators
