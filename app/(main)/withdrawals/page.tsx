"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import useWithdraw from "@/hooks/withdraw";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BarLoader from "react-spinners/BarLoader";
import { updateActiveWithdrawal } from "@/redux/slices/withdrawslice";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import useOrganizer from "@/hooks/organizer";

const Withdrawals = () => {
  const { getWithdrawals, loading, getWithdrawalCount } = useWithdraw();
  const {withdrawals, current_page, from, last_page, per_page, to, total, countData} = useSelector((state: RootState) => state.withdraw);
  const {getOneOrganizer, oneLoading, getOneWithdrawalCount} = useOrganizer();
  const router = useRouter();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  
     
  useEffect(() => {
    if (query === '') {
      const search = activeTab === "All"
      ? undefined
      : activeTab === "Approved"
      ? "approved"
      : activeTab === "Pending"
      ? "pending"
      : "rejected"
      getWithdrawals(search,query, 1);
      getWithdrawalCount();

    }
    },[query]);
 
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  

   useEffect(() => {
          const search = activeTab === "All"
            ? undefined
            : activeTab === "Approved"
            ? "approved"
            : activeTab === "Pending"
            ? "pending"
            : "rejected"
          getWithdrawals(search, query, 1);
        }, [activeTab]);
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {(loading || oneLoading) && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[10px]">
        <h3 className="text-[20px] font-semibold">Withdrawals</h3>
        <div className="flex items-center space-x-[24px]">
          <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Search Here"
              onChange={(e) => {
                setQuery(e.target.value)
               }}
              className="shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
            />
            <div
             onClick={async() => {
              const search = activeTab === "All"
              ? undefined
              : activeTab === "Approved"
              ? "approved"
              : activeTab === "Pending"
              ? "pending"
              : "rejected"
            
                getWithdrawals(query, search, current_page);
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
          {/* <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Start Date - End Date"
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
          </div> */}
        </div>
      </section>
      <section className="flex items-center space-x-[10px]">
        {["All", "Approved", "Pending", "Rejected"].map((tab) => (
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

      <section className="grid grid-cols-3 p-[24px] bg-white mt-[20px] rounded-md">
        <div className="flex items-center justify-between w-full h-[77px] px-[20px] shadow-sm border-r border-[#D9D9D9] ">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/approvedwithdraw.svg"}
              height={45}
              width={45}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium ">₦{countData?.successfulWithdrawalTotal}</p>
              <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                Approved Withdrawal
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/icons/rightarrowdark.svg"
              width={8}
              height={13}
              alt="rightarrow"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-[77px] px-[20px] shadow-sm  border-r border-[#D9D9D9] ">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/pendingwithdrawal.svg"}
              height={45}
              width={45}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium ">₦{countData?.pendingWithdrawalTotal}</p>
              <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                Pending Withdrawal
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/icons/rightarrowdark.svg"
              width={8}
              height={13}
              alt="rightarrow"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-[77px] px-[20px] shadow-sm  ">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/rejectwithdraw.svg"}
              height={45}
              width={45}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium ">₦{countData?.rejectedWithdrawalTotal}</p>
              <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                Rejected Withdrawal
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/icons/rightarrowdark.svg"
              width={8}
              height={13}
              alt="rightarrow"
            />
          </div>
        </div>
      </section>
      <section className="mt-[40px]">
        <Table className="border-b">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
              <TableHead className=" text-white  font-extrabold rounded-tl-[8px]">
                Gateway | Transaction
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Initiated
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Type
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Username
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Amount
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Charge
              </TableHead>
              <TableHead className="text-white text-center font-extrabold">
                Status
              </TableHead>
              <TableHead
                className=" font-extrabold text-white text-center
               rounded-tr-[8px]"
              >
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawals?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className=" h-[75px] text-[#606060]  border-l ">
                  <p className="text-[#FC6435]"> Bank | {data?.id}</p>
                  <p className="text-[14px]">{data?.bank_name}</p>
                </TableCell>
               <TableCell className="text-[#606060] text-center">
               {data?.initiated_at?.split("T")[0]} {data?.initiated_at?.split("T")[1]?.slice(0, 8)}
             </TableCell>
                <TableCell className="text-[#606060] font-medium text-center">
                  {data?.type}
                </TableCell>
                <TableCell
                
                className="text-[#606060] text-center">
                  <p onClick={async() => {
                    await getOneOrganizer(data?.user_id);
                    await getOneWithdrawalCount(data?.user_id);
                    router.push("/organizers/details");
                  }}
                  className="cursor-pointer"
                  >
                                      {data?.user_full_name}

                  </p>
                  {/* <p className="text-[14px] text-[#FC6435]">@{data?.username}</p> */}
                </TableCell>
                <TableCell className="text-[#606060]  text-center">
                  <p>
                  ₦{data?.amount}
                  </p>
                </TableCell>
                <TableCell className="text-center">
                  
                  <p className="text-[14px]">₦{data?.charge}</p>
                </TableCell>
                <TableCell>
                  {data?.status === 'approved' && <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#e4f5e9] border border-[#4AC971] text-[#4AC971] p-[5px]">
                    {data?.status}
                  </p>}
                  {data?.status === 'pending' && <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#f0dcca] border border-[#FF9F43] text-[#FF9F43] p-[5px]">
                    {data?.status}
                  </p>}
                  {data?.status === 'rejected' && <p className="w-[99px]  rounded-[20px] flex items-center justify-center bg-[#f1dada] border border-[#EB2222] text-[#EB2222] p-[5px]">
                    {data?.status}
                  </p>}
                 
                </TableCell>
                <TableCell className="text-right border-r ">
                  <button
                    className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                    onClick={() => {
                      dispatch(updateActiveWithdrawal(data));
                      router.push("/withdrawals/details");
                    }}
                  >
                    Details
                  </button>
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
              const search = activeTab === "All"
            ? undefined
            : activeTab === "Approved"
            ? "approved"
            : activeTab === "Pending"
            ? "pending"
            : "rejected"
          
              getWithdrawals(search, query, current_page - 1);
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
                            const search = activeTab === "All"
                          ? undefined
                          : activeTab === "Approved"
                          ? "approved"
                          : activeTab === "Pending"
                          ? "pending"
                          : "rejected"
                        
                            getWithdrawals(search, query, page);
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
              const search = activeTab === "All"
            ? undefined
            : activeTab === "Approved"
            ? "approved"
            : activeTab === "Pending"
            ? "pending"
            : "rejected"
          
              getWithdrawals(search, query, current_page + 1);
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
    </div>
  );
};

export default Withdrawals;
