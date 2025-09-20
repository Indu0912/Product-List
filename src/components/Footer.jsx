import React from 'react'
import './Footer.css'
import Icon from '../../images/Icon.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import circle from '../../images/cardCircle.svg'
import paypal from '../../images/paypal.svg'
import WesternUnion from '../../images/WesternUnion.svg'
import cardtext from '../../images/cardtext.svg'
 const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='w-full max-w-[1499px]'>
        <div className='box-1'>
            <div className="div1">
                <div className='flex space-x-3 items-center'>
<div> <img src={Icon} alt={Icon} size={38}/></div><div className='font-[700] text-[18px]'>E-Comm</div>
                </div>
                <div className='font-[400] text-[12px] mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</div>
            </div>
            <div className="div2 mt-[120px] ml-[250px] follow">
                <div className='font-[500] text-[18px]'>Follow Us</div>
                <div className='font-[400] text-[14px] max-w-[207px] mt-4'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</div>
                <div>
                    <div className='flex mt-4 space-x-9 items-center'><div className=''><img src={facebook} alt={facebook}/></div><div><img src={twitter} alt={twitter}/></div></div>
                </div>
            </div>
             <div className="div3 mt-[120px] ml-[190px] max-w-[138px] contact">
                <div className='font-[500] text-[18px]'>Contact Us</div>
                <div className='font-[400] text-[14px] max-w-[207px] mt-4'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</div>
            </div>
        </div>
        <div className='box2'>
<div className="information text-[18px] font-[400]"><div>Infomation</div>
<div className='text-[14px] font-[400] mt-8'>About Us<br/>
Infomation
Privacy <br/>Policy 
Terms & Conditions</div></div>
<div className="service text-[18px] font-[400]"><div>Service</div>
<div className='text-[14px] font-[400] mt-8'>About Us<br/>
Infomation
Privacy <br/>Policy 
Terms & Conditions</div></div>
<div className="my-account text-[18px] font-[400]"><div>My Account</div>
<div className='text-[14px] font-[400] mt-8'>About Us<br/>
Infomation
Privacy <br/>Policy 
Terms & Conditions</div></div>
<div className="our-offers text-[18px] font-[500]"><div>Our Offers</div>
<div className='text-[14px] font-[400] mt-8'>About Us<br/>
Infomation
Privacy <br/>Policy 
Terms & Conditions</div></div>
        </div>
        <hr className='divide-line'/>
        <div className='box3'>
            <div className='copyright text-[14px] font-[400] text-[#C1C8CE] text-nowrap'>© 2018 Ecommerce theme by www.bisenbaev.com</div>
            <div className='brands flex space-x-4 mr-14'>
                <div className="western-union"><img src={WesternUnion} alt={WesternUnion}/></div>
                <div className="circlecard"><img src={circle} alt={circle}/></div>
                <div className="paypal"><img src={paypal} alt={paypal}/></div>
                <div className="visa"><div className='w-full h-1 bg-[#5457BB] relative top-[-4px] purpule-line'></div><img src={cardtext} alt={cardtext}/><div className='w-full h-1 bg-[#E59703] relative top-[4px] purpule-line'></div></div>
            </div>
        </div>
        </div>
        </div>
        </>
  )
}
export default Footer
