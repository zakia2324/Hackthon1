import React from 'react'
import { FaTwitter } from "react-icons/fa"
import { MdFacebook } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaCcVisa } from "react-icons/fa6"
import { FaCcPaypal } from "react-icons/fa"
import { FaGooglePay } from "react-icons/fa"

const Footer = () => {
  return (
<div className='h-[150px] w-absolute bg-black text-white ; font-extrabold p-9 '>
  <p>STAY UPTO DATE ABOUT <br/>OUR LATEST OFFERES</p>
  <div className='mb-2'>
  <input type="search"placeholder='Enter your email address'className='w-[200px] h-[28px] text-[10px] pl-4 ml-[740px] rounded-full bg-white'/>
          <button className="absolute right-1 top-1 translate-y-1/2 p-2 bg-black rounded-full flex  items-end"></button>
          </div>
          <div>
          <input type="search"placeholder='Subscribe to newsletter'className='w-[200px] h-[28px] text-[10px] pl-4 ml-[740px] rounded-full bg-white '/>
          <button className="absolute right-1 top-1 translate-y-1/2 p-2 bg-white rounded-full flex "></button>
          </div>
          



    <div className='h-[300px] w-[600px] p-6 text-black'>
      <div className='flex gap-[200px] font-bold'>
        <div className='font-extrabold text-[20px] ml-2'> SHOP.CO
          <p className='text-[10px] font-normal'> we have clothes <br/>that suits you are proud<br/> to wear from women to <br/>men</p>
          <div className='flex gap-2 size-18 p-2'>
          <FaTwitter />
          <MdFacebook />
          <FaInstagram />
          <FaGithub />
          </div>
        </div>

        <div>COMPANY
          <div className='font-normal text-[13px] gap-2'>
          <ul>about</ul>
          <ul>features</ul>
          <ul>work</ul>
          <ul>career</ul>
          </div>
        </div>
        <div>HELP
          <div className='font-normal text-[13px] gap-2'>
          <ul>Customer Support</ul>
          <ul>Delievery Details</ul>
          <ul>Terms & Conditions</ul>
          <ul>Privacy Policy</ul>
          </div>

        </div>
        <div>FAQ
          <div className='font-normal text-[13px] gap-2'>
          <ul>Account</ul>
          <ul>Manage Deliveries</ul>
          <ul>Orders</ul>
          <ul>Payments</ul>
          </div>
        </div>
        <div>RESOURCES
          <div className='font-normal text-[13px] gap-2'>
          <ul>Free eBooks</ul>
          <ul>Development Tutorial</ul>
          <ul>How To-Blog</ul>
          <ul>Youtube Playlist</ul>
          <div className='flex gap-4 p-8 size-18'>
          <FaCcVisa />
      <FaCcPaypal />
      <FaGooglePay />
      </div>
          </div>
        </div>
      </div>
      <p className='m-40 text-[13px]'>Shop co @2020 2023 All right reserved</p>
      
    </div>
    </div>
  )
}

export default Footer
