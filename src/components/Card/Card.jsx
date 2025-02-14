import React from 'react'
import image1 from '../../assets/Card/Rectangle1.png'
import image2 from '../../assets/Card/Rectangle2.png'
import image3 from '../../assets/Card/Rectangle3.png'
import image4 from '../../assets/Card/Rectangle4.png'
import image5 from '../../assets/Card/Rectangle5.png'
import image6 from '../../assets/Card/Rectangle6.png'
import image7 from '../../assets/Card/Rectangle7.png'
import image8 from '../../assets/Card/Rectangle8.png'


const Card = () => {
    const iteams = [
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
    ]
    return (
        <div className='px-4 sm:px-6 md:px-8 mt-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>

                {/* image hover */}

                <div className="relative  group h-[566px]">
                    <img src={image1} alt="Image" className="w-full h-full object-cover" />
                    <div className="absolute px-12 text-white cursor-pointer inset-0 hover:bg-black flex flex-col items-start justify-center  hover:opacity-40 opacity-0 transition-all duration-300 ">
                        <h1 className='text-[22px]  font-bold'>DECOR</h1>
                        <p className="text-white  mt-7 text-sm font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='border border-white mt-7 p-4 text-sm'>VIEW All</button>
                    </div>
                </div>



                {iteams.map((iteam, index) => (
                    <div key={index}>
                        {/* Image */}
                        <img src={iteam.img} alt={iteam.name} className="w-full h-[300px] object-cover" />

                        {/* Product Info */}
                        <div className="mt-4">
                            <h1 className="font-bold text-[16px] md:text-[18px] txt-color leading-tight">{iteam.name}</h1>
                            <p className="text-[#F2C94C]">{iteam.raiting}</p>
                            <p className="font-black text-[24px] mt-1 txt-color">{iteam.price}</p>
                        </div>
                    </div>
                ))}

                <div className="relative  group h-[470px]">
                    <img src={image8} alt="Image" className="w-full h-full object-cover" />
                    <div className="absolute px-12 text-white cursor-pointer inset-0 hover:bg-black flex flex-col items-start justify-center  hover:opacity-40 opacity-0 transition-all duration-300 ">
                        <h1 className='text-[22px]  font-bold'>DECOR</h1>
                        <p className="text-white  mt-7 text-sm font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='border border-white mt-7 p-4 text-sm'>VIEW All</button>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Card
