"use client";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useCategory from "@/hooks/category";
import BarLoader from "react-spinners/BarLoader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CategoryComp = () => {
  const { getCategories, loading, toggleCategoryStatus, createCategory } = useCategory();
  const {categories} = useSelector((state: RootState) => state.category);
  const [isOpen, setisOpen] = useState(false);
  const [isCategoryOpen, setisCategoryOpen] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<any>(0);
  const [categoryName, setCategoryName] = useState<string>('');

  const closeDialog = () => setisOpen(false);
  const closeCategoryDialog = () => {
    setisCategoryOpen(false);
    setFile(null);
    setImageSrc(null);
  };
  useEffect(() => {
    getCategories();
  },[])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFormats.includes(selectedFile.type)) {
      alert(
        "Unsupported file format. Please upload a PNG, JPEG, or JPG image."
      );
      return;
    }

    const img = document.createElement("img");
    const objectURL = URL.createObjectURL(selectedFile);
    img.src = objectURL;

    img.onload = () => {
      // If image dimensions are not 200x200, resize it
      if (img.width !== 200 || img.height !== 200) {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, 200, 200);
          const resizedImage = canvas.toDataURL(selectedFile.type);
          setFile({
            preview: resizedImage,
            name: selectedFile.name,
            size: selectedFile.size,
            type: selectedFile.type,
          });
          setImageSrc(resizedImage);
        }
      } else {
        setFile({
          preview: objectURL,
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type,
        });
        setImageSrc(objectURL);
      }
    };

    img.onerror = () => {
      alert("Error loading the image. Please try again.");
    };
  };


  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
       {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <BarLoader color="#FC6435" />
       
    </div> 
  )}
      <section className="flex items-center justify-between mb-[57px]">
        <h3 className="text-[20px] font-semibold">Manage Category</h3>
        <button
          onClick={() => setisCategoryOpen(true)}
          className="bg-none border border-[#FC6435] rounded-[8px] w-[159px] text-[#FC6435] transition-all active:scale-95"
        >
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
            {categories?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium h-[75px] text-[#606060] border-l">
                  {data?.category_name}
                </TableCell>
                <TableCell className="text-[#606060]">{data?.events_count}</TableCell>
                <TableCell>
                  <p className="w-max text-[#28C76F] rounded-[20px] bg-[#E9F9F0] p-[8px]">
                    {data?.status}
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
                    <button
                      className="bg-none border border-[#FC6435] rounded-[8px] p-[10px] text-[#FC6435] flex items-center space-x-[8px] transition-all active:scale-95"
                      onClick={() => {
                        setCategoryId(data?.id);
                        setisOpen(true)}}
                    >
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
        </Table>
      </section>

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4">
              Confirmation Alert!
            </p>
            <p className="text-[14px]  text-[#808080] py-4 border-t border-b">
              Are you sure you want to disable this category?
            </p>
          </div>

          <DialogFooter>
            <div className="space-x-2">
              <Button
              onClick={() => {
                setCategoryId(0);
                closeDialog();
              }}
              className="shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                No
              </Button>
              <Button
              onClick={async() => {
                closeDialog();
                await toggleCategoryStatus(categoryId);
              }}
              className="shadow-sm font-bold text-[#FC6435] bg-transparent hover:bg-transparent transition-all active:scale-95 border border-[#FC6435]">
                Yes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isCategoryOpen} onOpenChange={closeCategoryDialog}>
        <DialogContent className="sm:max-w-[524px] max-h-[80vh] overflow-scroll scrollbar-hide">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b mb-[32px]">
              Add Category
            </p>

            <div className="grid w-full items-center gap-[8px] mb-[43px]">
              <Label htmlFor="image" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Image</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <div className="h-[345px] w-full border-2 shadow-sm relative rounded-[8px]">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Uploaded Preview"
                    className="object-cover w-full h-full rounded-[8px]"
                  />
                ) : (
                  <h3 className="text-[40px] flex items-center justify-center w-full h-full font-medium">
                    200 x 200
                  </h3>
                )}
                <label
                  htmlFor="file-upload"
                  className="absolute -right-2 -bottom-2 cursor-pointer"
                >
                  <Image
                    src={"/icons/Upload.svg"}
                    height={40}
                    width={40}
                    alt="uploadIcon"
                  />
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <p className="text-[#606060] text-[14px]">
                Supported Files:{" "}
                <span className="font-bold">.png, .jpg, .jpeg.</span> Image will
                be resized into <span className="font-bold">200x200px</span>
              </p>
            </div>

            <div className="grid w-full items-center gap-[8px]">
              <Label htmlFor="category" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Name</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <Input id="category"
               value={categoryName}
               onChange={(e) => {
                setCategoryName(e.target.value)
               }}
              className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 py-[8px] px-4 shadow-sm" />
            </div>
          </div>

          <DialogFooter className="mt-[35px]">
            <Button
            onClick={async() => {
              await createCategory(categoryName, imageSrc)
              console.log(categoryName, imageSrc);
              
            }}
              className="w-full py-[10px] shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryComp;
