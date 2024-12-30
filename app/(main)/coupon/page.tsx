"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    
  const coupons = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGJKU~qm6Uy14VoyukK6Y6yhQzGNIadclPUVgFOpaE8V4px6-lEwH7Tqwg8wtoPX5AdSplQsF6CquRMz12zbpWKebarIOejDRXoDB0ZFc3QNsNAmdHYfd9D0O1Z5PPf1AATFu~keKORjeaBuxTnpn4ZzizxaIf4Ojx719uapkr~PKlLqmhRjL2yn8eqa3gjz2ITSTt060E6dqfa41VxR0CNwz4O7HxmFNb22EJKPXBLXyzNh6Eo88YqQwIKnkhPUgxcm0FGT7MYcP-A66Rgu4QhZ-IHGy-wQzpErYaZk27DoAQdQYNhoVf5EUqZhztwVFQXxvuPTMuzPwShHa5Tj3g__', 
        name: 'Funny Comedy Show',
        location: 'Muson Centre, Lagos',
        discount: '20% Off'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGJKU~qm6Uy14VoyukK6Y6yhQzGNIadclPUVgFOpaE8V4px6-lEwH7Tqwg8wtoPX5AdSplQsF6CquRMz12zbpWKebarIOejDRXoDB0ZFc3QNsNAmdHYfd9D0O1Z5PPf1AATFu~keKORjeaBuxTnpn4ZzizxaIf4Ojx719uapkr~PKlLqmhRjL2yn8eqa3gjz2ITSTt060E6dqfa41VxR0CNwz4O7HxmFNb22EJKPXBLXyzNh6Eo88YqQwIKnkhPUgxcm0FGT7MYcP-A66Rgu4QhZ-IHGy-wQzpErYaZk27DoAQdQYNhoVf5EUqZhztwVFQXxvuPTMuzPwShHa5Tj3g__', 
        name: 'Funny Comedy Show',
        location: 'Muson Centre, Lagos',
        discount: '20% Off'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGJKU~qm6Uy14VoyukK6Y6yhQzGNIadclPUVgFOpaE8V4px6-lEwH7Tqwg8wtoPX5AdSplQsF6CquRMz12zbpWKebarIOejDRXoDB0ZFc3QNsNAmdHYfd9D0O1Z5PPf1AATFu~keKORjeaBuxTnpn4ZzizxaIf4Ojx719uapkr~PKlLqmhRjL2yn8eqa3gjz2ITSTt060E6dqfa41VxR0CNwz4O7HxmFNb22EJKPXBLXyzNh6Eo88YqQwIKnkhPUgxcm0FGT7MYcP-A66Rgu4QhZ-IHGy-wQzpErYaZk27DoAQdQYNhoVf5EUqZhztwVFQXxvuPTMuzPwShHa5Tj3g__', 
        name: 'Funny Comedy Show',
        location: 'Muson Centre, Lagos',
        discount: '20% Off'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGJKU~qm6Uy14VoyukK6Y6yhQzGNIadclPUVgFOpaE8V4px6-lEwH7Tqwg8wtoPX5AdSplQsF6CquRMz12zbpWKebarIOejDRXoDB0ZFc3QNsNAmdHYfd9D0O1Z5PPf1AATFu~keKORjeaBuxTnpn4ZzizxaIf4Ojx719uapkr~PKlLqmhRjL2yn8eqa3gjz2ITSTt060E6dqfa41VxR0CNwz4O7HxmFNb22EJKPXBLXyzNh6Eo88YqQwIKnkhPUgxcm0FGT7MYcP-A66Rgu4QhZ-IHGy-wQzpErYaZk27DoAQdQYNhoVf5EUqZhztwVFQXxvuPTMuzPwShHa5Tj3g__', 
        name: 'Funny Comedy Show',
        location: 'Muson Centre, Lagos',
        discount: '20% Off'
    },
  ]

  const couponData = [
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },
    {
        codes: 'Techy45',
        date: '2024-04-02 9:51 AM',
        months: '8 months ago',
        name: 'Techyx',
        percentage: '20',
        quantity: '50',
        status: 'active'
    },

  ]
  const [activeTab, setActiveTab] = useState("Create Coupon Code");
  const [discountType, setDiscountType] = useState<string | null>(null);
  const [percentageValue, setPercentageValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDiscountType(e.target.value);
    // Reset values when switching types
    setPercentageValue("");
    setAmountValue("");
  };

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4] space-y-[30px]">
      <section className="flex items-center space-x-[10px]">
        {["Create Coupon Code", "Coupons Available", "Coupon History"].map((tab) => (
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
    {activeTab === 'Create Coupon Code' &&  
     <section className="grid grid-cols-1 gap-[39px] bg-white py-[60px] px-[21px]">
     {/* Coupon Name */}
     <div className="grid w-full items-center gap-[8px]">
       <Label htmlFor="couponname" className="">
         <div className="flex items-start font-medium text-[#343434]">
           <p>Coupon Name</p>
         </div>
       </Label>
       <Input
         id="couponname"
         placeholder="Enter Coupon Name"
         className="placeholder:text-[#8F8F8F] py-[22px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
       />
     </div>

     {/* Coupon Code */}
     <div className="grid w-full items-center gap-[8px]">
       <Label htmlFor="couponcode" className="">
         <div className="flex items-start font-medium text-[#343434]">
           <p>Coupon Code</p>
         </div>
       </Label>
       <Input
         id="couponcode"
         placeholder="Enter Coupon Code"
         className="placeholder:text-[#8F8F8F] py-[22px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
       />
     </div>

     {/* Discount Type */}
     <div className="grid w-full items-center gap-[8px]">
       <Label htmlFor="state" className="">
         <div className="flex items-start font-medium text-[#343434]">
           <p>Discount Type</p>
         </div>
       </Label>
       <select
         id="state"
         defaultValue=""
         onChange={handleDiscountChange}
         className="py-[10px] outline-none border rounded-[8px] px-4 shadow-sm text-[#8F8F8F]"
       >
         <option value="" disabled>
           Select Discount Type
         </option>
         <option value="percentage">Percentage</option>
         <option value="amount">Amount</option>
       </select>
     </div>

     {/* Conditional Inputs for Discount (No Labels) */}
     {discountType === "percentage" && (
       <div className="grid w-full items-center gap-[8px]">
         <Input
           id="percentage"
           placeholder="Enter Percentage"
           value={percentageValue}
           onChange={(e) => setPercentageValue(e.target.value)}
           className="placeholder:text-[#8F8F8F] py-[22px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
         />
       </div>
     )}

     {discountType === "amount" && (
       <div className="grid w-full items-center gap-[8px]">
         <Input
           id="amount"
           placeholder="Enter Amount"
           value={amountValue}
           onChange={(e) => setAmountValue(e.target.value)}
           className="placeholder:text-[#8F8F8F] py-[22px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
         />
       </div>
     )}

     {/* Quality of Coupon */}
     <div className="grid w-full items-center gap-[8px]">
       <Label htmlFor="couponquality" className="">
         <div className="flex items-start font-medium text-[#343434]">
           <p>Quality Of Coupon</p>
         </div>
       </Label>
       <Input
         id="couponquality"
         placeholder="Enter The Quality Of Coupon"
         className="placeholder:text-[#8F8F8F] py-[22px] focus-visible:ring-0 focus-visible:ring-transparent px-4 shadow-sm"
       />
     </div>
   </section>
    }
    
    {activeTab === 'Coupons Available' && 
       <section className="bg-white">
         {coupons.map((coupon) => (
             <div className="flex items-end justify-between border-b-2 py-3 px-2 rounded-[10px]">
               <div className="flex items-center space-x-4">
                 <div className="relative w-[160px] h-[120px]">
                    <Image src={coupon.image} fill alt="image" className="rounded-[10px] object-cover"/>
                 </div>
                 <div className="flex flex-col gap-2">
                    <h2 className="text-[20px] text-[#343434] font-medium">{coupon.name}</h2>
                    <div className="flex items-center space-x-2">
                        <Image src={'/icons/locationIcon.svg'} width={20} height={20} alt="image"/>
                        <p className="font-normal text-[#606060]">{coupon.location}</p>
                    </div>
                    <p className="font-semibold text-[#164473]">{coupon.discount}</p>
                 </div>
               </div>
               <div className="flex items-center space-x-3">
               <button
                      className="bg-none border-none rounded-[8px] text-white py-[5px] w-[100px] bg-[#FC6435] font-semibold transition-all active:scale-95"
                    //   onClick={() => {
                    //     router.push("/events/details");
                    //   }}
                    >
                      Edit
                    </button>
               <button
                      className="bg-none border-2 border-[#FC6435] rounded-[8px] py-[5px] w-[100px] text-[#FC6435] font-semibold transition-all active:scale-95"
                    //   onClick={() => {
                    //     router.push("/events/details");
                    //   }}
                    >
                      Delete
                    </button>
               </div>
             </div>
         ))}
       </section>
    }

{activeTab === 'Coupon History' && 

<section className="mt-[40px]">
<Table className="border-b">
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
      <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
        Codes
      </TableHead>
      <TableHead className="text-white text-center font-extrabold">
        Initiated
      </TableHead>
      <TableHead className="text-white font-extrabold">
        Name
      </TableHead>
      <TableHead className="text-white font-extrabold">Percentage</TableHead>
      <TableHead className="text-white font-extrabold">
        Quantity
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
    {couponData.map((data, index) => (
      <TableRow key={index}>
        <TableCell className="font-medium h-[75px] text-[#606060] border-l">
          {data.codes}
        </TableCell>
        <TableCell className="text-[#606060]">
          <div className="flex flex-col items-center">
             <p className="font-semibold">  
              {data.date}
             </p>
             <p className="font-medium text-[14px]" >  
              {data.months}
             </p>
          </div>
        </TableCell>
        <TableCell className="text-[#606060] text-[14px]">
          {data.name}
        </TableCell>
        <TableCell className="text-[#606060] text-[14px]">
          {data.percentage}
        </TableCell>
        <TableCell className="text-[#606060] text-[14px]">
          {data.quantity}
        </TableCell>
        <TableCell>
          <p className=" text-[#606060] w-[64px] flex items-center justify-center rounded-[20px] bg-[#d1ecd8] border border-[#34C759] p-[5px]">
            {data.status}
          </p>
        </TableCell>

        <TableCell >
         
            <button
              className="bg-none border border-[#FC6435] rounded-[8px] py-[5px] w-[100px] text-[#FC6435] font-medium transition-all active:scale-95"
              onClick={() => {
                router.push("/coupon/details");
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
}
     
    </div>
  );
};

export default Page;
