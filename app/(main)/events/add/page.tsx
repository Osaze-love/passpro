import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

const AddEvents = () => {
  const tickets = [
    {
      name: 'Regular Ticket',
      quantity: '0/Unlimited',
      price: '₦5,000',
    },
    {
      name: 'Regular Ticket',
      quantity: '0/Unlimited',
      price: '₦5,000',
    },
    {
      name: 'Regular Ticket',
      quantity: '0/Unlimited',
      price: '₦5,000',
    },
  ]
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">
<h3 className="text-[20px] font-semibold text-[#343434]">Create Event</h3>
 <div className="flex space-x-[8px] bg-[#FFEDE5] w-[573px] items-center  px-[18px] py-[12px] rounded-[4px]">
        <h2 className="text-[#8F8F8F]  font-medium">Home</h2>
        <Image
          src="/icons/rightarrow.svg"
          height={10}
          width={5}
          alt="rightarrow"
        />
        <h2 className="text-[#FC6435] font-medium">Create Event</h2>
      </div>
      {/* <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
        <div className="border-b border-b-[#D9D9D9] py-2">
          <p className="text-[20px] font-semibold text-[#343434]">Overview</p>
        </div>
            <div className="py-[30px] flex flex-col gap-[16px]">
           
            <div className="flex w-full items-center ">
             <Label htmlFor="eventname" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Event Name</p>
             </Label>
             <Input
               id="eventname"
               placeholder="Type Your Event Name Here"
               className=" py-[8px] border-[#C4C4C4] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm placeholder:text-[#D9D9D9]"
               />
               </div>

               <div className="flex w-full items-center ">
             <Label htmlFor="eventdescription" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Event Description</p>
             </Label>
             <Textarea
                className="focus-visible:ring-0 border-[#C4C4C4] focus-visible:ring-transparent h-[101px] shadow-sm placeholder:text-[#D9D9D9]"
                placeholder="Type Your Event Name Here"
              />
             
               </div>

               <div className="flex w-full items-center ">
             <Label htmlFor="eventtype" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Event Type</p>
             </Label>
             <select
                id="eventtype"
                className="w-full py-[8px] border-[#C4C4C4] outline-none border rounded-[8px] px-4 shadow-sm"
              >
                <option value="physical">Physical</option>
                <option value="virtual">Virtual</option>
              </select>
             
               </div>

               <div className="flex w-full items-center ">
             <Label htmlFor="eventlocation" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Event Location</p>
             </Label>
             <Input
               id="eventlocation"
               placeholder="Type Your Event Name Here"
               className=" py-[8px] border-[#C4C4C4] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm placeholder:text-[#D9D9D9]"
               />
               </div>

               <div className="flex w-full items-center ">
             <Label htmlFor="eventdescription" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Event Category</p>
             </Label>
             <select
                id="type"
                defaultValue=""
                className="w-full py-[8px] border-[#C4C4C4] outline-none border rounded-[8px] px-4 shadow-sm"
              >
                <option value="" disabled>
           Select One
         </option>
                <option value="music">Music</option>
                <option value="music">Music</option>
                <option value="music">Music</option>
              </select>
             
               </div>

               <div className="flex w-full items-center ">
             <Label htmlFor="locationtips" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Location Tips</p>
             </Label>
             <Textarea
                className="focus-visible:ring-0 border-[#C4C4C4] focus-visible:ring-transparent h-[101px] shadow-sm placeholder:text-[#D9D9D9]"
                placeholder="Type Your Event Name Here"
              />
             
               </div>

               <div className="flex w-full items-center ">
             <Label htmlFor="eventlocation" className="w-[200px]">
                <p className="font-medium text-[#333333] whitespace-nowrap">Start Date</p>
             </Label>
             <div className="flex items-center w-full space-x-6">
              <input type="date"  placeholder="Type Your Event Name Here"
               className=" py-[8px] border-[#C4C4C4] border rounded-[4px] px-4 shadow-sm placeholder:text-[#D9D9D9] w-2/4"/>
            
               <div className="flex items-center w-2/4 space-x-4">
               <Label htmlFor="eventlocation" className="">
                <p className="font-medium text-[#333333] whitespace-nowrap">Time:</p>
             </Label>
             <input type="time"  placeholder="Type Your Event Name Here"
               className=" py-[8px] border-[#C4C4C4] border rounded-[4px] px-4 shadow-sm placeholder:text-[#D9D9D9] w-2/4"/>
               </div>
             </div>
            
               </div>
                
               <button
                      className="bg-none mt-[40px] border-none text-[22px] w-full rounded-[8px] text-white py-[16px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                   
                    >
                     { 'Save & Continue  >' } 
                    </button>
            </div>
       
      </section> */}

{/* <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
        <div className="border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Gallery</p>
        </div>
            <div className="flex items-center ">
              <div className="space-y-[10px]">
                <h2 className="text-[#343434] font-semibold">Upload Cover Photo</h2>
                <p className="w-2/4 text-[12px] text-[#8F8F8F]">Supported Files: .png, .jpg, .jpeg Image will be resized into 1300x520 px</p>
              </div> 

              <div className="border border-[#C4C4C4] rounded-[8px] flex items-center justify-center w-full py-[40px]">
                 <Image src='/icons/image.svg' width={120} height={120} alt="image"/>
              </div>
            </div>

            <div className="flex items-center my-[40px]">
              <div className="space-y-[10px]">
                <h2 className="text-[#343434] font-semibold">Upload Event Image / Gallery Images *</h2>
                <p className="w-2/4 text-[12px] text-[#8F8F8F]">Supported Files: .png, .jpg, .jpeg Image will be resized into 1300x520 px</p>
              </div> 

              <div className="border border-[#C4C4C4] rounded-[8px] flex items-center justify-center w-full py-[40px]">
                 <Image src='/icons/image.svg' width={120} height={120} alt="image"/>
              </div>
            </div>

            <div className="w-full flex items-center justify-between">
              <div>
              <p
                      className="text-[#FC6435] text-[22px]  font-semibold"
                   
                    >
                     { '<    Previous' } 
                    </p>
              </div>
         
            <button
                      className="bg-none  border-none text-[22px] w-2/4 rounded-[8px] text-white py-[10px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                   
                    >
                     { 'Save & Continue  >' } 
                    </button>


            </div>
       
      </section> */}

      <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
      <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Tickets</p>
          <button
                      className="bg-none border-none text-[20px] px-[15px] rounded-[8px] text-white py-[5px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                   
                    >
                     { 'Add New Ticket' } 
                    </button>
        </div>

        <section className="mt-[40px]">
<Table className="border-b">
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow className="bg-[#FFEDE5] hover:bg-[#FFEDE5] ">
      <TableHead className=" text-[#606060] font-medium rounded-tl-[8px]">
      Ticket Name
      </TableHead>
      <TableHead className="text-[#606060] text-center font-medium">
      Ticket Quantity
      </TableHead>
      <TableHead className="text-[#606060] text-center font-medium">
      Price
      </TableHead>
      
      <TableHead className=" font-medium text-right text-[#606060]  rounded-tr-[8px]">
        Action
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {tickets.map((data, index) => (
      <TableRow key={index}>
        <TableCell className="font-semibold h-[75px] text-[#606060] border-l">
          {data.name}
        </TableCell>
        <TableCell className="text-[#606060] font-semibold text-center">
             <p className="font-semibold">  
              {data.quantity}
             </p>
            </TableCell>

           <TableCell className="text-[#606060] font-semibold text-center">
             <p className="font-semibold">  
              {data.price}
             </p>
            </TableCell>
        <TableCell className="text-right border-r">
          <div className="flex items-center space-x-3 justify-end">
          <Image
          src="/icons/Edit.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
        />
        <Image
          src="/icons/Copy.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
        />
        <Image
          src="/icons/delete.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
        />
          </div>
      
           
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</section>
      </section>
  </div>
  )

};

export default AddEvents;
