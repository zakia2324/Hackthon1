import React from 'react'
import { AccordionDemo } from '../components/accordion'
import { SliderDemo } from '../components/slider'
import { CheckboxDemo } from '../components/check'
// import { Circle } from 'lucide-react'
import Size from '../components/size'
import { Dressstyle } from '../components/dressstyle'
import CasualShirts from '../components/shirts'


const Casual = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center space-x-6'>
        {/* left */}
        <div className='w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px]'>
        <AccordionDemo/>
        <div>
            <h1 className='font-bold mb-4 items-center'>Price</h1>
        <SliderDemo/>
        
        

        <div className='font-bold gap-[95px] mt-1 flex'>
            <h1>$50</h1>
            <h1>$100</h1>
        </div>
        <div className='rounded-full'>
        <CheckboxDemo/>
        <Size/>
        <Dressstyle/>
        </div>
    </div>
    </div>
    {/* //{ right} */}
    <div className='w-[900px] h-full sm:h-[1200px]'>
<CasualShirts/>
    </div>
    </div>
    
  )
}

export default Casual
