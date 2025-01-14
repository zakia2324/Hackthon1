import { BreadcrumbDemo } from "@/components/Breadcrump"
import { Button } from "@/components/ui/button"
import { Delete, Minus, Plus } from "lucide-react"
import Image from "next/image"

interface Icart{
imageurl:string,
title:string,
id:string,
size:string,
color:string,
price:string,
}

const cartItem:Icart[]=[
  {
imageurl: "/template16.png",
title:"Gradient Graphic T-shirt",
id:"1",
size:"arge",
color:"white",
price:"$145",
  },
  {
    imageurl: "/template4.png",
    title:"Gradient Graphic T-shirt",
    id:"2",
    size:"llarge",
    color:"white",
    price:"$145",
      },
      {
        imageurl: "/template3.png",
        title:"Gradient Graphic T-shirt",
        id:"3",
        size:"llarge",
        color:"white",
        price:"$145",
          },
 ]

 export default function Cart(){
  return(
    <>
    <div className="pl-6 mt-2">
    <BreadcrumbDemo/>
    
    <h1 className="text-2xl font-bold">Your Cart</h1>
    </div>
    {/* {left div} */}
    <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
      
<div className= "w-full h-full md:w-[700px] md:h-[600px] border rounded-[20px]">

   {
    cartItem.map((item)=>{
      return(
<div className="flex justify-between mt-4 p-4 border.0" key={item.id}>
  <div className="flex gap-3">
<Image src={item.imageurl} alt={item.title} width={100} height={100}></Image>
<div>
<h3 className="font-bold">{item.title}</h3>
<p className="text-sm">Size{item.size}</p>
<p className="text-sm">{item.color}Color</p>
<p className="font-bold">{item.price}</p>
</div>
</div>
      


{/* {right div} */}
<div className="flex flex-col justify-between items-center space-y-5 ">
<Delete/>
<div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-gray-300">
  <Minus/>
  1
  <Plus/>

</div>
</div>


</div>
      )
    }) 
  }
  </div>
  <div className="w-full md:w-[400px] h-full md:h-[450px] border rounded-[20px] mt-6 flex flex-col justify-start items-center p-4">
    <div className="w-[90%] space-y-2">
    <h1 className="text-xl font-bold">order summary</h1>
    <p className="flex justify-between">subtotal<span>$500</span></p>
    <p className="flex justify-between">subtotal<span>$100</span></p>
    <p className="flex justify-between">subtotal<span>$100</span></p>
    <p className="flex justify-between">Total<span>$700</span></p>
    <input className="bg-gray-300 w-[200px] py-2 px-5 rounded-[16px] text-gray-600 outline-none" placeholder="Add promo code"/>
    <Button className="ml-1">Apply</Button>
    <Button>Go To Check Out</Button>
</div>
  </div>

  </div>
  
</>
  )
}