"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

const Withdrawals = () => {
  const withdrawalsData = [
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
    {
      gateway: "Bank",
      transaction: "BDS7DYQYW18W",
      initiated: "2024-05-10 10:51 AM",
      months: "3 months ago",
      type: "User",
      username: "Car Shows",
      amount: "$900",
      total: "$30.00",
      conversion: "No",
      status: "Pending",
    },
  ];
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[10px]">
        <h3 className="text-[20px] font-semibold">Withdrawals</h3>
        <div className="flex items-center space-x-[24px]">
          <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Username / Email"
              className=" focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
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
          <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Start Date - End Date"
              className=" focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
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
        </div>
      </section>
      <section className="flex items-center space-x-[10px]">
        {["All", "Approved", "Pending", "Rejected"].map((tab) => (
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

      <section className="grid grid-cols-3 p-[24px] bg-white mt-[20px] rounded-md">
        <div className="flex items-center justify-between w-full h-[77px] px-[20px] shadow-sm border-r border-[#D9D9D9] ">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/approvedwithdraw.svg"}
              height={45}
              width={45}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium ">₦502,000.25</p>
              <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                Approved Withdrawal
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/icons/rightarrowdark.svg"
              width={8}
              height={13}
              alt="rightarrow"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-[77px] px-[20px] shadow-sm  border-r border-[#D9D9D9] ">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/pendingwithdrawal.svg"}
              height={45}
              width={45}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium ">₦502,000.25</p>
              <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                Pending Withdrawal
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/icons/rightarrowdark.svg"
              width={8}
              height={13}
              alt="rightarrow"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-[77px] px-[20px] shadow-sm  ">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/rejectwithdraw.svg"}
              height={45}
              width={45}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium ">₦502,000.25</p>
              <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                Rejected Withdrawal
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/icons/rightarrowdark.svg"
              width={8}
              height={13}
              alt="rightarrow"
            />
          </div>
        </div>
      </section>
      <section className="mt-[40px]">
        <Table className="border-b">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
              <TableHead className=" text-white  font-extrabold rounded-tl-[8px]">
                Gateway | Transaction
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Initiated
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                User Type
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Username
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Amount
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Conversion
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Status
              </TableHead>
              <TableHead
                className=" font-extrabold text-white text-center
               rounded-tr-[8px]"
              >
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawalsData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className=" h-[75px] text-[#606060]  border-l ">
                  <p className="text-[#FC6435]">{data.gateway}</p>
                  <p className="text-[14px]">{data.transaction}</p>
                </TableCell>
                <TableCell className="text-[#606060] text-center">
                  {data.initiated}
                  <p className="text-[14px]">{data.months}</p>
                </TableCell>
                <TableCell className="text-[#606060] font-medium text-center">
                  {data.type}
                </TableCell>
                <TableCell className="text-[#606060] text-center">
                  {data.username}
                  <p className="text-[14px] text-[#FC6435]">@{data.username}</p>
                </TableCell>
                <TableCell className="text-[#606060]  text-center">
                  <p>
                    {data.amount} -{" "}
                    <span className="text-[#FF3B30] font-semibold">
                      {data.total}
                    </span>
                  </p>
                  <p className="text-[14px] font-semibold">{data.total}</p>
                </TableCell>
                <TableCell className="text-center">
                  <p>
                    {data.conversion} - <span className="">{data.total}</span>
                  </p>
                  <p className="text-[14px]">{data.total}</p>
                </TableCell>
                <TableCell>
                  <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {data.status}
                  </p>
                </TableCell>
                <TableCell className="text-right border-r ">
                  <button
                    className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                    onClick={() => {
                      router.push("/withdrawals/details");
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
  );
};

export default Withdrawals;
