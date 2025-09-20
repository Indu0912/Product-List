import React from 'react'
import './FilterPanel.css'
import Cart from '../../images/Cart.svg'
 const FilterPanel = () => {
  return (
    <>
    <div className='flex space-x-2 items-center justify-end w-full filter'>
        <span>
            <img src={Cart} alt={Cart} className='w-[31px] h-[34px] cart-icon'/>
        </span>
        <span className='text-[#262626] font-[400] text-[20px] ml-[10px] pt-2 items'>Items</span>
        <span className='font-[400] text-[20px] text-[#b6bcbe] pt-2 price'>$0.00</span>
        </div></>
  )
}
export default FilterPanel
