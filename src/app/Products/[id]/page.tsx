"use client"
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import React from 'react'
import { useParams } from "next/navigation";
// import Product from "@/app/components/Product";
import { Check, Minus, Plus,} from "lucide-react";
const star =[<IoStarSharp key={1}/>,<IoStarSharp key={2}/>,<IoStarSharp key={3}/>,<IoStarSharp key={4}/>,<IoStarSharp key={5}/>]
import AllReview from "@/components/allreviews";
import Product from "@/app/components/Product";
import { BreadcrumbDemo } from "@/components/Breadcrump";
interface Iproducts{ 
title:string,
price:string,
id:number,
rating?:string,
oldprice?:string,
img_url:string,
img1:string,
img2:string,
img3:string,
}
const product:Iproducts[] = [
    {
        title: "T-Shirt With Tape Details",
        id: 1,
        price: "$120",
        img_url: "/product1.png",
        img1:"/pro1.png",
        img2:"/pro2.png",
        img3:"/pro3.png",
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$240",
        img_url: "/product2.png",
        oldprice:"$200",
        img1:"/pro1.png",
        img2:"/pro2.png",
        img3:"/pro3.png",
    },

{
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$180",
    img_url: "/product3.png",
     img1:"/pro1.png",
        img2:"/pro2.png",
        img3:"/pro3.png",
},

{
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$130",
    img_url: "/product4.png",
    oldprice: "$200",
    img1:"/pro1.png",
        img2:"/pro2.png",
        img3:"pro3.png",
},


]


export default function Pro_Detail(){
const params = useParams();

    const id= params.id

    const item =product.find((item)=>item.id===Number(id))

    if (!item){

return <h1>Product not found</h1>
    }
    
    return(
        <>
        <BreadcrumbDemo/>
        
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
            {/* {leftside} */}
            <div className=" flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1 ">
            <Image src= {item.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px]"alt="productdetail" width={100} height={100}></Image>
            <Image src= {item.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100}></Image>
            <Image src= {item.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100}></Image>
            </div>
            {/* {mid div} */}
            <div className=" w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
            <Image src= {item.img2} alt="productdetail" className="w-full h-[95%]" width={100} height={100}></Image>
            </div>
            {/* {right sec} */}
            <div className=" w-full sm:w-[600px] h-[500px] mt-3">
                <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-Shirt</h1>
                <div className="flex text-yellow-400 mt-1">
                <div className="flex text-yellow-400">
                        {star.map((icon,index)=>(
                            <span key={index}>{icon}</span>
            ))}

         </div>
                    { star}
                    </div>
                    <p className="font-bold mt-1">{item.price} <span className="text-gray-400 line-through">{item.oldprice}</span></p>
                    <p>This graphic T-shirt which is perfect for any occassion.Crafted from a soft and breathable fabric .It offers superior comfort and style.</p>
                    <div className="mt-5">
                        {/* (chhose color) */}
                        <p className="text-gray-500">Select Colors</p>

                        <div className="flex space-x-3 mt-2">
                            
                        <div className="w-[37px] h-[37px] bg-[#4f4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100"/></div>
                        <div className="w-[37px] h-[37px] bg-[#314f4a] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100"/></div>
                        <div className="w-[37px] h-[37px] bg-[#31344f] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100"/></div>
                        </div>
                    </div>
                    
                        
         {/* (choose sixe) */}
         <div className="mt-4">
                        <p className="text-gray-500"> Choose Size</p>
                        
                        <div className="flex space-x-3 m-3">
                        <div className="w-[80px] h-[50px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">small</div>
                        <div  className="w-[90px] h-[50px] flex justify-center items-center rounded-[62px] bg[#F0F0F0] text-gray-400">Medium</div>
                        <div  className="w-[80px] h-[50px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Large</div>
                        <div  className="w-[90px] h-[50px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">X-Large</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start mt-7 space-x-4 rounded-full">
                    {/* <div  className="w-[100px] h-[40px] flex justify-between items-center rounded-[62px] bg[#F0F0F0] text-gray-400">Medium */}
                        <Minus/>
                        1
                        <Plus/>

                    <button className="bg-black text-white w-[180px] rounded-full">Add To Cart</button>
                    
</div>
</div>
                </div>
                


    
        <AllReview/>
        <Product/>
        
          </>


    )
   
    
}
