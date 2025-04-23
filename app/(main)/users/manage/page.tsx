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
    const [activeTab, setActiveTab] = useState("All");
    
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">All Users</h3>
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
          "All",
          "Active",
          "Banned",
          "With Balance",
        
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
              User
              </TableHead>
              <TableHead className="text-white font-extrabold">
              Email-Mobile
              </TableHead>
              <TableHead className="text-white font-extrabold">
              Country
              </TableHead>
              <TableHead className="text-white font-extrabold">Joined At</TableHead>
              
              <TableHead className="text-white font-extrabold">
              Balance
              </TableHead>
              <TableHead className="text-right font-extrabold text-white rounded-tr-[8px]">
                Action
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
               
                <TableCell className="text-right border-r w-[200px]">
                  
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] transition-all active:scale-95"
                      onClick={() => {
                        router.push("/users/details");
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
