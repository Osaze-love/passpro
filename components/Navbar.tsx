import { Bell, CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
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

        <div className="space-x-[6px] flex items-center">
          <Avatar>
            <AvatarImage
              src="https://s3-alpha-sig.figma.com/img/51e0/8f4c/9691af661a1026969f7d54c57821a447?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=prU7JUYowttySv45QxL16wEdmJHt6YY6j54RyI0XIPEklyWTFLLk3taWl~l0eXnNg9KcBVAsXxUd7OZWxYEMupFKqN4t0Ggt~4sDVFDU5HoTsoYKYQ670b4jCD2UZ8PfchPGjDqVqbYXTWdUbZdw0Nbz02ybF43q0Ur844NTccHmpYBELP6EzB3SvwA5UqPTZFFbC0lApyuBNDsibdbi~CSs-Or2LRzcUO4huGP2fxmzYuu~Xso~UsWEQMpgcCCVv6ktsqsysWxbP0T3D9rdsErNhOiKe1~3mJIvI-2z9E35Yjci21aqe6aWo15KXByjaAf6IasXpPfwr-g6bHZqkg__"
              alt="@shadcn"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
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
      </div>
    </div>
  );
};

export default Navbar;
