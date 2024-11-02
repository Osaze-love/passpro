"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Details = () => {
  const [isAcceptOpen, setisAcceptOpen] = useState(false);
  const closeAcceptDialog = () => setisAcceptOpen(false);
  const [isRejectOpen, setisRejectOpen] = useState(false);
  const closeRejectDialog = () => setisRejectOpen(false);

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className=" mb-[32px]">
        <h3 className="text-[20px] font-semibold">
          Username Withdraw Requested $900.00
        </h3>
      </section>

      <section className="grid grid-cols-5 gap-[32px]">
        <div className="col-span-2">
          <div className="w-full rounded-[8px] bg-white px-[32px] pb-[32px] mb-[32px]">
            <p className="text-[20px] font-semibold text-[#606060] py-[32px]">
              Withdraw Via Bank
            </p>
            <div className="border rounded-[8px]">
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Title
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                  Gustavo Lima
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">Type</p>
                <p className="text-[14px] text-[#343434] font-bold">Offline</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Organizer
                </p>
                <p className="text-[#FC6435] text-[14px] font-bold">
                  On network solutions pvt ltd
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Category
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                  Car Shows
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Location
                </p>
                <p className="text-[14px] text-[#343434] font-bold">Rome</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Start Date
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                  October 19th, 2024
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  End Date
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                  October 20th, 2019
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Seats
                </p>
                <p className="text-[14px] text-[#343434] font-bold">100</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Seats Booked
                </p>
                <p className="text-[14px] text-[#343434] font-bold">0</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Speakers
                </p>
                <p className="text-[14px] text-[#343434] font-bold">0</p>
              </div>

              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Price
                </p>
                <p className="text-[14px] text-[#343434] font-bold">100,000</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between ">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Status
                </p>
                <p className="w-[99px] text-[#606060] rounded-[20px] flex items-center justify-center bg-[#fceceb] border border-[#FF9F43] p-[5px]">
                  Pending
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="w-full bg-white p-[32px] rounded-[8px] mb-[24px]">
            <p className="text-[20px] font-semibold text-[#606060] pb-[12px] border-b border-b-[#8F8F8F]">
              User Withdraw Information
            </p>
            <div className="py-[16px] border-b border-b-[#8F8F8F]">
              <p className="text-[#606060] font-semibold">Account Number</p>
              <p className="text-[14px] text-[#606060]">999</p>
              <div className="flex mt-[24px] items-center space-x-4">
                <button
                  className="bg-none border border-[#4AC971] rounded-[8px]  text-[#4AC971] flex items-center p-[10px] space-x-[8px] transition-all active:scale-95"
                  onClick={() => {
                    setisAcceptOpen(true);
                  }}
                >
                  <Image
                    src="/icons/approveIcon.svg"
                    width={12}
                    height={12}
                    alt="approveIcon"
                  />
                  <span className="text-[14px]">Approve</span>
                </button>
                <button
                  className="bg-none border border-[#EB2222] rounded-[8px] p-[10px] text-[#EB2222] flex items-center space-x-[8px] transition-all active:scale-95"
                  onClick={() => setisRejectOpen(true)}
                >
                  <Image
                    src="/icons/rejectIcon.svg"
                    width={12}
                    height={12}
                    alt="rejectIcon"
                  />
                  <span className="text-[14px]">Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isAcceptOpen} onOpenChange={closeAcceptDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b ">
              Approve Withdrawal Confirmation
            </p>
            <div className="grid w-full items-center gap-[8px] mt-[24px]">
              <Label htmlFor="reason" className="">
                <div className="flex items-start text-[14px] text-[#333333]">
                  <p>
                    Have you sent{" "}
                    <span className="text-[#4AC971] font-bold">800.00 USD</span>
                    ?
                  </p>
                </div>
              </Label>
              <Textarea
                className="focus-visible:ring-0 focus-visible:ring-transparent h-[101px] placeholder:text-[14px] placeholder:text-[#8F8F8F] shadow-sm"
                placeholder="Provide the details. eg: transaction number"
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="shadow-sm w-full font-bold text-[white] bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isRejectOpen} onOpenChange={closeRejectDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b mb-4">
              Reject Withdrawal Confirmation
            </p>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="reason" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Reason for Rejection</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                className="focus-visible:ring-0 focus-visible:ring-transparent h-[101px] shadow-sm"
                placeholder=""
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="shadow-sm w-full font-bold text-[white] bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Details;
