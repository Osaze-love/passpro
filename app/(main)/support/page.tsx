"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import React, { useEffect, useState } from 'react'
import useSupport from '@/redux/slices/supportslice';
import BarLoader from 'react-spinners/BarLoader';

const page = () => {
  const { getSupportTickets, loading } = useSupport();
     
  useEffect(() => {
        getSupportTickets();
    },[]);


    const ticketData = [
        {
            subject: '[Ticket#735642] teste',
            submitted : 'Adam Smith',
            status: 'open',
            priority: 'High',
            reply: '3 days ago',
        },
        {
            subject: '[Ticket#735642] teste',
            submitted : 'Adam Smith',
            status: 'open',
            priority: 'High',
            reply: '3 days ago',
        },
        {
            subject: '[Ticket#735642] teste',
            submitted : 'Adam Smith',
            status: 'open',
            priority: 'High',
            reply: '3 days ago',
        },
        {
            subject: '[Ticket#735642] teste',
            submitted : 'Adam Smith',
            status: 'open',
            priority: 'High',
            reply: '3 days ago',
        },
        {
            subject: '[Ticket#735642] teste',
            submitted : 'Adam Smith',
            status: 'open',
            priority: 'High',
            reply: '3 days ago',
        },
        {
            subject: '[Ticket#735642] teste',
            submitted : 'Adam Smith',
            status: 'open',
            priority: 'High',
            reply: '3 days ago',
        },
    ]
    const [activeTab, setActiveTab] = useState("Pending Tickets"); 
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
       <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">{activeTab}</h3>
        <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  mx-[33px] bg-white">
          <Input
            placeholder="Search Here"
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
          "Pending Tickets",
          "Closed Tickets",
          "Answered Ticket",
          "All Ticket",
          
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
                Subject
              </TableHead>
              <TableHead className="text-white font-extrabold">
              Submitted By
              </TableHead>
              <TableHead className="text-white font-extrabold">
              Status
              </TableHead>
              <TableHead className="text-white font-extrabold">Priority</TableHead>
              <TableHead className="text-white font-extrabold">
              Last Reply
              </TableHead>
             
              <TableHead className="text-right font-extrabold text-white rounded-tr-[8px]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ticketData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium h-[75px] text-[#FC6435] border-l">
                  {data.subject}
                
                </TableCell>
                <TableCell className="text-[#FC6435] font-bold">
                  {data.submitted}
                </TableCell>
                <TableCell>
                         <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#d1ecd8] border border-[#34C759] p-[5px]">
                           {data.status}
                         </p>
                       </TableCell>
                <TableCell>
                  <p className="w-[99px] text-[#606060] rounded-[20px] flex items-center justify-center bg-[#eac2c0] border border-[#FF3B30] p-[5px]">
                    {data.priority}
                  </p>
                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data.reply}
                </TableCell>
                
               
                <TableCell className="text-right border-r">
                   
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435]  transition-all active:scale-95"
                    //   onClick={() => {
                    //     router.push("/events/details");
                    //   }}
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
