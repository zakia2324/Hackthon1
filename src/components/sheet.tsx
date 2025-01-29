"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "@/app/components/NavigationMenu";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
            <FiMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.Co</SheetTitle>
              
            </SheetHeader>
<div className=" grid grid-cols-1 gap-y-4">
           < div className=' md:block '><Link href={""}><NavigationMenuDemo/></Link></div>
<div className='md:block'><Link href={""}>on sale</Link></div>
<div className=' md:block'><Link href={""}>new arrivals</Link></div>
<div className=' md:block'><Link href={""}>brands</Link></div>
</div>
            
           
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
