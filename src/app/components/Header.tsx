
// import React from 'react'

// import { TbSearch } from "react-icons/tb";
// import { CgProfile } from "react-icons/cg";
// import { FaCartArrowDown } from "react-icons/fa";
// import Link from 'next/link';
// import { SheetSide } from '@/components/sheet';




// const Header=()=>{
//   return(
    
    
//     <header className='bg-white mx-w-screen-2xl shadow-sm border-b mx-auto flex flex-col w-full h-fixed[2,431px] sm:text-sm text-xs '>
// <div className='bg-black text-whitepy-2 text-sm flex justify-between items-center px-8 w-full '>
// <div className='text-center flex-1 sm:text-sm text-xs text-white '>
// Sign up and get 20% off to your first order. Sign Up Now

// </div>
// </div>
// <div className='flex justify-between item-center w-[full] h-fixed-[40px] p-2 text-xs sm:text-sm hover:bg-slate-300'>
// <div className='flex justify-center items-center'>
//   <SheetSide/>
// <div className='font-bold text-xl sm:text-3xl pl-2 '>SHOP.CO</div>
// </div>
// <div className='hidden md:block'><Link href={""}>Shop</Link></div>
// <div className='hidden md:block'><Link href={""}>On Sale</Link></div>
// <div className='hidden md:block'><Link href={"/product"}>New Arrivals</Link></div>
// <div className='hidden md:block'><Link href={""}>Brands</Link></div>

// <div className='hidden md:block'>
// <div className='flex justify-start items-center w-[330px] h-[40px] bg[#f0f0f0] rounded-[62px] '>
// <TbSearch className='text-xl ml-2'/>
// <input placeholder='search for products'className=' w-full h-full rounded-[62px] ml-2 outline-none'/>


// </div>
// </div>
          
//     <div className='flex gap-4'>
//     <TbSearch className='text-xl ml-2 md:hidden'/>
  
      
//           <Link href={""}>
//           <FaCartArrowDown />
//           </Link>
//           <CgProfile />
// </div>

          
// </div>

//     </header>
//   )
// }

// export default Header
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import Link from "next/link";
import { SheetSide } from "../../components/sheet";
import { NavigationMenuDemo } from "./NavigationMenu";
import SearchPage from "../../app/search/page";


export default function Header() {
  return (
     <header className="w-full h-[60px] bg-white flex justify-between items-center  max-w-screen-2xl mx-auto">
          {/* left */}
            <div className="flex justify-center items-center">
                <SheetSide/>
            <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
            </div>
            {/* navbav */}
            <ul className="hidden md:block">
                <li className="space-x-5 flex items-center">
                
                     
                    <Link href={""}> <NavigationMenuDemo/></Link>
                    <Link href={"/"}>On Sale</Link>
                    <Link href={"/Products"}>New Arrivals</Link>

                    <Link href={"/Cart"}>Brands</Link>
                </li>
            </ul>
            {/* search input */}
                <div className="hidden md:block">
                {/* <div className="flex  justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                    <FaSearchengin className="text-xl ml-2"/>
                    <input placeholder="search item..." className="w-full ml-2 outline-none h-full rounded-[62px]   bg-[#F0F0F0] "></input> */}
                    
                 {/* </div> */}
                 <SearchPage/>
                
                </div>
    
            {/* cart */}
              <div className="flex items-center mr-7 space-x-5">
              <FaSearchengin className="text-xl ml-2 md:hidden"/>
             <Link href={"/Cart"}>
             <FaCartShopping className="texl-2xl"/>
             </Link>
              <FaCartShopping className="texl-2xl"/>
              </div>

     </header> 
  );
}