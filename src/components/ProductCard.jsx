import React from 'react'
import star from '../../images/star.svg'
import yellowStar from '../../images/yellowStar.svg'
import cardimg from '../../images/card1img.svg'
import './ProductCard.css'
const ProductCard = ({img}) => {
  return (
   <>
    <div className='card relative'>
                       <div className='bg-[#FF4858] text-white w-[70px] h-[34px] flex justify-center items-center absolute'>HOT</div>
                       <div className={`section1`}>
                           <img src={img} alt={img} className='w-full h-full'/>
                       </div>
   <div className="section2 flex flex-col items-center justify-center">
                           <div className='font-[700] text-[18px] mt-2'>Nike Air Max 270 React</div>
                           <div className='flex items-center justify-center space-x-4 mt-3 cursor-pointer'>
                               <div className='star'><img src={yellowStar} alt={star}/></div>
                               <div className='star'><img src={yellowStar} alt={star}/></div>
                               <div className='star'><img src={yellowStar} alt={star}/></div>
                               <div className='star'><img src={yellowStar} alt={star}/></div> 
                                <div className='star'><img src={star} alt={star}/></div>   
                           </div>
                           <div className='flex mt-2 space-x-6 items-center'>
                           <div className='font-[700] text-[18px] text-[#40BFFF]'>$299,43</div>
                           <div className='flex space-x-3 items-center'>
                           <div className='text-[14px] font-400 text-[#9098B1]'>$534,33</div>
                           <div className='text-[14px] font-700 text-[#FB7181]'>24% Off</div></div>
                       </div>
                       </div>
                       </div></>
  )
}
export default ProductCard