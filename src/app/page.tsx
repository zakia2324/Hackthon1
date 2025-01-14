import React from 'react'
import Hero from './components/Hero'
// import About from './components/About'
import Products from './Products/page'
import Top_Sell from './Products/sell'
// import Product from './components/Product'
// import Catagory from './Catagory/page'
// import Cart from './Cart/page'
import Dress from '@/components/Dress'
import CustomerCarousel from "@/components/couresel";



const page = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <Top_Sell/>
      <Dress/>
      <CustomerCarousel/>
      
      
      

      {/* <About/> */}
      {/* <Product/> */}
      {/* <Catagory/> */}
      {/* <Cart/> */}
    </div>
  )
}

export default page
