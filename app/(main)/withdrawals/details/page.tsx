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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useWithdraw from "@/hooks/withdraw";
import BarLoader from "react-spinners/BarLoader";
import { toast } from "@/hooks/use-toast";

const Details = () => {
  const {activeWithdrawal} = useSelector((state: RootState) => state.withdraw);
  const { approveWithdrawal, rejectWithdrawal, loading } = useWithdraw()
  const [isAcceptOpen, setisAcceptOpen] = useState(false);
  const closeAcceptDialog = () => setisAcceptOpen(false);
  const [isRejectOpen, setisRejectOpen] = useState(false);
  const closeRejectDialog = () => setisRejectOpen(false);
  const [remark, setRemark] = useState('');
  const [transactionId, setTransactionId] = useState<any>(0)

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className=" mb-[32px]">
        <h3 className="text-[20px] font-semibold">
       {activeWithdrawal?.user_full_name} Requested  
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
                  Id
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeWithdrawal?.id} 
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Date
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeWithdrawal?.initiated_at?.split("T")[0]} {activeWithdrawal?.initiated_at?.split("T")[1]?.slice(0, 8)}
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">Trx Number</p>
                <p className="text-[14px] text-[#343434] w-2/4  text-right font-bold">{activeWithdrawal?.transaction_reference}</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  User Type
                </p>
                <p className=" text-[14px] font-bold">
                  {activeWithdrawal?.type}
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Full Name
                </p>
                <p className="text-[14px] text-right text-[#FC6435] w-2/4 font-bold">
                  {activeWithdrawal?.user_full_name}
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Method
                </p>
                <p className="text-[14px] text-[#343434] font-bold">Bank Transfer</p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Amount
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                  {activeWithdrawal?.amount}
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Charge
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                 {activeWithdrawal?.charge}
                </p>
              </div>
             
              <div className="py-[16px] px-[32px] flex items-center justify-between ">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Status
                </p>
                {activeWithdrawal?.status === 'approved' && <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#e4f5e9] border border-[#4AC971] text-[#4AC971] p-[5px]">
                    {activeWithdrawal?.status}
                  </p>}
                  {activeWithdrawal?.status === 'pending' && <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#f0dcca] border border-[#FF9F43] text-[#FF9F43] p-[5px]">
                    {activeWithdrawal?.status}
                  </p>}
                  {activeWithdrawal?.status === 'rejected' && <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#f1dada] border border-[#EB2222] text-[#EB2222] p-[5px]">
                    {activeWithdrawal?.status}
                  </p>}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="w-full bg-white p-[32px] rounded-[8px] mb-[24px]">
            <p className="text-[20px] font-semibold text-[#606060] pb-[12px] border-b border-b-[#8F8F8F]">
              User Withdraw Information
            </p>
            <div className="py-[16px] border-b border-b-[#8F8F8F] space-y-[20px]">
              <div><p className="text-[#606060] font-semibold">Account Number</p>
              <p className="text-[14px] text-[#606060]">{activeWithdrawal?.user?.account_number}</p></div>
               
               <div>
               <p className="text-[#606060] font-semibold">Account Name</p>
               <p className="text-[14px] text-[#606060]">{activeWithdrawal?.account_name}</p>
               </div>

               <div>
               <p className="text-[#606060] font-semibold">Bank</p>
               <p className="text-[14px] text-[#606060]">{activeWithdrawal?.bank_name}</p>
               </div>
             


              {activeWithdrawal?.status === 'pending' &&
               <div className="flex mt-[24px] items-center space-x-4">
               <button
                 className="bg-none border border-[#4AC971] rounded-[8px]  text-[#4AC971] flex items-center p-[10px] space-x-[8px] transition-all active:scale-95"
                 onClick={() => {
                  approveWithdrawal(activeWithdrawal?.id, activeWithdrawal?.transaction_reference);
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
                 onClick={() => {
                  setTransactionId(activeWithdrawal?.id);
                  setisRejectOpen(true);
                 }}
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
              }
              
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
              value={remark}
              onChange={(e) => {
                setRemark(e.target.value);
              }}
                className="focus-visible:ring-0 focus-visible:ring-transparent h-[101px] shadow-sm"
                placeholder=""
              />
            </div>
          </div>

          <DialogFooter>
            <Button
            onClick={() => {
              if(remark) {
                closeRejectDialog();
                rejectWithdrawal(transactionId, remark)
              } else {
                toast({
                  variant: "destructive",
                  title: "Kindly enter a reason for rejection",
                });
              }
            }}
            className="shadow-sm w-full font-bold text-[white] bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Details;
