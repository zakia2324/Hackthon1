import React from 'react'
import { TbSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";


const Header = () => {
  return (
    
    <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-[1440px] h-fixed[2,431px] '>
<div className='bg-black text-whitepy-2 text-sm flex justify-between items-center px-8 w-full '>
<div className='text-center flex-1 text-white sticky'>
Sign up and get 20% off to your first order. Sign Up Now

</div>
</div>
<div className='flex justify-between items-center gap-[40px] w-[900px] h-fixed-[41px] p-2 '>
<div className='font-bold'>SHOP.CO</div>
<div>shop</div>
<div>on sale</div>
<div>new arrivals</div>
<div>brands</div>
<TbSearch />
<input type="search"placeholder='search for products'className='w-[220px] h-[30px] pt-62px rounded-full bg-white'/>
          <button className="absolute right-1 top-1 translate-y-1/2 p-2 bg-white rounded-full flex gap-4">
    
          <FaCartArrowDown />
          <CgProfile />


          </button>
</div>

    </header>
  )
}

export default Header
