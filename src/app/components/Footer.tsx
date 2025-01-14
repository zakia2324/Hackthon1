import React from 'react'
import { FaTwitter } from "react-icons/fa"
import { MdFacebook } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaCcVisa } from "react-icons/fa6"
import { FaCcPaypal } from "react-icons/fa"
import { FaGooglePay } from "react-icons/fa"

const Footer= ()=>{
  return(
    
<div className='flex justify-between p-6 h-full flex-wrap sapce-y-4 flex-row'>
  <div>
    <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
    <p>we have clothes that suit your styles<br/> and which you&apos;re proud <br/>to wear from women to men</p>
    <div className='flex gap-4'>
    <FaTwitter />
           <MdFacebook />
           <FaInstagram />
           <FaGithub />
           </div>
           <p className='p-4 flex-col sm:flex-row '>shop.co @2000 2023 All Right Reserved</p>
  </div>

  <div>
    <h1 className='font-bold flex-col sm:flex-row'>COMPANY</h1>
    <p>About</p>
    <p>Feature</p>
    <p>Work</p>
    <p>Career</p>
    
  </div>

  <div>
    <h1 className='font-bold'>HELP</h1>
    <p>Customer support</p>
    <p>Delivery Details</p>
    <p>Terms And Conditions</p>
    <p>Privcy and policy</p>
  </div>

  <div>
    <h1 className='font-bold'>FAQ</h1>
    <p>About</p>
    <p>Manage Deliveries</p>
    <p>Orders</p>
    <p>Payments</p>
  </div>

  <div>
    <h1 className='font-bold'>RESOURCES</h1>
    <p>Free eBooks</p>
    <p>Development Tutorial</p>
    <p>How TO Blog</p>
    <p>Yputube Playlist</p>
    <div className='flex gap-4 p-4'>
    <FaCcVisa/>
    <FaCcPaypal/>
    <FaGooglePay/>
    </div>
  </div>
  

</div>



  )
}

  
  
  

export default Footer