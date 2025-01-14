
import React from 'react'

import { TbSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";
import Link from 'next/link';
import { SheetSide } from '@/components/sheet';




const Header=()=>{
  return(
    
    
    <header className='bg-white mx-w-screen-2xl shadow-sm border-b mx-auto flex flex-col w-full h-fixed[2,431px] sm:text-sm text-xs '>
<div className='bg-black text-whitepy-2 text-sm flex justify-between items-center px-8 w-full '>
<div className='text-center flex-1 sm:text-sm text-xs text-white '>
Sign up and get 20% off to your first order. Sign Up Now

</div>
</div>
<div className='flex justify-between item-center w-[full] h-fixed-[40px] p-2 text-xs sm:text-sm hover:bg-slate-300'>
<div className='flex justify-center items-center'>
  <SheetSide/>
<div className='font-bold text-xl sm:text-3xl pl-2 '>SHOP.CO</div>
</div>
<div className='hidden md:block'><Link href={"/"}>shop</Link></div>
<div className='hidden md:block'><Link href={""}>on sale</Link></div>
<div className='hidden md:block'><Link href={""}>new arrivals</Link></div>
<div className='hidden md:block'><Link href={""}>brands</Link></div>

<div className='hidden md:block'>
<div className='flex justify-start items-center w-[330px] h-[40px] bg[#f0f0f0] rounded-[62px] '>
<TbSearch className='text-xl ml-2'/>
<input placeholder='search for products'className=' w-full h-full rounded-[62px] ml-2 outline-none'/>
</div>
</div>
          {/* <button className="absolute right-1 top-1 translate-y-1/2 p-2 bg-white rounded-full flex gap-4"> */}
    <div className='flex gap-4'>
    <TbSearch className='text-xl ml-2 md:hidden'/>
    {/* <Link href={"/Cart"}></Link> */}
          {/* <FaCartArrowDown /> */}
          <Link href={"/cart"}>
          <FaCartArrowDown />
          </Link>
          <CgProfile />
</div>

          {/* </button> */}
</div>

    </header>
  )
}

export default Header
