"use client"
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const {activeOrder} = useSelector((state: RootState) => state.order);

  return (
    <div className=" space-y-[10px] px-[43px] py-[40px]">
      <h3 className=" font-semibold text-[24px] text-[#606060]">Order Details</h3>
      <section className="border w-full">
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Event Title
          </p>
          <p className="px-[40px]  font-semibold">
            {activeOrder?.event_title}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Order Id
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            {activeOrder?.id}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Organized By
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            {activeOrder?.organized_by}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Username
          </p>
          <p className="px-[40px]  text-[#FC6435] font-semibold">
            {activeOrder.user_name}
          </p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Price
          </p>
          <p className="px-[40px]  font-bold">{activeOrder?.ticket_price}</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Quantity
          </p>
          <p className="px-[40px]  font-bold">{activeOrder.ticket_quantity}</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Total
          </p>
          <p className="px-[40px]  font-bold">{activeOrder?.total_price}</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Payment Status
          </p>
          
          <p className="px-[40px]">
          {activeOrder?.payment_status === 'cancelled' &&  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {activeOrder?.payment_status}
                  </p>}
                  {activeOrder?.payment_status === 'paid' &&  <p className="w-[99px] text-[#34C759] rounded-[20px] flex items-center justify-center bg-[#E9F9F0] border border-[#34C759] p-[5px]">
                    {activeOrder?.payment_status}
                  </p>}
                  {activeOrder?.payment_status === 'pending' &&  <p className="w-[99px] text-[#FFB494] rounded-[20px] flex items-center justify-center bg-[#FFD8C8] border border-[#FFB494] p-[5px]">
                    {activeOrder?.payment_status}
                  </p>}
          </p>
         
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="px-[40px] py-[40px]  font-semibold text-[#606060]">
            Status
          </p>
          <p className="px-[40px]">
          {activeOrder?.status === 'cancelled' &&  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {activeOrder?.status}
                  </p>}
                  {activeOrder?.status === 'active' &&  <p className="w-[99px] text-[#34C759] rounded-[20px] flex items-center justify-center bg-[#E9F9F0] border border-[#34C759] p-[5px]">
                    {activeOrder?.status}
                  </p>}
                  {activeOrder?.status === 'pending' &&  <p className="w-[99px] text-[#FFB494] rounded-[20px] flex items-center justify-center bg-[#FFD8C8] border border-[#FFB494] p-[5px]">
                    {activeOrder?.status}
                  </p>}
          </p>
        
        </div>
      </section>
    </div>
  );
};

export default OrderDetails;
