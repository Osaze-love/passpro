"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { resetState } from "@/redux/slices/userslice";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import useGlobal from "@/hooks/global";
import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";
import { updateActiveEvent } from "@/redux/slices/eventslice";
import { updateActiveOrder } from "@/redux/slices/orderslice";
import useOrganizer from "@/hooks/organizer";
import BarLoader from "react-spinners/BarLoader";
import { updateActiveTicket } from "@/redux/slices/supportslice";
import { updateActiveWithdrawal } from "@/redux/slices/withdrawslice";
import useSupport from "@/hooks/support";

const Navbar = () => {
  const { usersDetail } = useSelector((state: RootState) => state.user);
  const { events, orders, organizers, support, withdrawals } = useSelector((state: RootState) => state.search);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { getResults, loading } = useGlobal();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getOneOrganizer, oneLoading, getOneWithdrawalCount } = useOrganizer();
  const { getSupportTicketDetails } = useSupport()


  const handleSearch = async () => {
    if (query.trim()) {
      await getResults(query);
      setShowDropdown(true);
    }
  };

  useClickOutside(dropdownRef, () => setShowDropdown(false)); 

  return (
    <div className="sticky bg-[#FC6435] top-0 flex items-center justify-between border-b z-30">
         {(loading || oneLoading) && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <div className="relative w-[625px] h-[48px] border px-2 rounded-[8px] my-[33px] mx-[33px]">
        <div className="flex items-center mt-[4px]">
          <Input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, tickets, and occasions"
            className="focus-visible:outline-none focus-visible:ring-0 border-0 text-white placeholder:text-[#D9D9D9] placeholder:text-[12px] grow shadow-none"
          />
          <Image
            src={"/icons/searchIcon.svg"}
            width={20}
            height={20}
            alt="searchIcon"
            onClick={handleSearch}
            className="cursor-pointer"
          />
        </div>

        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute z-10 bg-white shadow-md w-full max-h-[300px] overflow-y-auto mt-2 rounded p-4"
          >
            {events?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Events</h4>
                <ul className="mt-2 space-y-1">
                  {events?.map((event: any, index: number) => (
                    <li
                      key={index}
                      className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-[12px]"
                      onClick={() => {
                         dispatch(updateActiveEvent(event));
                         setShowDropdown(false);
                        router.push("/events/details");
                      }}
                    >
                      <p>{event?.event_name}</p>
                     <p>{event?.event_description.slice(0, 30)}</p>
                     
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* {tickets?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Tickets</h4>
                <ul className="mt-2 space-y-1">
                  {tickets?.map((ticket: any, index: number) => (
                     <li
                     key={index}
                     className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-[12px]"
            
                   >
                     <p>{ticket?.ticket_name}</p>
                    <p>{ticket?.ticket_description.slice(0, 30)}</p>
                    
                   </li>
                  ))}
                </ul>
              </div>
            )} */}

            {orders?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Orders</h4>
                <ul className="mt-2 space-y-1">
                  {orders?.map((order: any, index: number) => (
                     <li
                     key={index}
                     className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-[12px]"
                  onClick={() => {
                   
                     dispatch(updateActiveOrder(order));
                     setShowDropdown(false);
                     router.push('/orders/details');
                    }}                   >
                     <p>{order?.event_title}</p>
                    <p>{order?.ticket_name}</p>
                    
                   </li>
                  ))}
                </ul>
              </div>
            )}

            {organizers?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Organizers</h4>
                <ul className="mt-2 space-y-1">
                  {organizers?.map((organizer: any, index: number) => (
                                  <li
                                       key={index}
                                       className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-[12px]"
                                       onClick={async() => {
                                        await getOneOrganizer(organizer?.id)
                                        await getOneWithdrawalCount(organizer?.id)
                                        setShowDropdown(false);
                                        router.push("/organizers/details");
                                        
                                       }}     
                                     >
                                       <p>{organizer?.first_name}</p>
                                      <p>{organizer?.email}</p>
                                      
                                     </li>
                  ))}
                </ul>
              </div>
            )}

            {support?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Support</h4>
                <ul className="mt-2 space-y-1">
                  {support?.map((supportItem: any, index: number) => (
                                        <li
                                        key={index}
                                        className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-[12px]"
                                        onClick={() => {
                                           dispatch(updateActiveTicket(supportItem));
                                          

                                           setShowDropdown(false);
                                           router.push("/support/reply");
                                        }}
                                      >
                                        <p>{supportItem?.subject}</p>
                                       <p>{supportItem?.status}</p>
                                       
                                      </li>
                  ))}
                </ul>
              </div>
            )}

            {withdrawals?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Withdrawals</h4>
                <ul className="mt-2 space-y-1">
                  {withdrawals?.map((withdrawal: any, index: number) => (
                                       <li
                                       key={index}
                                       className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-[12px]"
                                      onClick={() => {
                                        dispatch(updateActiveWithdrawal(withdrawal));
                                        setShowDropdown(false);
                                        router.push("/withdrawals/details");
                                                          }}
                                     >
                                       <p>{withdrawal?.transaction_reference}</p>
                                      <p>{withdrawal?.status}</p>
                                      
                                     </li>
                  ))}
                </ul>
              </div>
            )}
             {events?.length === 0 &&
      orders?.length === 0 &&
      organizers?.length === 0 &&
      support?.length === 0 &&
      withdrawals?.length === 0 && (
        <div className="text-gray-500 text-sm text-center">
          No search result for {query}.
        </div>
      )}
          </div>
        )}
        
      </div>

      <div className="flex items-center space-x-[32px] pr-[17px]">
        <Image src={"/icons/supportIcon.svg"} width={30} height={30} alt="supportIcon" />
        <Link href="https://passpro.africa/" target="_blank">
          <Image src={"/icons/globeIcon.svg"} width={30} height={30} alt="globeIcon" />
        </Link>
        <Image src={"/icons/settingsIcon.svg"} width={30} height={30} alt="settingsIcon" />
        <Image src={"/icons/notificationIcon.svg"} width={30} height={30} alt="notificationIcon" />

        <Popover>
          <PopoverTrigger asChild>
            <div className="cursor-pointer space-x-[6px] flex items-center">
              <Avatar>
                <AvatarImage
                  src={`https://sub.passpro.africa/storage/${usersDetail?.profile_image}`}
                  alt="User Avatar"
                  className="object-cover"
                />
                <AvatarFallback>{usersDetail?.username ? usersDetail.username[0] : "U"}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-[12px] text-white">Admin</h3>
              <Image src={"/icons/accordionIcon.svg"} alt="right arrow" width={8} height={13} className="rotate-90" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-white px-0 w-[200px]">
            <div className="bg-white flex flex-col gap-[20px] rounded-[8px]">
              <p
                onClick={() => router.push("/profile")}
                className="px-[30px] cursor-pointer py-[9px] border-b font-semibold text-[#343434] border-b-[#D9D9D9]"
              >
                Profile
              </p>
              <p
                onClick={() => dispatch(resetState())}
                className="px-[30px] py-[9px] font-semibold text-[#343434] cursor-pointer"
              >
                Logout
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
