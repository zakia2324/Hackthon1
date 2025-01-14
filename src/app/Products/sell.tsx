import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import React from 'react'

interface Iproducts{ 
title:string,
price:string,
id:number,
rating?:string,
oldprice?:string,
img_url:string,
}
const product:Iproducts[] = [
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 1,
        price: "$212",
        img_url: "/template6.png",
        oldprice:"$232",
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",
        id: 2,
        price: "$145",
        img_url: "/template7.png",
        
    },

{
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 3,
    price: "$80",
    img_url: "/template8.png"
},

{
    title: "FADED SKINNY JEANS",
    id: 4,
    price: "$210",
    img_url: "/template9.png",
    
},


]
const star =[<IoStarSharp key={1}/>,<IoStarSharp key={2}/>,<IoStarSharp key={3} />,<IoStarSharp key={4}/>,<IoStarSharp key={5} />]

const Top_Sell = () => {

  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Top selling</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10 ">
        {
            product.map((data)=>{
                return(
                    
                    <div key={data.id}>

                        <Link href={`/Products/${data.id}`}>
                        <div className="w-[230px] h-[200px] bg-[#F0EEED] rounded-[20px]">
                        <Image src={data.img_url} alt={data.title} 
                        className="w-full h-full rounded-[20px]"
                        width={100} height={100}></Image>
                        </div>
                        </Link>
                        <p className="text-lg mt-2 font-bold">{data.title}</p>
                        <div className="flex text-yellow-400">
                        {star.map((icon,index)=>(
                            <span key={index}>{icon}</span>
            ))}

         </div>
                        <p className="font-bold mt-1">{data.price}<span className="text-gray-400 font-bold line-through">{data.oldprice}</span></p>
                        
                        {/* <p>{data.oldprice}</p> */}
                    </div>
                )
            })
        }
        
      </div>
    </div>
  )
}

export default Top_Sell
