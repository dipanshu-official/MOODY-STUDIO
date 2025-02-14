import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for arrows

import image2 from '../../assets/Card/Rectangle2.png';
import image3 from '../../assets/Card/Rectangle3.png';
import image4 from '../../assets/Card/Rectangle4.png';
import image5 from '../../assets/Card/Rectangle5.png';
import image6 from '../../assets/Card/Rectangle6.png';
import image7 from '../../assets/Card/Rectangle7.png';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
    <div 
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  text-[#323334] p-3  shadow-lg hover:text-2xl transition"
        onClick={onClick}
    >
        <ChevronRight size={30} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div 
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  text-[#323334] p-3  shadow-lg hover:text-2xl transition"
        onClick={onClick}
    >
        <ChevronLeft size={30} />
    </div>
);

const SliderCard = () => {
    const items = [
        { img: image2, name: "LINEN BEACH TOWEL", rating: "★★★★☆", price: "30$" },
        { img: image3, name: "Square Clear Glass Box", rating: "★★★★☆", price: "30$" },
        { img: image4, name: "4-pack Small Ceramic Plates", rating: "★★★★☆", price: "30$" },
        { img: image5, name: "Large Clear Glass Box", rating: "★★★★☆", price: "30$" },
        { img: image6, name: "Round Jute Placemat", rating: "★★★★☆", price: "30$" },
        { img: image7, name: "Metal Wire Basket", rating: "★★★★☆", price: "30$" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show only 4 cards per row
        slidesToScroll: 1,
        autoplay: false, // Disable autoplay
        arrows: true, // Enable arrows
        nextArrow: <NextArrow />, // Custom Next Arrow
        prevArrow: <PrevArrow />, // Custom Prev Arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 cards on tablets
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 card on mobile
                }
            }
        ]
    };

    return (
        <div className="relative px-4 sm:px-6 md:px-8 mt-8">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="p-4">
                        {/* Image */}
                        <img src={item.img} alt={item.name} className="w-full h-[300px] object-cover" />

                        {/* Product Info */}
                        <div className="mt-4 text-center">
                            <h1 className="font-bold text-[16px] md:text-[18px] txt-color leading-tight">{item.name}</h1>
                            <p className="text-[#F2C94C]">{item.rating}</p>
                            <p className="font-black text-[24px] mt-1 txt-color">{item.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderCard;
