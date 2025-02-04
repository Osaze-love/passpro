"use client";
import React from 'react';
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import useOrder from "@/hooks/order";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button";
import { updateActiveOrder } from '@/redux/slices/orderslice';

const Orders = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {orders, current_page, from, last_page, per_page, to, total} = useSelector((state: RootState) => state.order);
  const { getOrders, loading, deleteOrder } = useOrder();
  const [search, setSearch] = useState('');
  const [isOpen, setisOpen] = useState(false);
    const closeDialog = () => setisOpen(false);
  const [orderData, setOrderData] = useState<any>({});
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
      const [deleteId, setDeleteId] = useState<any>(0);
      
      const closeDeleteDialog = () => setIsDeleteOpen(false);

  useEffect(() => {
    if (search === '') {
      getOrders(search, 1);
    }
  },[search])
  
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
        {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Orders</h3>
        <div className="flex items-center space-x-[24px]">
          <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Search Orders"
              onChange={(e) => {
                setSearch(e.target.value)
               }}
              className="shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
            />
            <div 
            onClick={async() => {
              await getOrders(search, current_page);
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
          
        </div>
      </section>
      <section className="mt-[40px]">
        <Table className="border-b">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
              <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
                Event Title
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Order Id
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Username
              </TableHead>
              <TableHead className="text-white font-extrabold">Price</TableHead>
              <TableHead className="text-white font-extrabold">
                Quantity
              </TableHead>
              <TableHead className="text-white font-extrabold">Total</TableHead>
              <TableHead className="text-white font-extrabold">
                Payment Status
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Status
              </TableHead>
              <TableHead className=" font-extrabold text-white rounded-tr-[8px]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className=" h-[75px] text-[#606060] font-bold border-l w-[100px]">
                  {data?.event_title}
                </TableCell>
                <TableCell className="text-[#606060] font-bold ">
                  {data?.id}
                </TableCell>
                <TableCell className="text-[#606060] font-bold ">
                  {data?.user_name}
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-[14px]">
                ₦{data?.ticket_price}
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-[14px]">
                  {data?.ticket_quantity}
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-[14px]">
                ₦{data?.total_price}
                </TableCell>
                <TableCell>
             
                  {data?.payment_status === 'cancelled' &&  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {data?.payment_status}
                  </p>}
                  {data?.payment_status === 'paid' &&  <p className="w-[99px] text-[#34C759] rounded-[20px] flex items-center justify-center bg-[#E9F9F0] border border-[#34C759] p-[5px]">
                    {data?.payment_status}
                  </p>}
                  {data?.payment_status === 'pending' &&  <p className="w-[99px] text-[#FFB494] rounded-[20px] flex items-center justify-center bg-[#FFD8C8] border border-[#FFB494] p-[5px]">
                    {data?.payment_status}
                  </p>}
                
                </TableCell>
                <TableCell>
               
                  {data?.status === 'cancelled' &&  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {data?.status}
                  </p>}
                  {data?.status === 'active' &&  <p className="w-[99px] text-[#34C759] rounded-[20px] flex items-center justify-center bg-[#E9F9F0] border border-[#34C759] p-[5px]">
                    {data?.status}
                  </p>}
                  {data?.status === 'pending' &&  <p className="w-[99px] text-[#FFB494] rounded-[20px] flex items-center justify-center bg-[#FFD8C8] border border-[#FFB494] p-[5px]">
                    {data?.status}
                  </p>}
                  
                </TableCell>
                <TableCell className="text-right border-r flex items-center space-x-2 justify-end">
                  <button
                    className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                    onClick={() => {
                    //   setOrderData(data);
                    //  setisOpen(true);
                     dispatch(updateActiveOrder(data))
                     router.push('/orders/details')
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
        onClick={() => current_page > 1 && getOrders(search, current_page - 1)}
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
              onClick={() => getOrders(search, page)}
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
          current_page < last_page && getOrders(search, current_page + 1)
        }
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
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] scrollbar-hide overflow-scroll">
          <DialogTitle className="hidden"></DialogTitle>
          <div className=" space-y-[10px]">
      <h3 className=" font-semibold text-[24px] text-[#606060]">Order Details</h3>
      <section className="border w-full">
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Event Title
          </p>
          <p className="px-[40px]  font-semibold">
            {orderData?.event_title}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Organized By
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            {orderData?.organized_by}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Username
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            {orderData.user_name}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Price
          </p>
          <p className="px-[40px]  font-bold">{orderData?.ticket_price}</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Quantity
          </p>
          <p className="px-[40px]  font-bold">{orderData.ticket_quantity}</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Total
          </p>
          <p className="px-[40px]  font-bold">{orderData?.total_price}</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Payment Status
          </p>
          
          <p className="px-[40px]">
          {orderData?.payment_status === 'cancelled' &&  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {orderData?.payment_status}
                  </p>}
                  {orderData?.payment_status === 'paid' &&  <p className="w-[99px] text-[#34C759] rounded-[20px] flex items-center justify-center bg-[#E9F9F0] border border-[#34C759] p-[5px]">
                    {orderData?.payment_status}
                  </p>}
                  {orderData?.payment_status === 'pending' &&  <p className="w-[99px] text-[#FFB494] rounded-[20px] flex items-center justify-center bg-[#FFD8C8] border border-[#FFB494] p-[5px]">
                    {orderData?.payment_status}
                  </p>}
          </p>
         
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Status
          </p>
          <p className="px-[40px]">
          {orderData?.status === 'cancelled' &&  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {orderData?.status}
                  </p>}
                  {orderData?.status === 'active' &&  <p className="w-[99px] text-[#34C759] rounded-[20px] flex items-center justify-center bg-[#E9F9F0] border border-[#34C759] p-[5px]">
                    {orderData?.status}
                  </p>}
                  {orderData?.status === 'pending' &&  <p className="w-[99px] text-[#FFB494] rounded-[20px] flex items-center justify-center bg-[#FFD8C8] border border-[#FFB494] p-[5px]">
                    {orderData?.status}
                  </p>}
          </p>
        
        </div>
      </section>
    </div>

          <DialogFooter>
           
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
                    Are you sure you want to delete this order?
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
                      
                      await deleteOrder(deleteId);
      
                            
                      await getOrders(search, current_page);
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

export default Orders;
