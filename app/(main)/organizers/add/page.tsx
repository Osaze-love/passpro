import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

const AddOrganizer = () => {
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Add New Organizer</h3>
        <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  mx-[33px] bg-white">
          <Input
            placeholder="Name I Organizer"
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
      </section>
      <section className="bg-white p-[28px] mt-[34px]">
        <div className="space-y-[44px]">
          <div className="grid grid-cols-2 gap-[44px]">
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="username" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Username</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="username"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="organizationName" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Organization Name</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="organizationName"
                className=" py-[8px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
              />
            </div>
            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="firstName" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>First Name</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input
                id="firstName"
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
    </div>
  );
};

export default AddOrganizer;
