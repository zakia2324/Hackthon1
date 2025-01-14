import Image from "next/image";
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
        title: "T-Shirt With Tape Details",
        id: 1,
        price: "$120",
        img_url: "/template2.png",
    },
    {
        title: "SKINNY FIT JEANS",
        id: 1,
        price: "$240",
        img_url: "/template3.png",
        oldprice:"$200",
    },

{
    title: "CHECKERED SHIRT",
    id: 1,
    price: "$180",
    img_url: "/template4.png"
},

{
    title: "SKINNY FIT JEANS",
    id: 1,
    price: "$240",
    img_url: "/template3.png",
    oldprice:"$200",
},

{
title: "CHECKERED SHIRT",
id: 1,
price: "$180",
img_url: "/template4.png"
},
{
    title: "SKINNY FIT JEANS",
    id: 1,
    price: "$240",
    img_url: "/template3.png",
    oldprice:"$200",
},

{
title: "CHECKERED SHIRT",
id: 1,
price: "$180",
img_url: "/template4.png"
},
{
    title: "SKINNY FIT JEANS",
    id: 1,
    price: "$240",
    img_url: "/template3.png",
    oldprice:"$200",
},



{
    title: "SLEEVE STRIPED T-SHIRT",
    id: 1,
    price: "$130",
    img_url: "/template5.png",
    oldprice: "$200",
},


]
const star =[<IoStarSharp key={1} />,<IoStarSharp key={2}/>,<IoStarSharp key={3}/>,<IoStarSharp key={4}/>,<IoStarSharp key={5}/>]

const CasualShirts = () => {

  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold">Casual</h1>
      <div className="flex flex-wrap flex-col md:flex-row items-center md:justify-between px-8 mt-10 ">
        {
            product.map((data)=>{
                return(
                    <div key={data.id}>
                        <div className="w-[230px] h-[200px] bg-[#F0EEED] rounded-[20px]">
                        <Image src={data.img_url} alt={data.title} 
                        className="w-full h-full rounded-[20px]"
                        width={100} height={100}></Image>
                        </div>
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

export default CasualShirts
