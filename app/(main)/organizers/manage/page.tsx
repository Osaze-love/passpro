"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const ManageOrganizer = () => {
  const router = useRouter();
  const organizersData = [
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
    {
      organizer: "Ayobami Taiwo",
      organization: "R & D Events",
      contact: "info@rdevents.com",
      country: "NG",
      featured: "No",
      date: "October 19th, 2024",
      balance: "13,000,000",
    },
  ];
  const [activeTab, setActiveTab] = useState("All");
  const [isConfirmOpen, setisConfirmOpen] = useState(false);
  const closeConfirmDialog = () => setisConfirmOpen(false);
  const [isSuccessOpen, setisSuccessOpen] = useState(false);
  const closeSuccessDialog = () => setisSuccessOpen(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Manage Organizers</h3>
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
      <section className="flex items-center space-x-[10px]">
        {[
          "All",
          "Active",
          "Banned",
          "Email Unverified",
          "Phone Verified",
          "KYC Verified",
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
              <TableHead className=" text-white text-center font-extrabold rounded-tl-[8px]">
                Organizer
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Organization Name
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Contact Info
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Country
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Featured
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Date Joined
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Balance
              </TableHead>
              <TableHead className="text-center font-extrabold text-white rounded-tr-[8px]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizersData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold text-center h-[75px] text-[#606060] border-l">
                  {data.organizer}
                  <p className="text-[14px] text-[#FC6435]">
                    @{data.organizer}
                  </p>{" "}
                </TableCell>
                <TableCell className="font-medium h-[75px] text-center text-[#606060] ">
                  {data.organization}

                  <p className="text-[14px] text-[#FC6435]">1 Event</p>
                </TableCell>
                <TableCell className="font-medium h-[75px] text-center text-[#606060] ">
                  {data.contact}

                  <p className="text-[14px] ">09023433233</p>
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-center">
                  {data.country}
                </TableCell>
                <TableCell className="text-center">
                  <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#f5e2e2] border border-[#FF3B30] p-[5px]">
                    {data.featured}
                  </p>
                </TableCell>
                <TableCell className="text-[#606060] text-[14px] text-center">
                  {data.date}
                  <p className="text-[14px] ">2 Days Ago</p>
                </TableCell>
                <TableCell className="text-[#606060] text-[14px] text-center">
                  {data.date}
                  <p className="text-[14px] font-bold">{data.balance}</p>
                </TableCell>

                <TableCell className="text-center border-r w-[200px] ">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px]  text-[#606060] flex items-center p-[10px] space-x-[8px] transition-all active:scale-95"
                      onClick={() => {
                        setisConfirmOpen(true);
                      }}
                    >
                      Feature
                    </button>
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                      onClick={() => {
                        router.push("/organizers/details");
                      }}
                    >
                      Details
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <Dialog open={isConfirmOpen} onOpenChange={closeConfirmDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <div className="text-center">
              <div className="flex justify-center w-full">
                <Image
                  src="/logo/confirmLogo.svg"
                  width={100}
                  height={57.71}
                  className=""
                  alt="confirmlogo"
                />
              </div>

              <p className="text-[24px] font-bold pb-4 mt-[24px]">
                Confirmation
              </p>
            </div>

            <p className="text-[18px]  text-[#49454F] py-4 text-center">
              Are you sure you want to feature this organizer?
            </p>
          </div>

          <DialogFooter>
            <div className="space-x-2 flex items-center w-full">
              <Button
                className="shadow-sm font-bold w-full text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95"
                onClick={() => {
                  setisConfirmOpen(false);
                  setisSuccessOpen(true);
                }}
              >
                Yes
              </Button>
              <Button className="shadow-sm w-full font-bold text-[#FC6435] bg-transparent hover:bg-transparent transition-all active:scale-95 border border-[#FC6435]">
                No
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isSuccessOpen} onOpenChange={closeSuccessDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <div className="text-center">
              <div className="flex justify-center w-full">
                <Image
                  src="/logo/successlogo.svg"
                  width={100}
                  height={57.71}
                  className=""
                  alt="successlogo"
                />
              </div>

              <p className="text-[24px] font-bold pb-4 mt-[24px]">Success</p>
            </div>

            <p className="text-[18px]  text-[#49454F] py-4 text-center">
              You have successfully featured the event{" "}
              <span className="font-bold">“The Tech Summit 2024”</span>
              organized by <span className="font-bold">T & D Events</span>
            </p>
          </div>

          <DialogFooter>
            <div className="space-x-2  w-full">
              <Button className="shadow-sm font-semibold py-4 w-full text-[24px] text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                Proceed to Dashboard
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageOrganizer;
