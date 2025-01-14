// import React from 'react'
import Image from "next/image"


const Dress = () => {
  return (
    
       <div className="w-full h-full sm:h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center pt-8 max-w-screen-2xl mx-auto">
        <div className="mt-2 ">
      <h1 className="text-3xl font-bold">BROWSE BY DRESS STYLE</h1>
    </div>
    <div className= " w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center">
        <div className="w-[400px] h-[200px] m-1 relative">
          <Image src={"/template10.png"} className="h-full w-full rounded-[20px]" width={100} height={100}
           alt="template10"></Image>
          <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
           </div>

        <div className="w-[600] h-[200] m-1 relative">
          <Image src={"/template11.png"} className= "w-full h-full rounded-[20px]" width={100} height={100}
           alt="template11"></Image>
          <span className="absolute top-10 left-5 font-bold text-xl">Formal</span>
          
        </div>
        <div className="w-[600] h-[200] m-1 relative">
          <Image src={"/template13.png"} className="w-full h-full rounded-[20px]" width={100} height={100}
           alt="template13"></Image>
          <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
        </div>

        <div className="w-[400] h-[200] m-1 relative">
          <Image src={"/template14.png"}  className="w-full h-full rounded-[20px]" width={100} height={100 }
           alt="template14"></Image>
          <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
          
        </div>
        </div>
        </div>
    
  )
}

export default Dress
