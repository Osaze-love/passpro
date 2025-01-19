"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useEvent from "@/hooks/events";
import BarLoader from "react-spinners/BarLoader";
import { updateActiveEvent } from "@/redux/slices/eventslice";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const ManageEvents = () => {
  const {events, current_page, from, last_page, per_page, to, total} = useSelector((state: RootState) => state.event);
  const { loading, getEvents, deleteEvent } = useEvent();
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<any>(0);
    
    const closeDeleteDialog = () => setIsDeleteOpen(false);
 
  useEffect(() => {
    if (search === '') {
      getEvents(search, 1);
    }
  }, [search]); 

  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  const closeDialog = () => setisOpen(false);
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Manage Events</h3>
        <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  mx-[33px] bg-white">
          <Input
            placeholder="Event Name"
            onChange={(e) => {
              setSearch(e.target.value)
             }}
            className=" focus:outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
          />
          <div 
          onClick={async() => {
           await getEvents(search, current_page);
          }}
          className="bg-[#FC6435] h-full flex w-max justify-center items-center cursor-pointer px-[20px] rounded-tr-[8px] rounded-br-[8px]">
            <Image

              src={"/icons/searchIconwhite.svg"}
              width={20}
              height={19.88}
              alt="searchIcon"
            />
          </div>
        </div>
      </section>

      {/* <section className="flex items-center space-x-[10px]">
        {[
          "All",
          "Approved",
          "Pending",
          "Rejected",
          "Future Events",
          "Running Events",
          "Expired Events",
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
      </section> */}

      <section className="mt-[40px]">
        <Table className="border-b">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
              <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
                Title
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Organizer
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Category
              </TableHead>
              <TableHead className="text-white font-extrabold">Date</TableHead>
              <TableHead className="text-white font-extrabold">
                Featured
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Status
              </TableHead>
              <TableHead className="text-right font-extrabold text-white rounded-tr-[8px]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium h-[75px] text-[#606060] border-l">
                  {data?.event_name}
                  <p className="flex items-center space-x-1 text-[14px]">
                    <Image
                      src={"/icons/locationIcon.svg"}
                      width={10}
                      height={9}
                      alt="loactionIcon"
                    />
                    <span className="text-[14px]">{data?.event_location}</span>{" "}
                  </p>
                </TableCell>
                <TableCell className="text-[#FC6435] font-bold">
                  {data?.user_full_name}
                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data?.category_name}                  
                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data?.start_date}
                </TableCell>
                <TableCell>
                {data?.featured === 0 ? <p className=" text-[#FF3B30] w-[64px] flex items-center justify-center rounded-[20px] bg-[#f5e2e2] border border-[#FF3B30] p-[5px]">
                    No
                  </p> :
                  <p className=" w-[64px] flex items-center justify-center rounded-[20px] bg-[#cee9d5] text-[#34C759] border border-[#34C759] p-[5px]">
                  Yes
                </p>
                  }
                  
                </TableCell>
                <TableCell>
                {data.status === 'Pending' ? <p className="w-[99px] text-[#606060] rounded-[20px] flex items-center justify-center bg-[#fceceb] border border-[#FF9F43] p-[5px]">
                    {data.status}
                  </p> :
                  <p className="w-[99px] flex items-center justify-center rounded-[20px] bg-[#cee9d5] text-[#34C759] border border-[#34C759] p-[5px]">
                  {data.status}
                </p>
                  }
                  
                </TableCell>
                <TableCell className="text-right border-r w-[200px]">
                  <div className="flex items-center justify-end space-x-2">
                    {/* <button
                      className="bg-none border border-[#FC6435] rounded-[8px]  text-[#606060] flex items-center p-[10px] space-x-[8px] transition-all active:scale-95"
                      onClick={() => {
                        setisOpen(true);
                      }}
                    >
                      Feature
                    </button> */}
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                      onClick={() => {
                        dispatch(updateActiveEvent(data));
                        router.push("/events/details");
                      }}
                    >
                      Details
                    </button>
                      <Image
                            src="/icons/delete.svg"
                           width={32}
                          height={32}
                            alt="Icon"
                              className="cursor-pointer"
                              onClick={() => {
                              setDeleteId(data.id);
                              setIsDeleteOpen(true);
                              }}
                                        
                               />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="flex items-center justify-between">
  <p className="text-[#606060] text-[14px]">
    Showing {from} to {to} of {total} results
  </p>
  <Pagination className="flex items-center justify-end">
    <PaginationContent>
      {/* Previous Button */}
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={() => current_page > 1 && getEvents(search, current_page - 1)}
          // disabled={current_page === 1}
          className={`px-3 py-1 rounded ${
            current_page === 1
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "cursor-pointer hover:bg-gray-100"
          }`}
        >
          Prev
        </PaginationPrevious>
      </PaginationItem>

     

       {Array.from({ length: last_page }, (_, index) => index + 1)
            .filter((page) => {
              // Show the first three and last three pages, or the current page
              return (
                page <= 3 || 
                page > last_page - 3 || 
                (page >= current_page - 1 && page <= current_page + 1)
              );
            })
            .map((page, index, filteredPages) => (
              <React.Fragment key={page}>
                {/* Add ellipsis if needed */}
                {index > 0 && page !== filteredPages[index - 1] + 1 && (
                  <PaginationEllipsis />
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() => getEvents(search, page)}
                    className={`px-3 py-1 rounded ${
                      page === current_page
                        ? "border border-[#FC6435] text-[#FC6435] hover:text-[#FC6435] font-bold"
                        : "border text-[#8F8F8F]"
                    }`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            ))}

      {/* Next Button */}
      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={() =>
            current_page < last_page && getEvents(search, current_page + 1)
          }
          // disabled={current_page === last_page}
          className={`px-3 py-1 rounded ${
            current_page === last_page
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "cursor-pointer hover:bg-gray-100"
          }`}
        >
          Next
        </PaginationNext>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</section>

  

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4">
              Confirmation Alert!
            </p>
            <p className="text-[14px]  text-[#808080] py-4 border-t border-b">
              Are you sure you want to feature this event?
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

        <Dialog open={isDeleteOpen} onOpenChange={closeDeleteDialog}>
              <DialogContent className="sm:max-w-[500px]  top-[34%]">
                <DialogTitle className="hidden"></DialogTitle>
                <div className="flex flex-col">
                  <p className="text-[20px] font-semibold pb-4">
                    Confirmation Alert!
                  </p>
                  <p className="text-[14px]  text-[#808080] py-4 border-t border-b">
                    Are you sure you want to delete this event?
                  </p>
                </div>
      
                <DialogFooter>
                  <div className="space-x-2">
                    <Button
                    onClick={() => {
                      setDeleteId(0);
                      closeDeleteDialog();
                    }}
                    className="shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                      No
                    </Button>
                    <Button
                    onClick={async() => {
                      closeDeleteDialog();
                      
                      await deleteEvent(deleteId);
      
                            
                      await getEvents(search, current_page);
                    }}
                    className="shadow-sm font-bold text-[#FC6435] bg-transparent hover:bg-transparent transition-all active:scale-95 border border-[#FC6435]">
                      Yes
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
    </div>
  );
};

export default ManageEvents;
