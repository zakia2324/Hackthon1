import React from 'react'
import Image from 'next/image'
import pro1 from '../../../public/pro1.png'
import pro2 from '../../../public/pro2.png'
import pro4 from '../../../public/pro4.png'
import pro3 from '../../../public/pro3.png'
import template15 from '../../../public/template15.png'
import template16 from '../../../public/template16.png'
import template17 from '../../../public/template17.png'
import template18 from '../../../public/template18.png'

const Product = () => {
  return (
    <div>
      <div className='flex text-[12px] gap-6 p-2'>
        <ul>Home</ul>
        <ul>shop</ul>
        <ul>Men</ul>
        <ul>T-shirt</ul>
        
      </div>

      

      <div className=' p-12 flex gap-[90px]'>
        <div className='iamges gap-2'>
        
      <Image alt="pro1" className='h-[167px] w-[152px] 'src={pro1}/><br/>
      <Image alt="pro2" className='h-[167px] w-[152px] 'src={pro2}/><br/>
      <Image alt="pro3" className='h-[167px] w-[152px]'src={pro3}/>
      </div>
      <div className='content'>
        <Image alt="pro4" className='h-[530px] w-[444px]' src={pro4}/>
        
        
</div>
<div className='para'>
  <p className='w-[600px] h-[48px] font-extrabold text-[20px]'>ONE LIFE CHANGING T-SHIRT</p>
  <p>$230 </p><br/>
  <p>The graphic T -shirt which is perfect for any occassion.crafted from a soft and <br/>breathable fabric it offers superior comfort and style.</p>
  <br/>
  <p>select colours</p>
  <br/>
  <circle> </circle>
  <p>choose size</p>
  <br/>
  <button className='2px border solid bg-white h-10 w-20 rounded-full text-black'>Small</button>
  <button className='2px border solid bg-white h-10 w-20 rounded-full text-black'>Medium</button>
  <button className='2px border solid bg-white h-10 w-20 rounded-full text-black'>Large</button>
  <button className='2px border solid bg-white h-10 w-20 rounded-full text-black'>X-large</button>
  <br/>
  <br/>
  
  <p><button className='2px border solid bg-white h-10 w-20 rounded-full text-black'> - 1 + </button>
  <button className='2px border solid bg-black h-10 w-60 rounded-full text-white'>Add to Cart</button></p>
  </div>

  </div>
  {/* ................Review details........... */}


    <div className='flex gap-[240px]'><p>All Reviews</p>
    <button className='2 px border solid bg-black h-10 w-60 rounded-full text-white'>Latest</button>
    <button className='2 px border solid bg-black h-10 w-60 rounded-full text-white'>write a Review</button>
     </div>

<div className='grid grid-cols-2 gap-4 h-[640px] w-[846px] ml-[310px] p-4'>
  <div className='bg-white 1px solid border-dotted '>Samantha D.<br/>
"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
Posted on August 14, 2023</div>
  <div className='bg-white 1px solid border-dotted '>Alex M.<br/>
"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
Posted on August 15, 2023</div>
  <div className='bg-white 1px solid border-dotted '>Ethan R.<br/>
"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
Posted on August 16, 2023</div>
  <div className='bg-white 1px solid border-dotted '>Olivia P.<br/>
"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
Posted on August 17, 2023</div>
  <div className='bg-white 1px solid border-dotted '>Liam K.<br/>
"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
Posted on August 18, 2023</div>
  <div className='bg-white 1px solid border-dotted '>Ava H.<br/>
"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
Posted on August 19, 2023</div>
  </div>
  <div className='p-2 ml-[420px]   '>
    <div><h1 className='text-[40px] font-extrabold'>You Might Also Like</h1></div>
    </div>
    
    <div className='flex gap-[40px] p-4'>
    <Image alt="template15" className='h-[296px] w-[444px]' src={template15}/>
    <Image alt="template16" className='h-[296px] w-[444px]' src={template16}/>
    <Image alt="template17" className='h-[296px] w-[444px]' src={template17}/>
    <Image alt="template18" className='h-[296px] w-[444px]' src={template18}/>
    </div>
    
  
  
    
  

  </div>

  
  



)

      }

export default Product
