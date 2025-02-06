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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Details = () => {
  const {activeEvent} = useSelector((state: RootState) => state.event);
  const [isAcceptOpen, setisAcceptOpen] = useState(false);
  const closeAcceptDialog = () => setisAcceptOpen(false);
  const [isRejectOpen, setisRejectOpen] = useState(false);
  const closeRejectDialog = () => setisRejectOpen(false);
  useEffect(() => {
    const hideChevronsInTrigger = () => {
      // Select all AccordionTrigger elements
      const triggers = document.querySelectorAll(".accordion-trigger");
      const style =
        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200";
      triggers.forEach((trigger) => {
        const chevrons = trigger.querySelectorAll(
          `.${style.replace(/ /g, ".")}`
        );

        chevrons.forEach((chevron) => {
          (chevron as HTMLElement).style.display = "none"; // Completely remove the element from layout
        });
      });
    };

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver(() => {
      hideChevronsInTrigger();
    });

    // Observe changes in the entire document
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial run
    hideChevronsInTrigger();

    // Clean up the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Event Details</h3>
        {/* <div className="flex items-center justify-end space-x-4">
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
        </div> */}
      </section>

      <section className="grid grid-cols-5 gap-[32px]">
        <div className="col-span-2">
          <div className="w-full rounded-[8px] bg-white px-[32px] pb-[32px] mb-[32px]">
            <p className="text-[20px] font-semibold text-[#606060] py-[32px]">
              Event
            </p>
            <div className="border rounded-[8px]">
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Title
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.event_name}
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">Type</p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.event_type}
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Organizer
                </p>
                <p className="text-[#FC6435] text-[14px] font-bold">
                {activeEvent?.user_full_name}
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Category
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.category_name}
                </p>
              </div>
              <div className="flex items-center justify-between py-[16px] px-[32px] border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Location
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.event_location}
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Start Date
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.start_date}
                </p>
              </div>
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  End Date
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.end_date}
                </p>
              </div>
            
              <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Featured
                </p>
                {activeEvent?.featured === 0 ? <p className=" text-[#FF3B30] w-[64px] flex items-center justify-center rounded-[20px] bg-[#f5e2e2] border border-[#FF3B30] p-[5px]">
                    No
                  </p> :
                  <p className=" w-[64px] flex items-center justify-center rounded-[20px] bg-[#cee9d5] text-[#34C759] border border-[#34C759] p-[5px]">
                  Yes
                </p>
                  }
              </div>
              {/* <div className="py-[16px] px-[32px] flex items-center justify-between border-b">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Price
                </p>
                <p className="text-[14px] text-[#343434] font-bold">
                {activeEvent?.price}
                </p>
              </div> */}
              <div className="py-[16px] px-[32px] flex items-center justify-between ">
                <p className="text-[14px] text-[#343434] font-semibold">
                  Status
                </p>
                {activeEvent.status === 'Pending' ? <p className="w-[99px] text-[#606060] rounded-[20px] flex items-center justify-center bg-[#fceceb] border border-[#FF9F43] p-[5px]">
                    {activeEvent.status}
                  </p> :
                  <p className="w-[99px] flex items-center justify-center rounded-[20px] bg-[#cee9d5] text-[#34C759] border border-[#34C759] p-[5px]">
                  {activeEvent.status}
                </p>
                  }
              </div>
            </div>
          </div>

          {activeEvent?.tickets?.map((ticket:any, index:any) => (
                  <div key={index} className="w-full my-[10px] p-[10px] border border-[#d9d9d9]  rounded-[12px] grid items-center grid-cols-6">
                  <div className='col-span-3'>
                  <p>{ticket?.ticket_name}</p>
                  <p className="text-[#8F8F8F] text-[10px]">{ticket?.ticket_description}</p>
                  </div>
                  <div className="col-span-1 h-full w-[1px] bg-[#D9D9D9]">
    
                  </div>
    
                  <div className="col-span-2 space-y-[5px]">
                    <p>₦{ticket?.ticket_price}</p>
                    <p className="text-[#FC6435]">{ticket?.ticket_quantity} unit(s) available</p>
                  </div>
                 
                </div>
           ))}
           
        </div>
        <div className="col-span-3 ">
          <div className="w-full bg-white p-[32px] rounded-[8px] mb-[24px]">
            <p className="text-[20px] font-semibold text-[#606060] pb-[12px] border-b border-b-[#8F8F8F]">
              Info
            </p>
            {/* <div className="py-[16px] border-b border-b-[#8F8F8F]">
              <p className="text-[#606060] font-semibold">Short description:</p>
              <p className="text-[14px] text-[#606060]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                enim.
              </p>
            </div> */}
            <div className="py-[16px] border-b border-b-[#8F8F8F]">
              <p className="text-[#606060] font-semibold">Description:</p>
              <p className="text-[14px] text-[#606060]">
               {activeEvent?.event_description}
              </p>
            </div>
            <div className="py-[16px] ">
              <p className="text-[#606060] font-semibold">Event Address:</p>
              <p className="text-[14px] text-[#606060]">{activeEvent?.event_location}</p>
            </div>
          </div>
          <div className="w-full bg-white p-[32px] rounded-[8px] mb-[24px]">
            <p className="text-[20px] font-semibold text-[#606060] pb-[12px] border-b border-b-[#8F8F8F]">
              Cover Photo
            </p>
            <img src={`https://sub.passpro.africa/storage/${activeEvent?.gallery?.cover_photo}`} className="w-full py-4" />
          </div>
          {/* <div className="w-full bg-white p-[32px] rounded-[8px] mb-[24px]">
            <p className="text-[20px] font-semibold text-[#606060] pb-[12px] border-b border-b-[#8F8F8F]">
              Speakers
            </p>
            <p className="text-[#343434] py-4">No Speakers added</p>
          </div> */}
          <div className="w-full bg-white p-[32px] rounded-[8px] ">
            <p className="text-[20px] font-semibold text-[#606060] pb-[12px] border-b border-b-[#8F8F8F]">
              Gallery
            </p>
            <img src={`https://sub.passpro.africa/storage/${activeEvent?.gallery?.event_image}`} className="w-full py-4" />
          </div>
        </div>
      </section>

      <Dialog open={isAcceptOpen} onOpenChange={closeAcceptDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4">
              Approve Event Confirmation
            </p>
            <p className="text-[14px]  text-[#808080] py-4 border-t border-b">
              Are you sure to approve this event?
            </p>
          </div>

          <DialogFooter>
            <div className="space-x-2">
              <Button className="shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                No
              </Button>
              <Button className="shadow-sm font-bold text-[#FC6435] bg-transparent hover:bg-transparent transition-all active:scale-95 border border-[#FC6435]">
                Yes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isRejectOpen} onOpenChange={closeRejectDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b mb-4">
              Reject Event Confirmation
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
