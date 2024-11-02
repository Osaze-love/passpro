import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#fdf7f4] space-y-[36px] px-[43px] py-[24px]">
      <div className="flex space-x-[8px] bg-[#FFEDE5] w-[573px] items-center  px-[18px] py-[12px] rounded-[4px]">
        <h2 className="text-[#8F8F8F]  font-medium">Home</h2>
        <Image
          src="/icons/rightarrow.svg"
          height={10}
          width={5}
          alt="rightarrow"
        />
        <h2 className="text-[#FC6435] font-medium">Dashboard</h2>
      </div>

      <div className="grid grid-cols-4  gap-[16px]">
        <div className="bg-white w-[full] h-[120px] rounded-[8px] shadow-md p-[20px] space-y-4">
          <div className="flex items-center gap-[19px]">
            <Image
              src={"/logo/eventsall.svg"}
              height={40}
              width={38}
              alt="eventsallIcon"
            />
            <h2 className="text-[14px] font-medium">All Events</h2>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="font-bold ">403</p>
            <Button
              variant="outline"
              className="flex space-x-1 items-center border-transparent hover:bg-transparent cursor-pointer active:scale-90 transition-all  focus-visible:ring-0 focus-visible:ring-transparent shadow-none"
            >
              <p className="text-[14px] text-[#FC6435]">View All</p>
              <Image
                src="/icons/rightarrowcolored.svg"
                height={14}
                width={14}
                alt="rightarrow"
              />
            </Button>
          </div>
        </div>
        <div className="bg-white w-[full] h-[120px] rounded-[8px] shadow-md p-[20px] space-y-4">
          <div className="flex items-center gap-[19px]">
            <Image
              src={"/logo/eventspending.svg"}
              height={40}
              width={38}
              alt="eventsallIcon"
            />
            <h2 className="text-[14px] font-medium">Pending Events</h2>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="font-bold ">403</p>
            <Button
              variant="outline"
              className="flex space-x-1 items-center border-transparent hover:bg-transparent cursor-pointer active:scale-90 transition-all  focus-visible:ring-0 focus-visible:ring-transparent shadow-none"
            >
              <p className="text-[14px] text-[#FC6435]">View All</p>
              <Image
                src="/icons/rightarrowcolored.svg"
                height={14}
                width={14}
                alt="rightarrow"
              />
            </Button>
          </div>
        </div>
        <div className="bg-white w-[full] h-[120px] rounded-[8px] shadow-md p-[20px] space-y-4">
          <div className="flex items-center gap-[19px]">
            <Image
              src={"/logo/eventsapproved.svg"}
              height={40}
              width={38}
              alt="eventsallIcon"
            />
            <h2 className="text-[14px] font-medium">Approved Events</h2>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="font-bold ">403</p>
            <Button
              variant="outline"
              className="flex space-x-1 items-center border-transparent hover:bg-transparent cursor-pointer active:scale-90 transition-all  focus-visible:ring-0 focus-visible:ring-transparent shadow-none"
            >
              <p className="text-[14px] text-[#FC6435]">View All</p>
              <Image
                src="/icons/rightarrowcolored.svg"
                height={14}
                width={14}
                alt="rightarrow"
              />
            </Button>
          </div>
        </div>
        <div className="bg-white w-[full] h-[120px] rounded-[8px] shadow-md p-[20px] space-y-4">
          <div className="flex items-center gap-[19px]">
            <Image
              src={"/logo/eventscancelled.svg"}
              height={40}
              width={38}
              alt="eventsallIcon"
            />
            <h2 className="text-[14px] font-medium">Cancelled Events</h2>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="font-bold ">403</p>
            <Button
              variant="outline"
              className="flex space-x-1 items-center border-transparent hover:bg-transparent cursor-pointer active:scale-90 transition-all  focus-visible:ring-0 focus-visible:ring-transparent shadow-none"
            >
              <p className="text-[14px] text-[#FC6435]">View All</p>
              <Image
                src="/icons/rightarrowcolored.svg"
                height={14}
                width={14}
                alt="rightarrow"
              />
            </Button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#1215C4] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/userstotal.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Total Users</p>
              <h2 className="font-bold text-[22px]">420</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#F1994C] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/usersactive.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Active Users</p>
              <h2 className="font-bold text-[22px]">40</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#B1350F] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/usersemail.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Email Unverified Users</p>
              <h2 className="font-bold text-[22px]">12</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#C4129E] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/usersverified.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Verified Users</p>
              <h2 className="font-bold text-[22px]">420</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#089A47] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/organizerstotal.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Total Organizers</p>
              <h2 className="font-bold text-[22px]">420</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#1280C4] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/organizersactive.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Active Organizers</p>
              <h2 className="font-bold text-[22px]">420</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#64646E] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/organizersverified.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Verified Organizers</p>
              <h2 className="font-bold text-[22px]">420</h2>
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
        <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-md border border-[#5C098C] rounded-[8px]">
          <div className="flex items-center space-x-[32px]">
            <Image
              src={"/logo/organizersunverified.svg"}
              height={55}
              width={55}
              alt="logousers"
            />
            <div className="gap-[8px]">
              <p className="font-medium text-[14px]">Unverified Organizers</p>
              <h2 className="font-bold text-[22px]">30</h2>
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

      <section className="space-y-[9px] bg-white rounded-[8px] p-4">
        <h3 className="text-[18px] font-bold">Withdrawals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-sm border-r border-b border-[#D9D9D9] ">
            <div className="flex items-center space-x-[32px]">
              <Image
                src={"/logo/withdrawtotal.svg"}
                height={55}
                width={55}
                alt="logousers"
              />
              <div className="gap-[8px]">
                <p className="font-medium text-[22px]">₦502,000.25</p>
                <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                  Total Withdrawn
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
          <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-sm  border-b border-[#D9D9D9] ">
            <div className="flex items-center space-x-[32px]">
              <Image
                src={"/logo/withdrawpending.svg"}
                height={55}
                width={55}
                alt="logousers"
              />
              <div className="gap-[8px]">
                <p className="font-medium text-[22px]">₦502,000.25</p>
                <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                  Pending Withdrawak
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
          <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-sm border-r ">
            <div className="flex items-center space-x-[32px]">
              <Image
                src={"/logo/withdrawrejected.svg"}
                height={55}
                width={55}
                alt="logousers"
              />
              <div className="gap-[8px]">
                <p className="font-medium text-[22px]">₦502,000.25</p>
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
          <div className="flex items-center justify-between w-full h-[102px] px-[20px] shadow-sm ">
            <div className="flex items-center space-x-[32px]">
              <Image
                src={"/logo/withdrawcharge.svg"}
                height={55}
                width={55}
                alt="logousers"
              />
              <div className="gap-[8px]">
                <p className="font-medium text-[22px]">₦502,000.25</p>
                <h2 className="font-medium text-[14px] text-[#8F8F8F]">
                  Withdrawal Charge
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
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        <Image src={"/chart1.svg"} height={488} width={625} alt="chart" />
        <Image src={"/chart2.svg"} height={488} width={625} alt="chart" />
      </section>
    </div>
  );
};

export default page;
