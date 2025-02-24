"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import React, { useEffect, useState } from 'react'
import useSupport from '@/hooks/support';
import BarLoader from 'react-spinners/BarLoader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { updateActiveTicket } from '@/redux/slices/supportslice';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";


const page = () => {
  const { getSupportTickets, loading, deleteTicket, getSupportTicketDetails } = useSupport();
  const {supportTickets, current_page,  last_page, per_page, total} = useSelector((state: RootState) => state.support);
  const from = (current_page - 1) * 10 + 1; 
const to = Math.min(current_page * 10, total);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<any>(0);
  
  const closeDeleteDialog = () => setIsDeleteOpen(false);
  const router = useRouter();

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  
     
  useEffect(() => {
    if (search === '') {
      const status = activeTab === "All Tickets"
          ? undefined
          : activeTab === "Open Tickets"
          ? "open"
          : "closed";
      getSupportTickets(status,search, 1);
    }
    },[search]);

    const [activeTab, setActiveTab] = useState("All Tickets"); 
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
      useEffect(() => {
        const status = activeTab === "All Tickets"
          ? undefined
          : activeTab === "Open Tickets"
          ? "open"
          : "closed";
        getSupportTickets(status, search, 1);
      }, [activeTab]);
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
       <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">{activeTab}</h3>
        <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  mx-[33px] bg-white">
          <Input
            placeholder="Search Here"
            onChange={(e) => {
              setSearch(e.target.value)
             }}
            className=" focus:outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
          />
          <div
           onClick={async() => {
            const status = activeTab === "All Tickets"
          ? undefined
          : activeTab === "Open Tickets"
          ? "open"
          : "closed";
          
              getSupportTickets(status, search, current_page);
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

      <section className="flex items-center space-x-[10px]">
        {[
          "All Tickets",
          "Open Tickets",
          "Closed Tickets",                 
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
            <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
                Ticket ID
              </TableHead>
              <TableHead className=" text-white font-extrabold ">
                Subject
              </TableHead>
              {/* <TableHead className="text-white font-extrabold">
              Submitted By
              </TableHead> */}
              <TableHead className="text-white font-extrabold">
              Status
              </TableHead>
              <TableHead className="text-white font-extrabold">Priority</TableHead>
              <TableHead className="text-white font-extrabold">
              Last Reply
              </TableHead>
             
              <TableHead className="text-right font-extrabold text-white rounded-tr-[8px]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supportTickets?.map((data, index) => (
              <TableRow key={index}>
                 <TableCell className="font-medium h-[75px] text-[#FC6435] border-l">
                  {data?.ticket_code}
                
                </TableCell>
                <TableCell className="font-medium h-[75px] text-[#FC6435] ">
                  {data?.subject}
                
                </TableCell>
                {/* <TableCell className="text-[#FC6435] font-bold">
                  {data.submitted}
                </TableCell> */}
                <TableCell>
                {data?.status === 'Open' ?  <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#d1ecd8] border border-[#34C759] p-[5px]">
                           {data?.status}
                         </p> : <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#E5E5E5] border border-[#343434] p-[5px]">
                           {data?.status}
                         </p>  }
                        
                       </TableCell>
                <TableCell>
                {data?.priority === 'High' &&  
                 <p className="w-[99px] text-[#606060] rounded-[20px] flex items-center justify-center bg-[#eac2c0] border border-[#FF3B30] p-[5px]">
                 {data?.priority}
               </p>
              }
              {data?.priority === 'Medium' &&  
                 <p className="w-[99px] text-[#FC6435] rounded-[20px] flex items-center justify-center border border-[#FC6435] p-[5px]">
                 {data?.priority}
               </p>
              }
                    {data?.priority === 'Low' &&  
                 <p className="w-[99px] text-[#343434] rounded-[20px] flex items-center justify-center bg-[#E5E5E5] border border-[#343434] p-[5px]">
                 {data?.priority}
               </p>
              }

                </TableCell>
                <TableCell className="text-[#606060] text-[14px]">
                  {data.last_reply_date}
                </TableCell>
                
               
                <TableCell className="justify-end border-r flex items-center space-x-2">
                   
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435]  transition-all active:scale-95"
                      onClick={async() => {
                        dispatch(updateActiveTicket(data));
                       await getSupportTicketDetails(data?.id)
                        router.push("/support/reply");
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
                onClick={() => {
                  if (current_page > 1) {
                    const status = activeTab === "All Tickets"
          ? undefined
          : activeTab === "Open Tickets"
          ? "open"
          : "closed";
          
                
                    getSupportTickets(status, search, current_page - 1);
                  }
                }}
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
      
            {/* Page Numbers */}
           

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
                                      onClick={() => {
                                        const status = activeTab === "All Tickets"
                                        ? undefined
                                        : activeTab === "Open Tickets"
                                        ? "open"
                                        : "closed";
                                        
                                    
                                        getSupportTickets(status, search, page);
                                        }}
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
                onClick={() => {
                  if (current_page < last_page) {
                    const status = activeTab === "All Tickets"
                    ? undefined
                    : activeTab === "Open Tickets"
                    ? "open"
                    : "closed";
                    
                
                    getSupportTickets(status, search, current_page + 1);
                  }
                }}
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

      <Dialog open={isDeleteOpen} onOpenChange={closeDeleteDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4">
              Confirmation Alert!
            </p>
            <p className="text-[14px]  text-[#808080] py-4 border-t border-b">
              Are you sure you want to delete this ticket?
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
                const status = activeTab === "All Tickets"
                ? undefined
                : activeTab === "Open Tickets"
                ? "open"
                : "closed";
                await deleteTicket(deleteId);

                      
                await getSupportTickets(status, search, current_page);
              }}
              className="shadow-sm font-bold text-[#FC6435] bg-transparent hover:bg-transparent transition-all active:scale-95 border border-[#FC6435]">
                Yes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default page
