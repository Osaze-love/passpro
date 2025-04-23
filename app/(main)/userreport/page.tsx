"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from 'next/navigation'

const page = () => {
  const eventsData = [
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "No",
      status: "Pending",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "No",
      status: "Pending",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "No",
      status: "Pending",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "Yes",
      status: "Approved",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "No",
      status: "Pending",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "Yes",
      status: "Approved",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "No",
      status: "Pending",
    },
    {
      title: "Gustavo Lima",
      location: "Rome",
      organizer: "onnetworksolutions",
      category: "Car Shows",
      date: "October 19th, 2024",
      featured: "Yes",
      status: "Approved",
    },
  ];
  const router = useRouter();
    const [activeTab, setActiveTab] = useState("Transaction");
    
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">{activeTab}</h3>
        <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  mx-[33px] bg-white">
          <Input
            placeholder="Name I Organizer"
            className=" focus:outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
          />
          <div className="bg-[#FC6435] h-full flex w-max justify-center items-center cursor-pointer px-[20px] rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src={"/icons/searchIconwhite.svg"}
              width={20}
              height={19.88}
              alt="searchIcon"
            />
          </div>
        </div>
      </section>

      <section className="flex items-center space-x-[10px]">
        {[
          "Transaction",
          "Login History",
          "Notification History",
        
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

      <section className='grid grid-cols-5 px-[40px] bg-white gap-[10px] my-[30px] py-[30px]  w-full items-center'>
              <Input
               id="phoneNumber"
                className=" py-[8px] border-[#343434] h-[40px] placeholder:text-[#343434] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
                placeholder='Username / Email'
                />
                <Input
               id="phoneNumber"
                className=" py-[8px] border-[#343434] h-[40px] placeholder:text-[#343434] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
                placeholder='Type'
                />
                <Input
               id="phoneNumber"
                className=" py-[8px] border-[#343434] h-[40px] placeholder:text-[#343434] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
                placeholder='Remark'
                />
                <Input
               id="phoneNumber"
                className=" py-[8px] border-[#343434] h-[40px] placeholder:text-[#343434] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
                placeholder='Start Date - End Date'
                />
                 <button
          className="bg-[#FC6435] hover:bg-[#fc6435] font-semibold h-[40px] rounded-[8px]  text-white transition-all active:scale-95"
        >
          Filter
        </button>
      </section>

      <section className="mt-[40px]">
        <Table className="border-b">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
              <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
              Organizer
              </TableHead>
              <TableHead className="text-white font-extrabold">
              TRX
              </TableHead>
              <TableHead className="text-white font-extrabold">
              Transacted
              </TableHead>
              <TableHead className="text-white font-extrabold">Amount</TableHead>
              
              <TableHead className="text-white font-extrabold">
              Post Balance
              </TableHead>
              <TableHead className="text-right font-extrabold text-white rounded-tr-[8px]">
              Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventsData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium h-[75px] text-[#606060] border-l">
                  {data.title}
                  <p className="flex items-center space-x-1 text-[14px]">
                    <Image
                      src={"/icons/locationIcon.svg"}
                      width={10}
                      height={9}
                      alt="loactionIcon"
                    />
                    <span className="text-[14px]">{data.location}</span>{" "}
                  </p>
                </TableCell>
                <TableCell className="text-[#FC6435] font-bold">
                  {data.organizer}
                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data.category}
                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data.date}
                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data.date}
                </TableCell>
               
                <TableCell className="text-[#606060] text-[14px]">
                  {data.category}
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
