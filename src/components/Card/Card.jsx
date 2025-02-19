import React from 'react'
import image1 from '../../assets/Card/Rectangle1.png'
import image2 from '../../assets/Card/Rectangle2.png'
import image3 from '../../assets/Card/Rectangle3.png'
import image4 from '../../assets/Card/Rectangle4.png'
import image5 from '../../assets/Card/Rectangle5.png'
import image6 from '../../assets/Card/Rectangle6.png'
import image7 from '../../assets/Card/Rectangle7.png'
import image8 from '../../assets/Card/Rectangle8.png'
import SliderCard from './SliderCard'


const Card = () => {
    const iteams = [
        {
            img: image1,
            name: "LINEN BEACH TOWEL",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image2,
            name: "LINEN BEACH TOWEL",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image3,
            name: "Square Clear Glass Box",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image4,
            name: "4-pack Small Ceramic Plates",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image5,
            name: "Large Clear Glass Box",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image6,
            name: "Round Jute Placemat",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image7,
            name: "Metal Wire Basket",
            raiting: "★★★★☆",
            price: "30$"
        },
        {
            img: image8,
            name: "LINEN BEACH TOWEL",
            raiting: "★★★★☆",
            price: "30$"
        },
    ]
    return (
        <div>

            <div className='px-4 sm:px-6 md:px-8 mt-8 md:block hidden'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>

                    {/* image hover */}
                  




                    {iteams.map((iteam, index) => (
                        <div>

                            <div key={index} className="relative group w-full cursor-pointer">
                                {/* Image */}
                                <img
                                    src={iteam.img}
                                    alt={iteam.name}
                                    className="w-full h-[300px] object-cover group-hover:h-[500px] transition-all duration-300"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 px-12 text-white cursor-pointer hover:bg-black flex flex-col items-start justify-center hover:opacity-40 opacity-0 transition-all duration-300">
                                    <h1 className='text-[22px] font-bold'>{iteam.name}</h1>
                                    <p className="text-white mt-7 text-sm font-bold">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <p className="text-white mt-7 text-sm font-bold">{iteam.description}</p>
                                    <button className='border border-white mt-7 p-4 text-sm'>VIEW ALL</button>
                                </div>

                                {/* Product Info - Visible by Default, Hidden on Hover */}
                            </div>
                            <div className="mt-4 transition-opacity duration-300 group-hover:opacity-0">
                                <h1 className="font-bold text-[16px] md:text-[18px] txt-color leading-tight">{iteam.name}</h1>
                                <p className="text-[#F2C94C]">{iteam.raiting}</p>
                                <p className="font-black text-[24px] mt-1 txt-color">{iteam.price}</p>
                            </div>
                        </div>
                    ))}



                    
                </div>
            </div >
            <div className='md:hidden block'>
                <SliderCard />
            </div>
        </div>

    )
}

export default Card
