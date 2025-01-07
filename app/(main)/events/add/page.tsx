"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useCategory from "@/hooks/category";
import BarLoader from "react-spinners/BarLoader";

const AddEvents = () => {
 
  const [isOverview, setIsOverview] = useState(true);
  const [isGallery, setIsGallery] = useState(false);
  const [isTickets, setIsTickets] = useState(false);
  const { getCategories, loading } = useCategory();
  const {categories} = useSelector((state: RootState) => state.category);

  useEffect(() => {
      getCategories();
    },[])

  const handleNext = () => {
    if (isOverview) {
       setIsOverview(false);
      setIsGallery(true);
    } else if (isGallery) {
      setIsGallery(false);
      setIsTickets(true);
    }
  };

  const handlePrevious = () => {
    if (isTickets) {
      setIsTickets(false);
      setIsGallery(true);
    } else if (isGallery) {
      setIsGallery(false);
      setIsOverview(true);
    }
  };

  const [event, setEvent] = useState({
    user_id: 1,
    category_id: 2,
    event_name: "",
    event_description: "",
    status: "Pending",
    featured: false,
    price: 0,
    event_type: "physical",
    event_location: "",
    start_date: "",
    start_date_time: "",
    end_date: "",
    end_date_time: "",
    cover_photo: "",
    event_image: "",
    tickets: [
      {
        ticket_category: "",
        ticket_type: "",
        ticket_name: "",
        ticket_description: "",
        ticket_stock: "",
        ticket_quantity: 0,
        ticket_price: 0,
        ticket_purchase_limit: 0,
        transfers_fees_to_guest: false,
        group_size: null,
      },
    ],
  });

  const isOverviewFormValid = () => {
    return (
      event.event_name &&
      event.event_description &&
      event.event_type &&
      event.event_location &&
      event.category_id &&
      event.start_date &&
      event.start_date_time &&
      event.end_date &&
      event.end_date_time
    );
  };

  // Step 2: Update state dynamically (example for event name)
  const handleInputChange = (field: string, value: any) => {
    setEvent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Step 3: Add new ticket dynamically
  const addTicket = () => {
    setEvent((prev) => ({
      ...prev,
      tickets: [
        ...prev.tickets,
        {
          ticket_category: "",
          ticket_type: "paid",
          ticket_name: "",
          ticket_description: "",
          ticket_stock: "",
          ticket_quantity: 0,
          ticket_price: 0,
          ticket_purchase_limit: 0,
          transfers_fees_to_guest: false,
          group_size: null,
        },
      ],
    }));
  };

  const tickets = [
    {
      name: 'Regular Ticket',
      quantity: '0/Unlimited',
      price: '₦5,000',
    },
    {
      name: 'Regular Ticket',
      quantity: '0/Unlimited',
      price: '₦5,000',
    },
    {
      name: 'Regular Ticket',
      quantity: '0/Unlimited',
      price: '₦5,000',
    },
  ]
  const coverPhotoInputRef = useRef<HTMLInputElement | null>(null);
  const eventImageInputRef = useRef<HTMLInputElement | null>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'cover_photo' | 'event_image') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvent(prevState => ({
          ...prevState,
          [type]: reader.result as string, // Store image URL in state
        }));
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };
  

  const isGalleryFormValid = event.cover_photo !== "" && event.event_image !== "" && event.event_name !== "" && event.event_description !== "";

  return (

    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">
     {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
<h3 className="text-[20px] font-semibold text-[#343434]">Create Event</h3>
 <div className="flex space-x-[8px] bg-[#FFEDE5] w-[573px] items-center  px-[18px] py-[12px] rounded-[4px]">
        <h2 className="text-[#8F8F8F]  font-medium">Home</h2>
        <Image
          src="/icons/rightarrow.svg"
          height={10}
          width={5}
          alt="rightarrow"
        />
        <h2 className="text-[#FC6435] font-medium">Create Event</h2>
      </div>

      {isOverview && (
  <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
    <div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center my-[50px] px-[43px]">
  {/* First Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/oneorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Overview</h2>
  </div>

  {/* Connector Line 1 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Second Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twogrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Gallery</h2>
  </div>

  {/* Connector Line 2 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Third Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Tickets</h2>
  </div>

  {/* Connector Line 3 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Fourth Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourgrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Review & Publish</h2>
  </div>
</div>
   
    <div className="border-b border-b-[#D9D9D9] py-2">
      <p className="text-[20px] font-semibold text-[#343434]">Overview</p>
    </div>

    <div className="py-[30px] flex flex-col gap-[16px]">
      {/* Event Name */}
      <div className="flex w-full items-center">
        <Label htmlFor="eventname" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">Event Name</p>
        </Label>
        <Input
          id="eventname"
          name="event_name"
          value={event.event_name}
          onChange={(e) => setEvent({ ...event, event_name: e.target.value })}
          placeholder="Type Your Event Name Here"
          className="py-[8px] border-[#C4C4C4] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm placeholder:text-[#D9D9D9]"
        />
      </div>

      {/* Event Description */}
      <div className="flex w-full items-center">
        <Label htmlFor="eventdescription" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">Event Description</p>
        </Label>
        <Textarea
          id="eventdescription"
          name="event_description"
          value={event.event_description}
          onChange={(e) => setEvent({ ...event, event_description: e.target.value })}
          className="focus-visible:ring-0 border-[#C4C4C4] focus-visible:ring-transparent h-[101px] shadow-sm placeholder:text-[#D9D9D9]"
          placeholder="Type Your Event Description Here"
        />
      </div>

      {/* Event Type */}
      <div className="flex w-full items-center">
        <Label htmlFor="eventtype" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">Event Type</p>
        </Label>
        <select
          id="eventtype"
          name="event_type"
          value={event.event_type}
          onChange={(e) => setEvent({ ...event, event_type: e.target.value })}
          className="w-full py-[8px] border-[#C4C4C4] outline-none border rounded-[8px] px-4 shadow-sm"
        >
          <option value="physical">Physical</option>
          <option value="online">Online</option>
        </select>
      </div>

      {/* Event Location */}
      <div className="flex w-full items-center">
        <Label htmlFor="eventlocation" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">Event Location</p>
        </Label>
        <Input
          id="eventlocation"
          name="event_location"
          value={event.event_location}
          onChange={(e) => setEvent({ ...event, event_location: e.target.value })}
          placeholder="Type Your Event Location Here"
          className="py-[8px] border-[#C4C4C4] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm placeholder:text-[#D9D9D9]"
        />
      </div>

      {/* Event Category */}
      <div className="flex w-full items-center">
        <Label htmlFor="eventcategory" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">Event Category</p>
        </Label>
        <select
  id="eventcategory"
  name="category_id"
  value={event.category_id}
  onChange={(e) => setEvent({ ...event, category_id: Number(e.target.value) })}
  className="w-full py-[8px] border-[#C4C4C4] outline-none border rounded-[8px] px-4 shadow-sm"
>
  <option value="" disabled>Select One</option>
  {categories.map((category) => (
    <option key={category?.id} value={category?.id}>
      {category?.category_name}
    </option>
  ))}
</select>

      </div>

      {/* Start Date and Time */}
      <div className="flex w-full items-center">
        <Label htmlFor="startdate" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">Start Date</p>
        </Label>
        <div className="flex items-center w-full space-x-6">
          <input
            type="date"
            name="start_date"
            value={event.start_date}
            onChange={(e) => setEvent({ ...event, start_date: e.target.value })}
            className="py-[8px] border-[#C4C4C4] border rounded-[4px] px-4 shadow-sm placeholder:text-[#D9D9D9] w-2/4"
          />
          <div className="flex items-center w-2/4 space-x-4">
            <Label htmlFor="starttime" className="">
              <p className="font-medium text-[#333333] whitespace-nowrap">Time:</p>
            </Label>
            <input
              type="time"
              name="start_date_time"
              value={event.start_date_time}
              onChange={(e) => setEvent({ ...event, start_date_time: e.target.value })}
              className="py-[8px] border-[#C4C4C4] border rounded-[4px] px-4 shadow-sm placeholder:text-[#D9D9D9] w-2/4"
            />
          </div>
        </div>
      </div>

      {/* End Date and Time */}
      <div className="flex w-full items-center">
        <Label htmlFor="enddate" className="w-[200px]">
          <p className="font-medium text-[#333333] whitespace-nowrap">End Date</p>
        </Label>
        <div className="flex items-center w-full space-x-6">
          <input
            type="date"
            name="end_date"
            value={event.end_date}
            onChange={(e) => setEvent({ ...event, end_date: e.target.value })}
            className="py-[8px] border-[#C4C4C4] border rounded-[4px] px-4 shadow-sm placeholder:text-[#D9D9D9] w-2/4"
          />
          <div className="flex items-center w-2/4 space-x-4">
            <Label htmlFor="endtime" className="">
              <p className="font-medium text-[#333333] whitespace-nowrap">Time:</p>
            </Label>
            <input
              type="time"
              name="end_date_time"
              value={event.end_date_time}
              onChange={(e) => setEvent({ ...event, end_date_time: e.target.value })}
              className="py-[8px] border-[#C4C4C4] border rounded-[4px] px-4 shadow-sm placeholder:text-[#D9D9D9] w-2/4"
            />
          </div>
        </div>
      </div>

      {/* Save & Continue Button */}
      <button
        onClick={handleNext}
        disabled={!isOverviewFormValid()}
        className="w-full py-[10px] bg-[#FC6435] text-white rounded-[4px] disabled:bg-[#D9D9D9]"
      >
        Save & Continue
      </button>
    </div>
  </section>
)}


      {isGallery &&  <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
<div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center my-[50px] px-[43px]">
  {/* First Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/onegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Overview</h2>
  </div>

  {/* Connector Line 1 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Second Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twoorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Gallery</h2>
  </div>

  {/* Connector Line 2 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Third Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Tickets</h2>
  </div>

  {/* Connector Line 3 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Fourth Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourgrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Review & Publish</h2>
  </div>
</div>
        <div className="border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Gallery</p>
        </div>
        <div className="flex items-center">
      <div className="space-y-[10px]">
        <h2 className="text-[#343434] font-semibold">Upload Cover Photo</h2>
        <p className="w-2/4 text-[12px] text-[#8F8F8F]">Supported Files: .png, .jpg, .jpeg Image will be resized into 1300x520 px</p>
      </div>

      <div className="border border-[#C4C4C4] rounded-[8px] flex items-center justify-center w-full py-[40px]">
        {event.cover_photo ? (
          <>
            <Image
              src={event.cover_photo}
              width={120}
              height={120}
              alt="Cover Image"
              className="cursor-pointer"
              onClick={() => {
                if (coverPhotoInputRef.current) coverPhotoInputRef.current.click();
              }}
            />
            <input
              ref={coverPhotoInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'cover_photo')}
            />
          </>
        ) : (
          <p
            onClick={() => {
              if (coverPhotoInputRef.current) coverPhotoInputRef.current.click();
            }}
            className="text-[#8F8F8F] cursor-pointer"
          >
            Add Image
          </p>
        )}
      </div>
    </div>

    {/* Event Image */}
    <div className="flex items-center my-[40px]">
      <div className="space-y-[10px]">
        <h2 className="text-[#343434] font-semibold">Upload Event Image / Gallery Images</h2>
        <p className="w-2/4 text-[12px] text-[#8F8F8F]">Supported Files: .png, .jpg, .jpeg Image will be resized into 1300x520 px</p>
      </div>

      <div className="border border-[#C4C4C4] rounded-[8px] flex items-center justify-center w-full py-[40px]">
        {event.event_image ? (
          <>
            <Image
              src={event.event_image}
              width={120}
              height={120}
              alt="Event Image"
              className="cursor-pointer"
              onClick={() => {
                if (eventImageInputRef.current) eventImageInputRef.current.click();
              }}
            />
            <input
              ref={eventImageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, 'event_image')}
            />
          </>
        ) : (
          <p
            onClick={() => {
              console.log("Clicked Add Image");
              if (eventImageInputRef.current) eventImageInputRef.current.click();
            }}
            className="text-[#8F8F8F] cursor-pointer"
          >
            Add Image
          </p>
        )}
      </div>
  </div>
            <div className="w-full flex items-center justify-between">
              <div>
              <p
                      className="text-[#FC6435] text-[22px]  font-semibold cursor-pointer"
                                 onClick={handlePrevious}

                    >
                     { '<    Previous' } 
                    </p>
              </div>
         
            <button
                      className="bg-none  border-none text-[22px] w-2/4 rounded-[8px] text-white py-[10px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                      onClick={handleNext}
                      disabled={!isGalleryFormValid}

                    >
                     { 'Save & Continue  >' } 
                    </button>


            </div>
       
      </section>}

      {isTickets &&  <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center my-[50px] px-[43px]">
  {/* First Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/onegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Overview</h2>
  </div>

  {/* Connector Line 1 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Second Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twogrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Gallery</h2>
  </div>

  {/* Connector Line 2 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Third Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threeorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Tickets</h2>
  </div>

  {/* Connector Line 3 */}
  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  {/* Fourth Step */}
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourgrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Review & Publish</h2>
  </div>
</div>
      <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Tickets</p>
          <button
                      className="bg-none border-none text-[20px] px-[15px] rounded-[8px] text-white py-[5px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                   
                    >
                     { 'Add New Ticket' } 
                    </button>
        </div>

        <section className="mt-[40px]">
<Table className="border-b">
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow className="bg-[#FFEDE5] hover:bg-[#FFEDE5] ">
      <TableHead className=" text-[#606060] font-medium rounded-tl-[8px]">
      Ticket Name
      </TableHead>
      <TableHead className="text-[#606060] text-center font-medium">
      Ticket Quantity
      </TableHead>
      <TableHead className="text-[#606060] text-center font-medium">
      Price
      </TableHead>
      
      <TableHead className=" font-medium text-right text-[#606060]  rounded-tr-[8px]">
        Action
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {tickets.map((data, index) => (
      <TableRow key={index}>
        <TableCell className="font-semibold h-[75px] text-[#606060] border-l">
          {data.name}
        </TableCell>
        <TableCell className="text-[#606060] font-semibold text-center">
             <p className="font-semibold">  
              {data.quantity}
             </p>
            </TableCell>

           <TableCell className="text-[#606060] font-semibold text-center">
             <p className="font-semibold">  
              {data.price}
             </p>
            </TableCell>
        <TableCell className="text-right border-r">
          <div className="flex items-center space-x-3 justify-end">
          <Image
          src="/icons/Edit.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
        />
        <Image
          src="/icons/Copy.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
        />
        <Image
          src="/icons/delete.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
        />
          </div>
      
           
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</section>
  
<div className="w-full flex items-center justify-between">
              <div>
              <p
                      className="text-[#FC6435] text-[22px]  font-semibold cursor-pointer"
                                 onClick={handlePrevious}

                    >
                     { '<    Previous' } 
                    </p>
              </div>
         
            <button
                      className="bg-none  border-none text-[22px] w-2/4 rounded-[8px] text-white py-[10px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                                 onClick={handleNext}

                    >
                     { 'Save & Continue  >' } 
                    </button>


            </div>
      </section>}
     
  </div>
  )

};

export default AddEvents;
