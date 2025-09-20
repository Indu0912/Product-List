import React, { useState } from 'react'
import Icon from '../../images/Icon.svg'
import './Header.css'
import Navbar from './Navbar'
import FilterPanel from './FilterPanel'
 const Header = ({cardVisible,setCardVisible}) => {
  // const [cardVisible,setCardVisible]=useState(false)
  const Card=()=>{
  let card=  setCardVisible(true)
    console.log(card)
  }
  return (
    <>
    <div className='header'>
      <div className='w-full h-[40px] relative top-[26px] flex head bg-white'>
      <div className='max-w-[350px] w-full heads'>
        <button className='w-12 h-12 hamburgur-icon hidden top-1 relative text-2xl cursor-pointer' onClick={Card}>&#9776;</button>
      <div className='header-icon'>
        <div className='w-[44px] h-[51px] logo'>
          <img src={Icon} alt={Icon} className='w-full h-full'/></div>
          <span className='pl-[8px] text-[24px] text-[#22262A] font-[700] text'>E-Comm</span>
           </div> 
           </div>
           <Navbar/>
           <FilterPanel/>
           </div>
           {cardVisible && (
           <div className='popup'>
             <ul className='p-[20px] leading-[40px] popup-card'>
                <li className='text-[#3dc0fd] popup-card-list'>HOME</li>
                <li className='popup-card-list'>BAG</li>
                <li className='popup-card-list'>SNEAKERS</li>
                <li className='popup-card-list'>BELT</li>
                <li className='popup-card-list'>CONTACT</li>
              </ul>
           </div>
           )}
           </div></>
  )
}

export default Header