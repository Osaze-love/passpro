"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
     const [activeTab, setActiveTab] = useState("All Tickets");
    
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
   const tickets = [
    {
      title:'Funny Comedy Show',
      location: 'Muson centre, Lagos',
      date: 'Oct. 19, 2024',
      price: '$20',
      quantity: '10',
      total: '$200',
      status: 'pending',
    },
    {
        title:'Funny Comedy Show',
        location: 'Muson centre, Lagos',
        date: 'Oct. 19, 2024',
        price: '$20',
        quantity: '10',
        total: '$200',
        status: 'pending',
      },
      {
        title:'Funny Comedy Show',
        location: 'Muson centre, Lagos',
        date: 'Oct. 19, 2024',
        price: '$20',
        quantity: '10',
        total: '$200',
        status: 'pending',
      },
      {
        title:'Funny Comedy Show',
        location: 'Muson centre, Lagos',
        date: 'Oct. 19, 2024',
        price: '$20',
        quantity: '10',
        total: '$200',
        status: 'pending',
      },
      {
        title:'Funny Comedy Show',
        location: 'Muson centre, Lagos',
        date: 'Oct. 19, 2024',
        price: '$20',
        quantity: '10',
        total: '$200',
        status: 'pending',
      },
   ]

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
        <section className="flex items-center space-x-[10px]">
        {[
          "All Tickets",
          "Pending Tickets",
          "Running Tickets",
          "Expired Tickets",
         
        ].map((tab) => (
          <Button
            key={tab}
            className={`shadow-sm font-semibold ${
              activeTab === tab
                ? "text-white bg-[#FC6435] hover:bg-[#FC6435]"
                : "text-black bg-white hover:bg-white"
            } transition-all active:scale-95`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Button>
        ))}
      </section>

      <section className="mt-[40px]">
<Table className="border-b">
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
      <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
        Ticket Title
      </TableHead>
      <TableHead className="text-white  font-extrabold">
        Location
      </TableHead>
      <TableHead className="text-white font-extrabold">
        Date
      </TableHead>
      <TableHead className="text-white font-extrabold">Price</TableHead>
      <TableHead className="text-white font-extrabold">
        Quantity
      </TableHead>
      <TableHead className="text-white font-extrabold">
        Total
      </TableHead>
      <TableHead className="text-white font-extrabold">
        Payment Status
      </TableHead>
      <TableHead className=" font-extrabold text-white rounded-tr-[8px]">
        Action
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {tickets.map((data, index) => (
      <TableRow key={index}>
        <TableCell className="h-[75px] font-semibold text-[#606060] border-l">
          {data.title}
        </TableCell>
        <TableCell className="text-[#606060]">
             <p className="font-normal">  
              {data.location}
             </p>
        </TableCell>
        <TableCell className="text-[#606060] font-normal text-[14px]">
          {data.date}
        </TableCell>
        <TableCell className="text-[#606060] text-[14px]">
          {data.price}
        </TableCell>
        <TableCell className="text-[#606060] text-[14px]">
          {data.quantity}
        </TableCell>
        <TableCell className="text-[#606060] text-[14px]">
          {data.total}
        </TableCell>
        <TableCell>
          <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#d1ecd8] border border-[#34C759] p-[5px]">
            {data.status}
          </p>
        </TableCell>

        <TableCell >
         
            <button
              className="bg-none border border-[#FC6435] rounded-[8px] py-[5px] w-[100px] text-[#FC6435] font-medium transition-all active:scale-95"
              onClick={() => {
                router.push("/tickets/details");
              }}
            >
              Details
            </button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</section>
    </div>
  )
}

export default page
