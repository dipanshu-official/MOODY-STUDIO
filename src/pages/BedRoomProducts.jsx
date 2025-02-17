import React from 'react'
import Header from '../components/header/Header'
import icon from '../assets/BedProducts/icon.png'
import img1 from '../assets/BedProducts/Rectangle1.png'
import img2 from '../assets/BedProducts/Rectangle2.png'
import img3 from '../assets/BedProducts/Rectangle3.png'
import img4 from '../assets/BedProducts/Rectangle4.png'
import img5 from '../assets/BedProducts/Rectangle5.png'
import img6 from '../assets/BedProducts/Rectangle6.png'
import img7 from '../assets/BedProducts/Rectangle7.png'
import img8 from '../assets/BedProducts/Rectangle8.png'
import img9 from '../assets/BedProducts/Rectangle9.png'
import img10 from '../assets/BedProducts/Rectangle10.png'
import img11 from '../assets/BedProducts/Rectangle11.png'
import img12 from '../assets/BedProducts/Rectangle12.png'
import Footer from '../components/Footer/Footer'

const BedRoomProducts = () => {
  const items = [
    {
      img: img1,
      name: "Velvet Covvered",
      price: "39$"

    },
    {
      img: img2,
      name: "CANDLE IN GLASS HOLDER",
      price: "14$"

    },
    {
      img: img3,
      name: "METAL PHOTO FRAME",
      price: "25$"

    },
    {
      img: img4,
      name: "Round floor mat",
      price: "34$"

    },
    {
      img: img5,
      name: "Class light holder",
      price: "22$"

    },
    {
      img: img6,
      name: "Flannel Duvet Cover Set",
      price: "44$"

    },
    {
      img: img7,
      name: "Fitted Cotton Sheet",
      price: "24$"

    },
    {
      img: img8,
      name: "Small Candle in a Small Jar",
      price: "14$"

    },
    {
      img: img9,
      name: "Checked Duvet Cover Set",
      price: "24$"

    },
    {
      img: img10,
      name: "Washed Linen Pillowcase",
      price: "18$"

    },
    {
      img: img11,
      name: "Ribbed Wool-blend Throw",
      price: "24$"

    },
    {
      img: img12,
      name: "Mini Porcelain Dish",
      price: "8$"

    },

  ]

  return (
    <div>
      <Header />
      <div className='text-center mt-8 mb-13'>
        <p className='lowercase font-normal '>HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM</p>
      </div>

      {/* 15% off section  */}

      <div className='bg-[#DCE1DA] w-full'>
        <div className='py-11 text-center'>
          <div>
            <h1 className='font-medium text-[38px] txt-color '>Member Exclusive</h1>
          </div>
          <div>
            <h2 className='lowercase font-normal txt-color text-[38px]'>15% OFF EVERYTHING + EXTRA $10 OFF FOR PLUS STATUS</h2>
          </div>
          <div className='mt-10'>
            <p className='font-normal text-[18px] txt-color '> Not a member? Jion now to shop</p>
          </div>
        </div>

      </div>

      {/*Main part */}

      <div className='px-18 my-24 flex  '>
        <aside className='w-82'>
          <div>
            <h1 className='font-bold text-[20px] txt-color'>New Arrivals</h1>
            <p className='font-normal text-[16px] txt-color mt-2'>New Arrivals</p>
          </div>
          <div className='mt-10'>
            <h1 className='font-bold text-[20px] txt-color'>Shop By Room</h1>
            <p className='font-normal text-[16px] txt-color mt-2'>Bedroom</p>
            <p className='font-normal text-[16px] txt-color mt-2'>Living Room</p>
            <p className='font-normal text-[16px] txt-color mt-2'>Child Room</p>
            <p className='font-normal text-[16px] txt-color mt-2'>Bathroom</p>
            <p className='font-normal text-[16px] txt-color mt-2'>Outdoor</p>


          </div>
          <div className='mt-10'>
            <h1 className='font-bold text-[20px] txt-color'>Shop By Concept</h1>
            <p className='font-normal text-[16px] txt-color mt-2'>Conscious</p>
            <p className='font-normal text-[16px] txt-color mt-2'>Premium Quality</p>
            <p className='font-normal text-[16px] txt-color mt-2'>Classic Collection</p>


          </div>
          <div className='mt-10'>
            <h1 className='font-bold text-[20px] txt-color'>Gender</h1>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2 ">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99]" />
                <p className="font-normal text-[16px] txt-color">Man</p>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                <p className="font-normal text-[16px] txt-color">Women</p>
              </label>
            </div>

          </div>
          <div className='mt-10'>
            <h1 className='font-bold text-[20px] txt-color'>Gender</h1>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2 ">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99]" />
                <p className="font-normal text-[16px] txt-color">0$ – 40$</p>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99] " />
                <p className="font-normal text-[16px] txt-color">40$ – 100$</p>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99] " />
                <p className="font-normal text-[16px] txt-color">100$ – 150$</p>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99] " />
                <p className="font-normal text-[16px] txt-color">150$ – 170$</p>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99] " />
                <p className="font-normal text-[16px] txt-color">175$ – 250$</p>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#AAAAAC99] " />
                <p className="font-normal text-[16px] txt-color">250$ – 350$</p>
              </label>

            </div>

          </div>
        </aside>


        {/* Here is Bedroom section  */}

        <div className='flex-1 '>
          <div>

            <div>
              <h1 className='font-bold txt-color text-[44px]'>BEDROOM</h1>
            </div>
            <div className='mt-6'>
              <p className='lowercase font-light txt-color text-[18px] text-xs '>ITS EASY TO TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT SELECTION OF ACCESSORIES.</p>
            </div>
            <div className='flex items-center justify-between mt-11'>
              <div className='flex items-center gap-2 '>
                <img src={icon} alt="" />
                <p className='uppercase font-normal text-[16px] txt-color'>filter & sort</p>
              </div>
              <div className='flex items-center gap-13'>
                <p className='font-normal text-[16px] text-[#FE1313]'>Models</p>
                <p className='font-normal text-[16px] txt-color'>products</p>
              </div>
            </div>
          </div>



          <div className='grid grid-cols-3 items-center justify-center gap-6 mt-7'>


            {items.map((item, index) => (
              <div key={index}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div className='mt-6'>
                  <p className='font-bold txt-color text-[18px]'>{item.name}</p>
                </div>
                <div className='mt-4'>
                  <p className='font-bold txt-color text-[24px]'>{item.price}</p>
                </div>
              </div>
            ))
            }

          </div>
          <div className='flex items-center justify-center py-22'>
            <h1 className=' bg-[#323334] py-4 px-24 text-white uppercase font-bold text-lg'>
              load more products
            </h1>
          </div>

        </div>

      </div>


      <Footer />
    </div>

  )
}

export default BedRoomProducts

