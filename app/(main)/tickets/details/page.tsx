import React from "react";

const TicketDetails = () => {
  return (
    <div className="p-[30px] space-y-[30px]">
      <section className="border w-full">
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Event Title
          </p>
          <p className="px-[40px]  font-semibold">
            TechExpo: innovating tomorrow
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Organized By
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            TechExpo solutions
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Username
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            TechExpo: innovating tomorrow
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Price
          </p>
          <p className="px-[40px]  font-bold">$2</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Quantity
          </p>
          <p className="px-[40px]  font-bold">$1</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Total
          </p>
          <p className="px-[40px]  font-bold">$1</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Payment Status
          </p>
          <p className="w-[99px] mx-[40px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
            Pending
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Status
          </p>
          <button className="bg-none mx-[40px] border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95">
            Details
          </button>
        </div>
      </section>
    </div>
  );
};

export default TicketDetails;
