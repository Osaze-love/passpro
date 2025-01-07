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
  const { getCategories, loading, toggleCategoryStatus, createCategory, updateCategory } = useCategory();
  const {categories} = useSelector((state: RootState) => state.category);
  const [isOpen, setisOpen] = useState(false);
  const [isCategoryOpen, setisCategoryOpen] = useState(false);
  const [isUpdateCategoryOpen, setisUpdateCategoryOpen] = useState(false);
  // const [file, setFile] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<any>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [categoryId, setCategoryId] = useState<any>(0);
  const [categoryName, setCategoryName] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<any>('');
  const closeUpdateCategory = () => {
    setisUpdateCategoryOpen(false)
  }
  const closeDialog = () => setisOpen(false);
  const closeCategoryDialog = () => {
     setisCategoryOpen(false);
    setCategoryName("");
    setFormData(null);
    setImageSrc(null);
  };
  useEffect(() => {
    getCategories();
  },[])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFormats.includes(selectedFile.type)) {
      alert("Unsupported file format. Please upload a PNG, JPEG, or JPG image.");
      return;
    }

    try {
      // Resize the image to 200x200
      const resizedBlob = await resizeImage(selectedFile, 200, 200);

      const newFormData = new FormData();
      newFormData.append("image", resizedBlob, selectedFile.name);

      const imageUrl = URL.createObjectURL(resizedBlob);

      setImageSrc(imageUrl);
      setFormData(newFormData);
      console.log(newFormData);
      

      console.log("FormData content:", newFormData.get("image"));
    } catch (error) {
      console.error("Error resizing the image:", error);
    }
  };

  // Function to resize the image
  const resizeImage = (file: File, width: number, height: number): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = document.createElement("img") as HTMLImageElement;
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject(new Error("Failed to create resized blob."));
            },
            file.type,
            1
          );
        } else {
          reject(new Error("Canvas context not available."));
        }
      };

      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleCreateCategory = async () => {
    if (!categoryName || !formData) {
      alert("Please provide a category name and upload an image.");
      return;
    }
    formData.append("category_name", categoryName);
  
    // Call your createCategory function with the FormData
    setisCategoryOpen(false);
    await createCategory(formData);
  
    setCategoryName("");
    setFormData(null);
    setImageSrc(null);
  };

  const handleEditCategory = (data: any) => {
    setActiveCategory(data);

  if (formData) {
    formData.append("image", `https://sub.passpro.africa/storage/${data.image}`);
  } else {
    const newFormData = new FormData();
    newFormData.append("image", `https://sub.passpro.africa/storage/${data.image}`);
    setFormData(newFormData); 
  }
    setCategoryName(data.category_name);
    setImageSrc(data.image); 
    setisUpdateCategoryOpen(true);
  };

  const handleUpdateCategory = async () => {
    if (!categoryName || !formData) {
      alert("Please provide a category name and upload an image.");
      return;
    }
 
    formData.append("category_name", categoryName);
    // console.log("FormData content:", formData.get("image"));
    // console.log("FormData content:", formData.get("category_name"));


    await updateCategory(activeCategory.id, formData);

    setisUpdateCategoryOpen(false);
    setCategoryName('');
    setImageSrc(null);
    setFormData(null);
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
                        onClick={() => handleEditCategory(data)}

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
                      {data?.status === 'disabled' ? 
                      <span className="text-[14px]">Enable</span>
                      :
                      <span className="text-[14px]">Disable</span>
                      }
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
              Are you sure you want to update this category?
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
            onClick={handleCreateCategory}
              className="w-full py-[10px] shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isUpdateCategoryOpen} onOpenChange={closeUpdateCategory}>
        <DialogContent className="sm:max-w-[524px] max-h-[80vh] overflow-scroll scrollbar-hide">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4 border-b mb-[32px]">
              Update Category
            </p>

            <div className="grid w-full items-center gap-[8px] mb-[43px]">
              <Label htmlFor="image" className="">
                <div className="flex items-start font-bold text-[14px] text-[#333333]">
                  <p>Image</p>
                  <span className="text-[#F24455] text-md">*</span>
                </div>
              </Label>
              <div className="h-[345px] w-full border-2 shadow-sm relative rounded-[8px]">
              {imageSrc && <Image src={`https://sub.passpro.africa/storage/${imageSrc}`} alt="Category Image" width={200} height={200} />}

              
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
            onClick={handleUpdateCategory}
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
