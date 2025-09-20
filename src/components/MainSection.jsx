import React from 'react'
import shoe from'../../images/shoe.svg'
import arrow from '../../images/arrow down.svg'
import switchIcon from '../../images/switchIcon.svg'
import './MainSection.css'
import slideshow from '../../images/slideshow.svg'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import superflash from '../../images/superflash.png'
import manshoes from '../../images/manshoes.svg'
import womenbag from '../../images/womenbag.svg'
import manshirt from '../../images/manshirt.svg'
import dress from '../../images/dress.svg'
import card1img from '../../images/card1img.svg'
import cards2img from '../../images/cards2img.svg'
import cards3img from '../../images/cards3img.svg'
import card4img from '../../images/card4img.svg'
import card5img from '../../images/card5img.svg'
import card6img from '../../images/card6img.svg'

import App from '../App'
import recommend from '../../images/recommend.png'
 const MainSection = ( {Cardvisible ,img}) => {
     fetch('https://68ce3a816dc3f350777e67b3.mockapi.io/Products').then((res)=>res.json).then((data)=>{
    console.log(data)})
    fetch('https://68ce3a816dc3f350777e67b3.mockapi.io/Products', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
  let product=tasks

  console.log(product[0].name)
}).catch(error => {
  // handle error
})
  return (
    <div className='main'>
        {/* <div className='w-full max-w-[1069px]'> */}
        <div className="main-container1">
            <div className='flex justify-between items-center'> 
            <div className="left-box">
                <div className='text-[#FFFFFF] font-[500] text-[30px]'>Adidas Men Running Sneakers</div>
                <div className='text-[14px] font-[400] text-[#FFFFFF] relative top-[-16px]'>Performance and design. Taken right to the edge.</div>
                <a href="#" className='text-[#FFFFFF] font-[600] text-[12px] cursor-pointer'>SHOP NOW</a>
                <hr className='w-[41px] h-[2px] bg-[#FFFFFF] text-white relative top-[-5px]'/>
            </div>
            <div className="right-box">
                <img src={shoe} alt="shoe"/>
            </div>
            </div>
        </div>
        <div className="main-container2 flex justify-between items-center">
            <div className="left-side-box">
                <div className="box1 text-nowrap">13 Items</div>
                <div className="box w-[213px] justify-between flex ml-16 items-center sortby">
                        <div>Sort By</div>
                        <div className='w-[142px] flex justify-between items-center px-4 py-1  border-2 cursor-pointer border-[#F1F3F4] rounded-sm'><span>Name</span>
                        <span><img src={arrow} alt={arrow}/></span></div>
                </div>
               
                       <div className="box w-[213px] justify-between flex ml-16 items-center sortby">
                        <div>Show</div>
                        <div className='w-[142px] flex justify-between items-center px-4 py-1 cursor-pointer  border-2 border-[#F1F3F4] rounded-sm'><span>Name</span>
                        <span><img src={arrow} alt={arrow}/></span></div>
               
                </div>
            </div>
            <div className="right-side box h-full flex">
                <div className='w-[61px] bg-[#f2f3f5] h-full flex items-center justify-center cursor-pointer'>
                    <img src={switchIcon} alt={switchIcon}/>
                </div>
                <div className='w-[61px] h-full flex flex-col space-y-2 items-center justify-center cursor-pointer'>
                    <div className='w-[22px] h-[2px] bg-[#C1C8CE]'></div>
                    <div className='w-[22px] h-[2px] bg-[#C1C8CE]'></div>
                    <div className='w-[22px] h-[2px] bg-[#C1C8CE]'></div>
                </div>
            </div>
        </div>
        <div>
        <div className='superflash mt-18 hidden'>
            <div className={`text-[#FFFFFF]  absolute text-[24px] font-[700] max-w-[289px] p-[20px] ${Cardvisible?'opacity-0':''}`}>Super Flash Sale
50% Off</div>
<div className={`flex absolute max-w-[250px] h-[40px] top-80 ml-[20px] gap-4 ${Cardvisible?'opacity-0':''}`}>
<div className='w-[42px] h-[41px] bg-white flex items-center justify-center rounded-lg font-[700]'>08</div><span className='mt-2 text-[white] text-xl'>:</span>
<div className='w-[42px] h-[41px] bg-white flex items-center justify-center rounded-lg font-[700]'>34</div><span className='mt-2 text-[white] text-xl'>:</span>
<div className='w-[42px] h-[41px] bg-white flex items-center justify-center rounded-lg font-[700]'>52</div>
</div>
            <img src={superflash} alt={superflash} className='w-full h-full'/>
        </div>
        <div className='top-4 relative flex items-center justify-center category hidden'><img src={slideshow} alt={slideshow}/></div>
        <div className='w-full h-[21px] mt-12 hidden categories'>
            <div className='w-full flex justify-between'>
            <div className='font-[700] text-[14px]'>Category</div>
            <div className='font-[700] text-[14px] text-[#40BFFF]'>More Category</div>
            </div>
            <div className='flex gap-12 cursor-pointer mt-2'>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-[70px] h-[70px] border-1 border-[#EBF0FF] rounded-full flex items-center justify-center hover:scale-105 transition all 300'><img src={manshirt} alt={manshirt}/></div>
                <div className='text-[10px] font-[400] text-[#9098B1] mt-2'>Man Shirt</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <div className='w-[70px] h-[70px] border-1 border-[#EBF0FF] rounded-full hover:scale-105 transition all 300'><img src={dress} alt={dress}/></div>
                <div className='text-[10px] font-[400] text-[#9098B1] mt-2'><div className='flex flex-col items-center justify-center'>
                <div className='text-[10px] font-[400] text-[#9098B1] mt-2'>Dress</div>
                </div></div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <div className='w-[70px] h-[70px] border-1 border-[#EBF0FF] rounded-full flex flex-col items-center justify-center hover:scale-105 transition all 300 '><img src={womenbag} alt={womenbag}/></div>
                <div className='text-[10px] font-[400] text-[#9098B1] mt-2'>Woman Bag</div>
                </div>
                <div className='flex flex-col items-center justify-center hidden manshoes'>
                <div className='w-[70px] h-[70px] border-1 border-[#EBF0FF] rounded-full flex flex-col items-center justify-center hover:scale-105 transition all 300'><img src={manshoes} alt={manshoes}/></div>
                <div className='text-[10px] font-[400] text-[#9098B1] mt-2'>Man Shoes</div>
                </div>
                <div className='flex flex-col items-center justify-center hidden manshoes'>
                <div className='w-[70px] h-[70px] border-1 border-[#EBF0FF] rounded-full flex flex-col items-center justify-center hover:scale-105 transition all 300'><img src={manshoes} alt={manshoes}/></div>
                <div className='text-[10px] font-[400] text-[#9098B1] mt-2'>Man Shoes</div>
                </div>
                </div>
        </div>
        <div className={`w-full h-[256px] bg-[url('../../images/recommend.png')] bg-cover mt-32 recommend hidden p-[20px]`}>
        <div className='text-[24px] font-[700] text-[#FFFFFF] max-w-[50px] mt-[80px]'>Recomended
Product</div>
<div className='text-[12px] font-[400] text-[#FFFFFF] mt-5'>We recommend the best for you</div>
            {/* <img src={recommend} alt={recommend} className='w-full h-full'/> */}
        </div>
        </div>
        <div className="main-container3">
            <div className='card-container'>
                <ProductCard img={card1img}/>  
                <ProductCard img={cards2img}/>  
                <ProductCard img={cards3img}/>  
                <ProductCard img={card4img}/>  
                <ProductCard img={card5img}/>  
                <ProductCard img={card6img}/>  
               
            </div>
        </div>
        <Pagination/>
        {/* </div> */}
    </div>
  )
}
export default MainSection