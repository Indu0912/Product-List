import React from 'react'
import './Sidebar.css'

 const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
      <div className="container-1 rounded-lg">
        <h2>Hot Deals</h2>
        <div className='flex justify-between'>
          <div className="left-text">
            <ul>
              <li>Nike</li>
              <li className='text-[#3dc0fd]'>Airmax</li>
              <li>Nike</li>
              <li>Adidas</li>
              <li>Vans</li>
              <li>All Stars</li>
              <li>Adidas</li>
            </ul>
          </div>
          <div className="right-text">
            <ul>
              <li>2</li>
              <li className='text-[#3dc0fd]'>48</li>
              <li>14</li>
              <li>15</li>
              <li>23</li>
              <li>1</li>
              <li>95</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-2 rounded-lg">
      <h2>PRICES</h2>
        <div className='flex justify-between'>
        <div className="left-text">Ranger: </div>
        <div className="right-text">$13.99 - $25.99</div>
        </div>
         <input type="range" className='cursor-pointer'/>
      </div>
      <div className="container-3 rounded-lg">
        <h2>COLOR</h2>
        <div className='color-container'>
          <div className='div-input'></div>
          <div className='div-input !bg-[#FC3E39]'></div>
          <div className='div-input !bg-[#FFF600]'></div>
          <div className='div-input !bg-[#171717]'></div>
          <div className='div-input !bg-[#FF00B4]'></div>
          <div className='div-input !bg-[#EFDFDF]'></div>
        
        </div>
      </div>
      <div className="container-4 rounded-lg">
        <h2>BRAND</h2>
        <div className='flex justify-between'>
          <div className="left-text">
            <ul>
              <li>Nike</li>
              <li>Nike</li>
              <li>Adidas</li>
              <li>Siemens</li>
            </ul>
          </div>
          <div className="right-text">
            <ul>
              <li>99</li>
              <li>99</li>
              <li>99</li>
              <li>99</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-5 rounded-lg"><h2>More</h2></div>
    </div>
     </>
  )
}
export default Sidebar
