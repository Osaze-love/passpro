import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

const page = () => {
  const categoryData = [
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
    {
      name: "Business Conferences",
      event: "23",
      status: "Enabled",
    },
  ];
  return (
    <div className="px-[43px] py-[40px]">
      <section className="flex items-center justify-between mb-[57px]">
        <h3 className="text-[20px] font-semibold">Manage Category</h3>
        <button className="bg-none border border-[#FC6435] rounded-[8px] w-[159px] text-[#FC6435] transition-all active:scale-95">
          <span className="text-lg">+</span>{" "}
          <span className="text-[20px]">Add New</span>
        </button>
      </section>
      <section>
        <Table className="border-b">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FC6435] hover:bg-[#FC6435] ">
              <TableHead className=" text-white font-extrabold rounded-tl-[8px]">
                Category Name
              </TableHead>
              <TableHead className="text-white font-extrabold">
                Events
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
            {categoryData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium h-[75px] text-[#606060] border-l">
                  {data.name}
                </TableCell>
                <TableCell className="text-[#606060]">{data.event}</TableCell>
                <TableCell className="   ">
                  <p className="w-max text-[#28C76F] rounded-[20px] bg-[#E9F9F0] p-[8px]">
                    {" "}
                    {data.status}{" "}
                  </p>
                </TableCell>
                <TableCell className="text-right border-r w-[200px]">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="bg-none border border-[#FC6435] rounded-[8px]  text-[#FC6435] flex items-center p-[10px] space-x-[8px] transition-all active:scale-95">
                      <Image
                        src="/icons/editred.svg"
                        width={12}
                        height={12}
                        alt="editIcon"
                      />
                      <span className="text-[14px]">Edit</span>
                    </button>
                    <button className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95">
                      <Image
                        src="/icons/disablered.svg"
                        width={12}
                        height={12}
                        alt="disableIcon"
                      />
                      <span className="text-[14px]">Disable</span>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            {/* <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow> */}
          </TableFooter>
        </Table>
      </section>
    </div>
  );
};

export default page;
