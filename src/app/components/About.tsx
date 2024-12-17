import React from 'react'
import Image from 'next/image'
import template2 from  '../../../public/template2.png'
import template3 from  '../../../public/template3.png'
import template4 from  '../../../public/template4.png'
import template5 from  '../../../public/template5.png'
import template6 from  '../../../public/template6.png'
import template7 from  '../../../public/template7.png'
import template8 from  '../../../public/template8.png'
import template9 from  '../../../public/template9.png'
import template10 from '../../../public/template10.png'
import template11 from '../../../public/template11.png'
import template13 from '../../../public/template13.png'
import template14 from '../../../public/template14.png'

const About = () => {
  return (
    <div>
<div>
  <h1 className='text-center text-[60px] font-extrabold'>New Arrival</h1>
  <div className='image flex gap-4'>
  <Image alt ='template2' className=' h-[220px] w-[320px]'src ={template2}/>
  
  <Image alt='template3' className='h-[220px] w-[320px]' src={template3}/>
  
  <Image alt='template4' className='h-[220px] w-[320px]' src={template4}/>
  
  <Image alt='template5' className='h-[220px] w-[320px]' src={template5}/>
  
  
  </div>
  </div>
  <div className='flex pl-12 gap-[200px]'>
    <p>T-shirt with Tape details</p>
    <p>skinny fit jeans</p>
    <p>checkered shirt</p>
    <p>sleeve striped T-shirt</p>

    </div>
    
    <div className=' ml-[585px] p-4'>
    <button className='2px border solid bg-white text-black pb-[12px] pr-[54px] pl-[54px] pt-[16px] '>view all</button>
  </div>


 <h1 className='text-center text-[60px] font-extrabold'>Top Selling</h1>
  <div className='image flex gap-4'>
  <Image alt ="template6" className=' h-[220px] w-[320px]'src ={template6}/>
  
  <Image alt='template7' className='h-[220px] w-[320px]' src={template7}/>
  
  <Image alt='template8' className='h-[220px] w-[320px]' src={template8}/>
  
  <Image alt='template9' className='h-[220px] w-[320px]' src={template9}/>
  
  </div>

  <div className='flex pl-12 gap-[200px]'>
    <p>Vertical striped shirt</p>
    <p>Courage graphic T-shirt</p>
    <p>Loose Fit Bermuda shorts</p>
    <p>Fadded skinny jeans</p>
    </div>
    <div className='ml-[585px] p-4'>
    
    <button className='2px border solid bg-white text-black pt-[16px] pr-[54px] pl-[54px] pb-[16px] m-2'>view all</button>
    </div>

    
     
<div className='w-[1239px] h-[866px] bg-gray-200 top-[2417px] left-[100px] ml-[60px] '>
  <h1 className='font-extrabold text-[30px] ml-[360px]'>BROWSE BY DRESS STYLE</h1>
  
  <div className='grid grid-cols-2 h-[600px] w-[600px] justify-between gap-[180px] ml-[290px] '>
    <div className='bg-white '> casual<Image alt="template10" src={template10}/></div>
    <div className='bg-white'>Formal<Image alt="template11" src={template11}/></div>
    <div className='bg-white'>Party<Image alt="template13" src={template13}/></div>
    <div className='bg-white'>Gym<Image alt="template14" src={template14}/></div>

    </div>
  </div>
  <div>
    <h1 className='h-[58px] w-[654px] font-extrabold p-9 '>OUR HAPPY CUSTOMERS</h1> </div>
    <div className='grid grid-cols-4 gap-[20px] p-9 ml-[170px]' >
      <div className='bg-white border 1px border-dotted hover:bg-slate-400 h-[250px] w-[250px]'><h1 className='p-4'>Sarah M.<br/></h1><p className='text-[12px] p-2'>
      I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ihave bought has exceeded my expectations.</p></div>
      <div className='bg-white border-dotted 1px  hover:bg-slate-400 h-[250px] w-[250px]'><h1 className='p-4'>Alex.K</h1><p className='text-[12px] p-2'>
      Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.</p></div>
      <div className='bg-white border 1px border-dotted hover:bg-slate-400 h-[250px] w-[250px]'><h1 className='p-4'>James.L</h1><p className='text-[12px] p-2'>
      As someone who is always on the lookout for unique fashion pieces, Iam thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p></div>
      
    

   
  </div>



</div>


  
    
     
    
  


// </div>
 
    
  )
}

export default About
