"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const data = [
        {
            name: 'Language & Regional Settings',
            details: 'Choose default language and allow options for localization, currency, and time zone.',
        },
        {
            name: 'Language & Regional Settings',
            details: 'Choose default language and allow options for localization, currency, and time zone.',
        },
        {
            name: 'Language & Regional Settings',
            details: 'Choose default language and allow options for localization, currency, and time zone.',
        },
        {
            name: 'Language & Regional Settings',
            details: 'Choose default language and allow options for localization, currency, and time zone.',
        },
        {
            name: 'Language & Regional Settings',
            details: 'Choose default language and allow options for localization, currency, and time zone.',
        }
    ]
    const [activeTab, setActiveTab] = useState("General");
    
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">
     <h3 className="text-[20px] font-semibold text-[#343434]">Settings</h3>

     <section className="grid grid-cols-4 gap-[10px]">
        {[
          "General",
          "Payment & Financial Settings",
          "User Management & Permissions",
          "Notification",
          "Event Settings",
          "KYC Unverified",
          "KYC Pending",
          "With Balance",
        ].map((tab) => (
          <Button
            key={tab}
            className={`shadow-sm font-semibold px-2 ${
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

      <section className='bg-white p-[21px] w-3/4 rounded-[10px] flex flex-col gap-[10px]'>
        {data?.map((data) => (
           <div className='flex items-center justify-between border-b border-b-[#8F8F8F] py-[10px]'>
              <div className='flex flex-col gap-[19px]'>
                <p className='text-[#343434] text-[18px] font-semibold'>{data.name}</p>
                <p className='text-[#606060] font-normal'>{data.details}</p>
              </div>
               <div>
                          <Image
                            src="/icons/rightarrowdark.svg"
                            width={14}
                            height={22}
                            alt="rightarrow"
                          />
                        </div>
           </div>
        ))}
      </section>
      
    </div>
  )
}

export default page
