"use client";
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

const Orders = () => {
  const router = useRouter();
  const ordersData = [
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
    {
      title: "Mumbai Rhythms: A Fusion of Dance and Culture",
      username: "saketkumar",
      price: "$24",
      quantity: "1",
      total: "$39",
      payment: "pending",
      status: "Cancelled",
    },
  ];
  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">Orders</h3>
        <div className="flex items-center space-x-[24px]">
          <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Name, User"
              className="shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
            />
            <div className="bg-[#FC6435] h-full flex w-max justify-center items-center cursor-pointer px-[20px] rounded-tr-[8px] rounded-br-[8px]">
              <Image
                src={"/icons/searchIconwhite.svg"}
                width={20}
                height={19.88}
                alt="searchIcon"
              />
            </div>
          </div>
          <div className="flex w-[277px] h-[48px] items-center border rounded-[8px]  bg-white">
            <Input
              placeholder="Name, User"
              className="shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 grow text-black placeholder:text-[#D9D9D9] bg-transparent placeholder:text-[12px] "
            />
            <div className="bg-[#FC6435] h-full flex w-max justify-center items-center cursor-pointer px-[20px] rounded-tr-[8px] rounded-br-[8px]">
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
            {ordersData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className=" h-[75px] text-[#606060] font-bold border-l w-[200px]">
                  {data.title}
                </TableCell>
                <TableCell className="text-[#606060] font-bold ">
                  {data.username}
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-[14px]">
                  {data.price}
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-[14px]">
                  {data.quantity}
                </TableCell>
                <TableCell className="text-[#606060] font-bold text-[14px]">
                  {data.total}
                </TableCell>
                <TableCell>
                  <p className=" text-[#FFB494] w-[99px] flex items-center justify-center rounded-[20px] bg-[#fae6e6] border border-[#FFB494] p-[5px]">
                    {data.payment}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="w-[99px] text-[#EB2222] rounded-[20px] flex items-center justify-center bg-[#f5bcbc] border border-[#EB2222] p-[5px]">
                    {data.status}
                  </p>
                </TableCell>
                <TableCell className="text-right border-r ">
                  <button
                    className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                    onClick={() => {
                      router.push("/orders/details");
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
    </div>
  );
};

export default Orders;
