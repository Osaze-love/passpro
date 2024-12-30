import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <div className="px-[43px] py-[40px]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Edit Address Information</h3>
        </section>
 
        <div className="grid grid-cols-1 gap-[39px]">
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="country" className="">
                <div className="flex items-start font-semibold text-[20px] text-[#37474F]">
                  <p>Country</p>
                </div>
              </Label>
              <Input
                id="country"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="city" className="">
                <div className="flex items-start font-semibold text-[20px] text-[#37474F]">
                  <p>City</p>
                </div>
              </Label>
              <Input
                id="city"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>

               <div className="grid w-full items-center gap-[8px]">
                          <Label htmlFor="state" className="">
                            <div className="flex items-start font-semibold text-[20px] text-[#37474F]">
                              <p>State</p>
                            </div>
                          </Label>
                          <select
                            id="state"
                            className=" py-[8px] outline-none border rounded-[8px] px-4 shadow-sm"
                          >
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                          </select>
                        </div>
          
          </div>

          <Button className="shadow-sm w-full my-[39px] font-bold py-[18px] text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                Submit
              </Button>
      
    </div>
  )
}

export default page
