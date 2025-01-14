import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
// import { Filter } from "lucide-react"
  
  export function Dressstyle() {
    
    return (
      
        <div className="p-5">
            <div className="flex justify-between items-center">
            <h1 className="font-bold">Dress Style</h1>
            {/* <Filter/> */}
            </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Party</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos; animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <div>
        
        </div>
      </Accordion>
      <div className="flex justify-center items-center">
      <Button className="w-[90%] px-5">Apply NOw</Button>
      </div>
      </div>
      
    )
  }
  