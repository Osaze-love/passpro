"use client"
import { Bell, CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useRouter } from "next/navigation";
import { resetState } from "@/redux/slices/userslice";

const Navbar = () => {
  const {usersDetail} = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="sticky bg-[#FC6435] top-0 flex items-center  justify-between border-b z-30">
      <div className="flex w-[625px] h-[48px] items-center border px-2 rounded-[8px] my-[33px] mx-[33px]">
        <Input
          placeholder="Search events, tickets and occassions"
          className=" focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 text-white placeholder:text-[#D9D9D9] placeholder:text-[12px] "
        />
        <Image
          src={"/icons/searchIcon.svg"}
          width={20}
          height={19.88}
          alt="searchIcon"
        />
      </div>
      <div className="flex items-center space-x-[32px] pr-[17px]">
        <Image
          src={"/icons/supportIcon.svg"}
          width={30}
          height={30}
          alt="supportIcon"
        />
        <Image
          src={"/icons/globeIcon.svg"}
          width={30}
          height={30}
          alt="globeIcon"
        />
        <Image
          src={"/icons/settingsIcon.svg"}
          width={30}
          height={30}
          alt="settingsIcon"
        />
        <Image
          src={"/icons/notificationIcon.svg"}
          width={30}
          height={30}
          alt="notificationIcon"
        />
        
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <div className="cursor-pointer space-x-[6px] flex items-center">
          <Avatar>
            <AvatarImage
              src={`https://sub.passpro.africa/storage/${usersDetail?.profile_image}`}
              alt="@shadcn"
              className="object-cover"
            />
            <AvatarFallback>
  {usersDetail?.username ? usersDetail.username[0] : 'U'}
</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-[12px] text-white">Admin</h3>
          <Image
            src={"/icons/accordionIcon.svg"}
            alt="right arrow"
            width={8}
            height={13}
            className="rotate-90"
          />
        </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white px-0">
          <div className="bg-white flex flex-col gap-[20px] rounded-[8px] ">
            <p 
            onClick={() => {
              router.push('/profile')
            } }
            className="px-[30px] cursor-pointer py-[9px] border-b font-semibold text-[#343434] border-b-[#D9D9D9]">Profile</p>
            <p
             onClick={() => {
              dispatch(resetState())
             }}
            className="px-[30px] py-[9px] font-semibold text-[#343434] cursor-pointer">Logout</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
   
      </div>
    </div>
  );
};

export default Navbar;
