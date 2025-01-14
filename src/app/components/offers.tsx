import React from 'react'
import { TbSearch } from "react-icons/tb";

const offers = () => {
  return (
    <main className='w-full flex justify-center items-center p-6'>
        <div className='W-[80%] h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px]'>
            <h1 className='text-2xl sm:text-4xl font-extrabold'>STAY UPTO DATE ABOUT<br/> OUR LATEST OFFERS</h1>
        <div className='space-y-3'>

        <div className="flex justify-start items-center sm:w-[300px] h-[40px] rounded-[62px] bg-[#f0f0f0]">
<TbSearch className="text-xl ml-2 "/>
<input placeholder="Enter your email address..." className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#f0f0f0]"></input>
        </div>
        
        <div className="flex justify-start items-center sm:w-[300px] h-[40px] rounded-[62px] bg-[#f0f0f0]">

<p className="text-black p-4">subscribe to newsletter</p>
</div>
</div>
</div>
    </main>
    
  )
}

export default offers
