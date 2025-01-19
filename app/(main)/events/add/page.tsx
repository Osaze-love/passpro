"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone, Accept } from "react-dropzone";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useEvent from "@/hooks/events";

const AddEvents = () => {
 
  const [isOverview, setIsOverview] = useState(true);
  const [isGallery, setIsGallery] = useState(false);
  const [isTickets, setIsTickets] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const { getCategories, loading } = useCategory();
  const {getEvents, addLoading, createEvent} = useEvent();
  const [isTicketModal, setisTicketModal] = useState(false);
  const closeisTicketModal = () => {
    setisTicketModal(false)
  }
  const {categories} = useSelector((state: RootState) => state.category);
  const {id} = useSelector((state: RootState) => state.user.usersDetail);

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
    } else if (isTickets) {
      setIsTickets(false)
      setIsReview(true)
    }
  };
  const handlePrevious = () => {
    if (isTickets) {
      setIsTickets(false);
      setIsGallery(true);
    } else if (isGallery) {
      setIsGallery(false);
      setIsOverview(true);
    } else if (isReview) {
      setIsReview(false)
      setIsTickets(true);
    }
  };

  const [editingIndex, setEditingIndex] = useState<number | null>(null);


  const handleDuplicateTicket = (index: number) => {
    setEvent((prev: any) => {
      const tickets = [...prev.tickets];
      const duplicatedTicket = { ...tickets[index] };
      return {
        ...prev,
        tickets: [...tickets, duplicatedTicket], // Append duplicated ticket
      };
    });
  };
  
  const handleDeleteTicket = (index: number) => {
    setEvent((prev) => {
      const tickets = [...prev.tickets];
      tickets.splice(index, 1); // Remove ticket at index
      return {
        ...prev,
        tickets, // Update state with the new tickets array
      };
    });
  };

  const handleEditTicket = (index: number) => {
    const selectedTicket = event.tickets[index];
    setTicketDetails(selectedTicket); // Set the selected ticket details
    setEditingIndex(index);
    setisTicketModal(true); // Open the modal
  };
  const [event, setEvent] = useState({
    user_id: id,
    category_id: 2,
    event_name: "",
    event_description: "",
    status: "Pending",
    featured: true,
    price: 0,
    event_type: "physical",
    event_location: "",
    start_date: "",
    start_date_time: "",
    end_date: "",
    end_date_time: "",
    cover_photo: "",
    event_image: "",
    tickets: [],
  });

  const handleDrop = (acceptedFiles: File[], type: "cover_photo" | "event_image") => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvent((prev) => ({
          ...prev,
          [type]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const handleRemoveImage = (type: "cover_photo" | "event_image") => {
    setEvent((prev) => ({
      ...prev,
      [type]: "",
    }));
  };


  const [ticketType, setTicketType] = useState("Single Ticket"); // Single or Group
  const [paymentType, setPaymentType] = useState("Paid"); // Paid or Free
  const [ticketDetails, setTicketDetails] = useState({
    ticket_name: "",
    ticket_description: "",
    ticket_stock: "Limited Stock",
    ticket_quantity: 0,
    ticket_price: 0,
    ticket_purchase_limit: 0,
    transfers_fees_to_guest: false,
    group_size: null,
  });

  const handleChange = (field: any, value: any) => {
    setTicketDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddOrUpdateTicket = () => {
    setEvent((prev: any) => {
      const tickets = [...prev.tickets];
  
      // Construct the ticket object with consistent logic
      const updatedTicket = {
        ...ticketDetails,
        ticket_type: paymentType,
        ticket_category: ticketType,
        group_size: ticketType === "Single Ticket" ? null : ticketDetails.group_size,
        transfers_fees_to_guest: paymentType === "Free" ? false : ticketDetails.transfers_fees_to_guest
      };
  
      if (editingIndex !== null) {
        // Update existing ticket
        tickets[editingIndex] = updatedTicket;
      } else {
        // Add new ticket
        tickets.push(updatedTicket);
      }
  
      return { ...prev, tickets };
    });
   
    
    // Reset dialog state
    handleCancel();
    setEditingIndex(null);
    setisTicketModal(false);
  };
  
  

  const handleCancel = () => {
    setTicketDetails({
      ticket_name: "",
      ticket_description: "",
      ticket_stock: "Limited Stock",
      ticket_quantity: 0,
      ticket_price: 0,
      ticket_purchase_limit: 0,
      transfers_fees_to_guest: false,
      group_size: null,
    });
  };

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

  const isGalleryFormValid = event.cover_photo !== "" && event.event_image !== "" ;

  const isTicketFormValid = event.tickets.length > 0;

  const addEvent = async () => {
    const formData = new FormData();
  
    formData.append("user_id", String(event.user_id));
    formData.append("category_id", String(event.category_id));
    formData.append("event_name", event.event_name);
    formData.append("event_description", event.event_description);
    formData.append("status", event.status);
    formData.append("featured", String(event.featured));
    formData.append("price", String(event.price));
    formData.append("event_type", event.event_type);
    formData.append("event_location", event.event_location);
    formData.append("start_date", event.start_date);
    formData.append("start_date_time", event.start_date_time);
    formData.append("end_date", event.end_date);
    formData.append("end_date_time", event.end_date_time);
  
    if (event.cover_photo) {
      if (typeof event.cover_photo === "string") {
        const coverPhotoFile = await fetch(event.cover_photo).then((res) => res.blob());
        formData.append("cover_photo", coverPhotoFile);
      } else {
        formData.append("cover_photo", event.cover_photo);
      }
    }
  
    if (event.event_image) {
      if (typeof event.event_image === "string") {
        const eventImageFile = await fetch(event.event_image).then((res) => res.blob());
        formData.append("event_image", eventImageFile);
      } else {
        formData.append("event_image", event.event_image);
      }
    }
  
    formData.append("tickets", JSON.stringify(event.tickets));
  
    await createEvent(formData, setIsPublished);
  };
  
  return (

    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">
     {(loading || addLoading) && (
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
  
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/oneorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Overview</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twogrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Gallery</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Tickets</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourgrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Review & Publish</h2>
  </div>
</div>
   
    <div className="border-b border-b-[#D9D9D9] py-2">
      <p className="text-[20px] font-semibold text-[#343434]">Overview</p>
    </div>

    <div className="py-[30px] flex flex-col gap-[16px]">
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
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/onegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Overview</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twoorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Gallery</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Tickets</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourgrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Review & Publish</h2>
  </div>
</div>
        <div className="border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Gallery</p>
        </div>
        <div className="space-y-8">
      <div className=" flex items-center justify-between">
        <div className="space-y-[8px]">
        <h2 className="text-[#343434] font-semibold">Upload Cover Photo</h2>
        <p className="w-2/4 text-[12px] text-[#8F8F8F]">
          Supported Files: .png, .jpg, .jpeg Image will be resized into 1300x520 px
        </p>
        </div>
       
        <div className="border border-[#C4C4C4] rounded-[8px] flex flex-col items-center justify-center w-full py-[40px] space-y-4">
          <DropzoneArea
            type="cover_photo"
            onDrop={(files) => handleDrop(files, "cover_photo")}
            previewUrl={event.cover_photo}
            onRemove={() => handleRemoveImage("cover_photo")}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
      <div className="space-y-[8px]">
      <h2 className="text-[#343434] font-semibold">Upload Event Image / Gallery Images</h2>
        <p className="w-2/4 text-[12px] text-[#8F8F8F]">
          Supported Files: .png, .jpg, .jpeg Image will be resized into 1300x520 px
        </p>
     </div>
       
        <div className="border border-[#C4C4C4] rounded-[8px] flex flex-col items-center justify-center w-full py-[40px] space-y-4">
          <DropzoneArea
            type="event_image"
            onDrop={(files) => handleDrop(files, "event_image")}
            previewUrl={event.event_image}
            onRemove={() => handleRemoveImage("event_image")}
          />
        </div>
      </div>
    </div>
            <div className="w-full my-[30px] flex items-center justify-between">
              <div>
              <p
                      className="text-[#FC6435] text-[18px]  font-semibold cursor-pointer"
                                 onClick={handlePrevious}

                    >
                     { '<    Previous' } 
                    </p>
              </div>
         
            <button
                      className="bg-none  border-none text-[18px] w-2/4 rounded-[8px] text-white py-[10px] bg-[#FC6435] font-semibold transition-all active:scale-95 disabled:bg-[#D9D9D9]"
                      onClick={handleNext}
                      disabled={!isGalleryFormValid}

                    >
                     { 'Save & Continue  >' } 
                    </button>


            </div>
       
      </section>}

      {isTickets &&  <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center my-[50px] px-[43px]">
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/onegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Overview</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twogrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Gallery</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threeorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Tickets</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourgrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8F8F8F] font-semibold">Review & Publish</h2>
  </div>
</div>
      <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Tickets</p>
          <button
          onClick={() => {
            setisTicketModal(true);
          }}
                      className="bg-none border-none text-[20px] px-[15px] rounded-[8px] text-white py-[5px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                   
                    >
                     { 'Add New Ticket' } 
                    </button>
        </div>
        {event?.tickets?.length > 0 &&   <section className="mt-[40px]">
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
   

    {event?.tickets?.map((data: any, index) => (
      <TableRow key={index}>
        <TableCell className="font-semibold h-[75px] text-[#606060] border-l">
          {data?.ticket_name}
        </TableCell>
        <TableCell className="text-[#606060] font-semibold text-center">
             <p className="font-semibold">  
              {data?.ticket_quantity} / {data?.ticket_stock}
             </p>
            </TableCell>

           <TableCell className="text-[#606060] font-semibold text-center">
             <p className="font-semibold">  
              {data?.ticket_price}
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
          onClick={() => handleEditTicket(index)}
        />
        <Image
          src="/icons/Copy.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
          onClick={() => handleDuplicateTicket(index)}
        />
        <Image
          src="/icons/delete.svg"
          height={24}
          width={24}
          className="cursor-pointer active:scale-95"
          alt="rightarrow"
          onClick={() => handleDeleteTicket(index)}
        />
          </div>
      
           
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</section>}
      
  
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
                      className="bg-none  border-none text-[22px] w-2/4 rounded-[8px] text-white py-[10px] bg-[#FC6435] font-semibold transition-all active:scale-95 disabled:bg-[#D9D9D9]"
                                 onClick={handleNext}
                                 disabled= {!isTicketFormValid}

                    >
                     { 'Save & Continue  >' } 
                    </button>


            </div>

      </section>}

      {isReview && 
      <section className="bg-white p-[40px] rounded-[8px] shadow-sm">
        <div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center my-[50px] px-[43px]">
  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/onegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Overview</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/twogrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Gallery</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/threegrey.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#8f8f8f] font-semibold">Tickets</h2>
  </div>

  <div className="h-[1px] w-full bg-[#8F8F8F]"></div>

  <div className="flex flex-col items-center gap-2">
    <Image src="/icons/fourorange.svg" alt="image" height={35} width={35} />
    <h2 className="text-[#FC6435] font-semibold">Review & Publish</h2>
  </div>
</div>

<div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-2 mb-[20px]">
          <p className="text-[20px] font-semibold text-[#343434]">Review & Publish</p>
         
        </div>

        <div className="relative w-full h-[200px] ">
          <Image src={event?.event_image} layout="fill" objectFit="cover" alt="image" className="rounded-[12px]"/>
        </div>

        <section className="grid grid-cols-2 my-[30px] items-start gap-[30px]">
           <div className="border-[#D9D9D9] border rounded-[12px] space-y-[14px] p-[18px]"> 
            <p className="text-[20px] text-[#FC6435] font-semibold">{event?.event_name}</p>
            <div className="flex items-center space-x-3">
              <Image src={'/icons/blueLocation.svg'} width={20} height={20} alt="fill"/>
              <p className="text-[#164473]">{event?.event_location}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Image src={'/icons/blueCalendar.svg'} width={20} height={20} alt="fill"/>
              <p className="text-[#164473]">{event?.start_date}</p>
            </div>

            <p className="text-[#606060]">
           {event?.event_description}
            </p>
           </div>

           <div className="border-[#D9D9D9] border rounded-[12px] space-y-[14px] p-[18px]">
            <div className="flex items-center py-4 space-x-3 border-b">
            <Image src={'/icons/ticketPublish.svg'} alt="image" width={20} height={20} className=""/>
            <p className="font-semibold">Ticket</p>
            </div>
           
           {event?.tickets?.map((ticket:any, index) => (
                  <div key={index} className="w-full p-[10px] border border-[#d9d9d9]  rounded-[12px] grid items-center grid-cols-5">
                  <div className='col-span-3'>
                  <p>{ticket?.ticket_name}</p>
                  <p className="text-[#8F8F8F] text-[10px]">{ticket?.ticket_description}</p>
                  </div>
                  <div className="col-span-1 h-full w-[1px] bg-[#D9D9D9]">
    
                  </div>
    
                  <div className="col-span-1 space-y-[5px]">
                    <p>₦{ticket?.ticket_price}</p>
                    <p className="text-[#FC6435]">{ticket?.ticket_quantity} unit(s) available</p>
                  </div>
                 
                </div>
           ))}
           

           </div>
        </section>
   
        {isPublished ?  <div className="w-full flex justify-center items-center">
             
           
            <button
                      className="bg-none border-none text-[22px] w-2/4 rounded-[8px] text-[#FC6435] py-[10px] bg-[#FFD8C8] font-semibold transition-all active:scale-95"
                    >
                     { 'Published' } 
                    </button>


            </div> : 
        
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
                onClick={addEvent}

              >
               { 'Publish >' } 
              </button>


      </div>}
       
      </section>
      }



      <Dialog open={isTicketModal} onOpenChange={closeisTicketModal}>
  <DialogContent className="sm:max-w-[900px] max-h-[65vh] overflow-scroll scrollbar-hide">
    {/* Ticket Type (Single/Group) */}
    <section className="flex items-center space-x-3">
      {["Single Ticket", "Group Ticket"].map((type) => (
        <div
          key={type}
          className={`flex items-center space-x-2 px-[18px] py-[12px] border ${
            ticketType === type ? "border-[#FC6435]" : "border-[#D9D9D9]"
          } rounded-[4px] cursor-pointer`}
          onClick={() => setTicketType(type)}
        >
          <div
            className={`w-[20px] h-[20px] border-2 rounded-full ${
              ticketType === type ? "border-[#FC6435]" : "border-[#8F8F8F]"
            }`}
          ></div>
          <p className={`font-semibold ${ticketType === type ? "text-[#FC6435]" : "text-[#8F8F8F]"}`}>
            {type} 
          </p>
        </div>
      ))}
    </section>

    {/* Form Content */}
    <section className="grid grid-cols-2 gap-[12px] items-start w-full mt-[20px]">
      {/* Left Section */}
      <section className="space-y-[30px] w-full">
        {/* Payment Type */}
        <div className="space-y-[8px]">
          <p className="text-[#343434] font-semibold">Ticket Type</p>
          <div className="space-x-[10px]">
            {["Free", "Paid"].map((type) => (
              <button
                key={type}
                className={`px-[20px] py-[8px] border rounded-[4px] ${
                  paymentType === type
                    ? "bg-[#FC6435] text-white"
                    : "border-[#D9D9D9] text-[#8F8F8F]"
                }`}
                onClick={() => {
                  setPaymentType(type)}}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Ticket Name */}
        <div className="grid w-full items-center gap-[8px]">
          <Label className="font-bold text-[14px] text-[#333333]">Ticket Name</Label>
          <Input
            placeholder="Enter your ticket name"
            className="py-[8px] px-4 shadow-sm border-[#C4C4C4] placeholder:text-[#D9D9D9]"
            value={ticketDetails.ticket_name}
            onChange={(e) => handleChange("ticket_name", e.target.value)}
          />
        </div>

        {/* Ticket Description */}
        <div className="grid w-full items-center gap-[8px]">
          <Label className="font-bold text-[14px] text-[#333333]">Ticket Description</Label>
          <Textarea
            placeholder="Describe your Ticket here"
            className="border-[#C4C4C4] py-[8px] h-[178px] px-4 shadow-sm placeholder:text-[#D9D9D9]"
            value={ticketDetails.ticket_description}
            onChange={(e) => handleChange("ticket_description", e.target.value)}
          />
        </div>
      </section>

      {/* Right Section */}
      <section className="space-y-[30px] w-full">
        {/* Ticket Stock and Quantity */}
        <div className="flex items-center space-x-2">
          <div className="grid w-full items-center gap-[8px]">
            <Label className="font-bold text-[14px] text-[#333333]">Ticket Stock</Label>
            <select
              className="py-[8px] px-4 shadow-sm border border-[#C4C4C4] rounded-[4px] text-[14px]"
              value={ticketDetails.ticket_stock}
              onChange={(e) => handleChange("ticket_stock", e.target.value)}
            >
              <option value="Limited Stock">Limited Stock</option>
              <option value="Unlimited">Unlimited</option>
            </select>
          </div>
          <div className="grid w-full items-center gap-[8px]">
            <Label className="font-bold text-[14px] text-[#333333]">Quantity</Label>
            <Input
              className="py-[8px] px-4 shadow-sm border-[#C4C4C4] placeholder:text-[#D9D9D9]"
              value={ticketDetails.ticket_quantity}
              onChange={(e) => handleChange("ticket_quantity", e.target.value)}
            />
          </div>
        </div>

        {/* Conditional Fields */}
        {paymentType === "Paid" && (
          <>
            {/* Ticket Price */}
            <div className="grid w-full items-center gap-[8px]">
              <Label className="font-bold text-[14px] text-[#333333]">Ticket Price</Label>
              <Input
                className="py-[8px] px-4 shadow-sm border-[#C4C4C4] placeholder:text-[#D9D9D9]"
                value={ticketDetails.ticket_price}
                onChange={(e) => handleChange("ticket_price", e.target.value)}
              />
            </div>

            {/* Transfer Fees to Guest */}
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                checked={ticketDetails.transfers_fees_to_guest}
                onChange={(e) => handleChange("transfers_fees_to_guest", e.target.checked)}
              />
              <Label className="text-[#333333] font-semibold">Transfer Fees to Guest</Label>
            </div>
          </>
        )}

        {/* Group Size */}
        {ticketType === "Group Ticket" && (
          <div className="grid w-full items-center gap-[8px]">
            <Label className="font-bold text-[14px] text-[#333333]">Group Size</Label>
            <select
              className="py-[8px] px-4 shadow-sm border text-[14px] border-[#C4C4C4] rounded-[4px]"
              value={ticketDetails.group_size || ""}
              onChange={(e) => handleChange("group_size", e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Ticket Purchase Limit */}
        <div className="grid w-full items-center gap-[8px]">
          <Label className="font-bold text-[14px] text-[#333333]">Purchase Limit</Label>
          <select
            className="py-[8px] border text-[14px] px-4 shadow-sm border-[#C4C4C4] rounded-[4px]"
            value={ticketDetails.ticket_purchase_limit}
            onChange={(e) => handleChange("ticket_purchase_limit", e.target.value)}
          >
            <option value={0}>No Limit</option>
            {[1, 2, 3, 4, 5].map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>
      </section>
    </section>

    {/* Buttons */}
    <div className="flex items-center justify-center gap-[15px] mt-[20px]">
    <button
  className="px-[20px] py-[10px] bg-[#FC6435] text-white rounded-[4px]"
  onClick={handleAddOrUpdateTicket}
>
  {editingIndex !== null ? "Update Ticket" : "Add New Ticket"}
</button>
      <button className="px-[20px] py-[10px] border border-[#FC6435] text-[#FC6435] rounded-[4px]" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  </DialogContent>
</Dialog>

     
  </div>
  )

};

export default AddEvents;

const DropzoneArea = ({
  type,
  onDrop,
  previewUrl,
  onRemove,
}: {
  type: "cover_photo" | "event_image";
  onDrop: (files: File[]) => void;
  previewUrl: string;
  onRemove: () => void;
}) => {
  const accept: Accept = {
    "image/png": [],
    "image/jpeg": [],
    "image/jpg": [],
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    onDrop,
  });

  return (
    <div {...getRootProps()} className="w-full cursor-pointer text-center p-[10px]">
      <input {...getInputProps()} />
      {previewUrl ? (
        <div className="relative">
          <img src={previewUrl} alt={type} className="w-full h-[240px] object-cover" />
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering dropzone click
              onRemove();
            }}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center"
          >
            X
          </button>
        </div>
      ) : (
        <div className=" flex items-center justify-center w-full">
<Image src='/icons/image.svg' width={120} height={120} alt="image"/>
        </div>
        
      )}
    </div>
  );
};
