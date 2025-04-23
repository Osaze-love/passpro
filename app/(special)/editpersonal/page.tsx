import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <div className="px-[43px] py-[40px]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Edit Personal Information</h3>
        </section>

        <div className="grid grid-cols-2 gap-[44px]">
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="firstname" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>First Name</p>
                </div>
              </Label>
              <Input
                id="firstname"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="lastname" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Last Name</p>
                </div>
              </Label>
              <Input
                id="lastname"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="email" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Email</p>
                </div>
              </Label>
              <Input
                id="email"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="phonenumber" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Phone Number</p>
                </div>
              </Label>
              <Input
                id="phonenumber"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="username" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Username</p>
                </div>
              </Label>
              <Input
                id="username"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="userrole" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>User Role</p>
                </div>
              </Label>
              <Input
                id="userrole"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <Button className="shadow-sm w-full my-[39px] font-bold py-[18px] text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                Submit
              </Button>
      
    </div>
  )
}

export default page
