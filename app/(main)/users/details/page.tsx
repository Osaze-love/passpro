"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const userDetails = () => {
  const [isAddOpen, setisAddOpen] = useState(false);
  const closeAddDialog = () => setisAddOpen(false);
  const [isSubtractOpen, setisSubtractOpen] = useState(false);
  const closeSubtractDialog = () => setisSubtractOpen(false);
  const [isBanOpen, setisBanOpen] = useState(false);
  const closeBanDialog = () => setisBanOpen(false);
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[57px]">
        <h3 className="text-[20px] font-semibold">
        User Detail - Ayobami
        </h3>
        <button
          //   onClick={() => setisCategoryOpen(true)}
          className="bg-none border py-[12px] border-[#FC6435] rounded-[8px] w-[275px] text-[#FC6435] transition-all active:scale-95"
        >
          <span className="text-lg">+</span>{" "}
          <span className="text-[20px]">Login as User</span>
        </button>
      </section>
      <section className="grid grid-cols-2 gap-12">
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#164473]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Balance</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">
              ₦0
            </p>
          </div>
          <div className="bg-[#1D5793] px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/balancelogo.svg"
              alt="balancelogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#089A47]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Deposits</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">20</p>
          </div>
          <div className="bg-[#28C76F]  px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/eventlogo.svg"
              alt="eventlogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#D9741C]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Withdrawal</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">
              ₦0
            </p>
          </div>
          <div className="bg-[#EE962A] px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/withdrawalhouselogo.svg"
              alt="withdrawalhouselogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between h-[100px] rounded-[8px] bg-[#B1350F]">
          <div className="px-[18px]">
            <p className="text-white text-[14px]">Transactions</p>
            <p className="text-[24px] text-white font-semibold mt-[11px]">0</p>
          </div>
          <div className="bg-[#D54113] px-[31px] h-full flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
            <Image
              src="/logo/transactionlogo.svg"
              alt="transactionlogo"
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-5 gap-[21px] mt-[34px]">
        <Button
          className="shadow-sm font-semibold text-[14px] text-white bg-[#089A47] hover:bg-[#089A47] transition-all active:scale-95 flex items-center space-x-[12px]"
          onClick={() => {
            setisAddOpen(true);
          }}
        >
          <Image
            src={"/logo/addbalance.svg"}
            height={24}
            width={24}
            alt="addbalance"
          />
          <p>Add Balance</p>
        </Button>
        <Button
          className="shadow-sm font-semibold text-[14px] text-white bg-[#1280C4] hover:bg-[#1280C4] transition-all active:scale-95 flex items-center space-x-[12px]"
          onClick={() => {
            setisSubtractOpen(true);
          }}
        >
          <Image
            src={"/logo/subtractbalance.svg"}
            height={24}
            width={24}
            alt="subtractbalance"
          />
          <p>Subtract Balance</p>
        </Button>
        <Button className="shadow-sm font-semibold text-[14px] text-white bg-[#D9741C] hover:bg-[#D9741C] transition-all active:scale-95 flex items-center space-x-[12px]">
          <Image
            src={"/logo/loginslogo.svg"}
            height={24}
            width={24}
            alt="loginslogo"
          />
          <p>Logins</p>
        </Button>
        <Button className="shadow-sm font-semibold text-[14px] text-white bg-[#5C098C] hover:bg-[#5C098C] transition-all active:scale-95 flex items-center space-x-[12px]">
          <Image
            src={"/logo/addnotification.svg"}
            height={24}
            width={24}
            alt="addnotification"
          />
          <p>Add Notifications</p>
        </Button>
        <Button
          className="shadow-sm font-semibold text-[14px] text-white bg-[#1215C4] hover:bg-[#1215C4] transition-all active:scale-95 flex items-center space-x-[12px]"
          onClick={() => {
            setisBanOpen(true);
          }}
        >
          <Image
            src={"/logo/banorganizer.svg"}
            height={24}
            width={24}
            alt="banorganizer"
          />
          <p>Ban Organizer</p>
        </Button>
      </section>
      <section className="bg-white p-[28px] mt-[34px]">
        <div className="space-y-[44px]">
            <p className="text-[20px] text-[#333333] font-semibold border-b border-b-[#E3E3E3] pb-[10px]">Information of Ayobami Taiwo</p>
          <div className="grid grid-cols-2 gap-[44px]">
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="firstname" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>First Name</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="firstname"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="lastName" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Last Name</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="lastName"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="email" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Email</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="email"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="phoneNumber" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Phone Number</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="phoneNumber"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          
          </div>
          <div className="grid w-full items-center gap-[8px]">
            <Label htmlFor="address" className="">
              <div className="flex items-start font-bold text-[20px] text-[#333333]">
                <p>Address</p>
              </div>
            </Label>
            <Input
              id="address"
              className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
            />
          </div>
          <div className="grid grid-cols-4 gap-[38px]">
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="city" className="">
                <div className="flex items-start font-bold text-[20px] text-[#333333]">
                  <p>City</p>
                </div>
              </Label>
              <Input
                id="city"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="state" className="">
                <div className="flex items-start font-bold text-[20px] text-[#333333]">
                  <p>State</p>
                </div>
              </Label>
              <select
                id="state"
                className=" py-[8px] outline-none border rounded-[8px] px-4 shadow-sm"
              >
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
              </select>
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="zipcode/postal" className="">
                <div className="flex items-start font-bold text-[20px] text-[#333333]">
                  <p>Zipcode/Postal</p>
                </div>
              </Label>
              <Input
                id="zipcode/postal"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="country" className="">
                <div className="flex items-start font-bold text-[20px] text-[#333333]">
                  <p>Country</p>
                </div>
              </Label>
              <Input
                id="country"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[38px]">
            <div className="grid w-full gap-[8px]">
              <p className="text-[#37474F] text-[20px] font-semibold">
                Email Verification
              </p>
              <div className="bg-[#089A47] flex items-center justify-between h-[50px] rounded-[8px]">
                <p className="text-white pl-[27px] font-semibold">Verified</p>
                <div className="bg-[#4E3D3D] h-full w-[16px] rounded-tr-[8px] rounded-br-[8px]"></div>
              </div>
            </div>
            <div className="grid w-full gap-[8px]">
              <p className="text-[#37474F] text-[20px] font-semibold">
                Mobile Verification
              </p>
              <div className="bg-[#089A47] flex items-center justify-between h-[50px] rounded-[8px]">
                <p className="text-white pl-[27px] font-semibold">Verified</p>
                <div className="bg-[#4E3D3D] h-full w-[16px] rounded-tr-[8px] rounded-br-[8px]"></div>
              </div>
            </div>
            <div className="grid w-full gap-[8px]">
              <p className="text-[#37474F] text-[20px] font-semibold">2FA</p>
              <div className="bg-[#EB2222] flex items-center justify-between h-[50px] rounded-[8px]">
                <div className="bg-[#4E3D3D] h-full w-[16px] rounded-tl-[8px] rounded-bl-[8px]"></div>
                <p className="text-white pl-[27px] font-semibold ">Disabled</p>
                <div></div>
              </div>
            </div>
            <div className="grid w-full gap-[8px]">
              <p className="text-[#37474F] text-[20px] font-semibold">
                KYC Verification
              </p>
              <div className="bg-[#089A47] flex items-center justify-between h-[50px] rounded-[8px]">
                <p className="text-white pl-[27px] font-semibold">Verified</p>
                <div className="bg-[#4E3D3D] h-full w-[16px] rounded-tr-[8px] rounded-br-[8px]"></div>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-[10px] shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
          >
            Submit
          </Button>
        </div>
      </section>
      <Dialog open={isAddOpen} onOpenChange={closeAddDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b">
              Add Balance
            </p>
            <div className="grid w-full items-center mt-[14px] gap-[8px]">
              <Label htmlFor="amount" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Amount</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="amount"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px] mt-[14px] pb-4 border-b">
              <Label htmlFor="remark" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Remark</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                id="remark"
                className=" py-[8px] h-[178px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="shadow-sm w-full font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isSubtractOpen} onOpenChange={closeSubtractDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b">
              Subtract Balance
            </p>
            <div className="grid w-full items-center mt-[14px] gap-[8px]">
              <Label htmlFor="amount" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Amount</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="amount"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px] mt-[14px] pb-4 border-b">
              <Label htmlFor="remark" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Remark</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                id="remark"
                className=" py-[8px] h-[178px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="shadow-sm w-full font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isBanOpen} onOpenChange={closeBanDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b">
              Ban Organizer
            </p>
            <p className="text-[#37474F] text-[14px] font-medium mt-4">
              If you ban this organizer he/she won't able to access his/her
              organizer’s account.
            </p>
            <div className="grid w-full items-center gap-[8px] mt-[14px] pb-4 border-b">
              <Label htmlFor="remark" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Reason</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Textarea
                id="remark"
                className=" py-[8px] h-[178px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="shadow-sm w-full font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default userDetails;
