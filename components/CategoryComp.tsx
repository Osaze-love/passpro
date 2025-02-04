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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const CategoryComp = () => {
  const { getCategories, loading, toggleCategoryStatus, createCategory, updateCategory, deleteCategory } = useCategory();
  const {categories, current_page, from, last_page, per_page, to, total} = useSelector((state: RootState) => state.category);
  const [isOpen, setisOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCategoryOpen, setisCategoryOpen] = useState(false);
  const [isUpdateCategoryOpen, setisUpdateCategoryOpen] = useState(false);
  // const [file, setFile] = useState<any>(null);
  const [search, setSearch] = useState('');
  const [imageSrc, setImageSrc] = useState<any>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [editImageSrc, setEditImageSrc] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<FormData | null>(null);
  const [categoryId, setCategoryId] = useState<any>(0);
  const [categoryName, setCategoryName] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<any>('');
  const [deleteId, setDeleteId] = useState<any>(0);
  const closeUpdateCategory = () => {
    setisUpdateCategoryOpen(false);
    setCategoryName("");
    setEditImageSrc(null);
    setEditFormData(null);
    }
  const closeDialog = () => setisOpen(false);
  const closeDeleteDialog = () => setIsDeleteOpen(false);
  const closeCategoryDialog = () => {
     setisCategoryOpen(false);
    setCategoryName("");
    setFormData(null);
    setImageSrc(null);
  };
  useEffect(() => {
      getCategories(1);
  },[])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
  
    if (!selectedFile) return;
  
    // Validate file format
    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFormats.includes(selectedFile.type)) {
      alert("Unsupported file format. Please upload a PNG, JPEG, or JPG image.");
      return;
    }
  
    try {
      // Create FormData with the original file
      const newFormData = new FormData();
      newFormData.append("image", selectedFile);
  
      // Generate a URL to display the image
      const imageUrl = URL.createObjectURL(selectedFile);
  
      setImageSrc(imageUrl);
      setFormData(newFormData);
  
    } catch (error) {
    }
  };
  const handleCreateCategory = async () => {
    if (!categoryName || !formData) {
      alert("Please provide a category name and upload an image.");
      return;
    }
    formData.append("category_name", categoryName);
  
    setisCategoryOpen(false);
    await createCategory(formData);
  
    setCategoryName("");
    setFormData(null);
    setImageSrc(null);
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
  
    if (!selectedFile) return;
  
    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFormats.includes(selectedFile.type)) {
      alert("Unsupported file format. Please upload a PNG, JPEG, or JPG image.");
      return;
    }
  
    // Update image preview and FormData
    const newFormData = new FormData();
    newFormData.append("image", selectedFile);
  
    const imageUrl = URL.createObjectURL(selectedFile);
    setEditImageSrc(imageUrl); // Preview the newly selected image
    setEditFormData(newFormData); // Save the new file in FormData
  };
  
  const handleEditCategory = (data: any) => {
    setActiveCategory(data); // Set active category
    setCategoryName(data.category_name); // Set category name
  
    // Construct the full image URL for preview purposes
    const imageUrl = `https://sub.passpro.africa/storage/${data.image}`;
    setEditImageSrc(imageUrl);
    setisUpdateCategoryOpen(true);
    // Create a File object manually using the existing image URL
    const newFormData = new FormData();
    const imageName = data.image.split("/").pop() || "image.jpg";
    
    try {
      // Manually create a File object for FormData
      const file = new File([], imageName, { type: "image/jpeg" }); // Replace with the correct MIME type if necessary
      newFormData.append("image", file);
  
      setEditFormData(newFormData);
      // Open the dialog
    } catch (error) {
      alert("An error occurred while preparing the image. Please try again.");
    }
  };
  
  
  
  // Handle update category (submit updated data)
  const handleUpdateCategory = async () => {

    if (!categoryName || !editFormData) {
      alert("Please provide a category name and upload an image.");
      return;
    }
    
    // Append category name to FormData
    editFormData.append("category_name", categoryName);
    
    try {
      setisUpdateCategoryOpen(false);

      await updateCategory(activeCategory.id, activeCategory.image, editFormData);
  
      // Reset states after successful update
      setCategoryName("");
      setEditImageSrc(null);
      setEditFormData(null);
    } catch (error) {
    }
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
                {data?.status === 'disabled' ? 
                <p className="w-max text-[#FF3B30] rounded-[20px] bg-[#f1e6e6] p-[8px]">
                {data?.status}
              </p>
              :
                <p className="w-max text-[#28C76F] rounded-[20px] bg-[#E9F9F0] p-[8px]">
                {data?.status}
              </p> }
                  
                </TableCell>
                <TableCell className="text-right border-r w-[230px]">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                    onClick={() => handleEditCategory(data)}
                    className="bg-none border border-[#FC6435] rounded-[8px]  text-[#FC6435] flex items-center p-[10px] space-x-[8px] transition-all active:scale-95">
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
                      {data?.status === 'disabled' ? 
                      <span className="text-[14px]">Enable</span>
                      :
                      <span className="text-[14px]">Disable</span>
                      }
                    </button>

                    <Image
                        src="/icons/delete.svg"
                        width={32}
                        height={32}
                        alt="Icon"
                        className="cursor-pointer"
                        onClick={() => {
                         setDeleteId(data.id);
                         setIsDeleteOpen(true);
                        }}

                      />
                  </div>
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
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => current_page > 1 && getCategories(current_page - 1)}
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
                          onClick={() => getCategories(page)}
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
      
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  current_page < last_page && getCategories(current_page + 1)
                }
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

      <Dialog open={isDeleteOpen} onOpenChange={closeDeleteDialog}>
        <DialogContent className="sm:max-w-[500px]  top-[34%]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold pb-4">
              Confirmation Alert!
            </p>
            <p className="text-[14px]  text-[#808080] py-4 border-t border-b">
              Are you sure you want to delete this category?
            </p>
          </div>

          <DialogFooter>
            <div className="space-x-2">
              <Button
              onClick={() => {
                setDeleteId(0);
                closeDeleteDialog();
              }}
              className="shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all  active:scale-95">
                No
              </Button>
              <Button
              onClick={async() => {
                closeDeleteDialog();
                await deleteCategory(deleteId);
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
                <span className="font-bold">.png, .jpg, .jpeg.</span> 
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
  {editImageSrc && (
    <img
    src={editImageSrc}
    alt="Uploaded Preview"
    className="object-cover w-full h-full rounded-[8px]"
  />
  )}

  <label
    htmlFor="file-upload"
    className="absolute -right-2 -bottom-2 cursor-pointer"
  >
    <Image
      src="/icons/Upload.svg"
      height={40}
      width={40}
      alt="uploadIcon"
    />
    <input
      id="file-upload"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleEditFileChange}
    />
  </label>
</div>
              <p className="text-[#606060] text-[14px]">
                Supported Files:{" "}
                <span className="font-bold">.png, .jpg, .jpeg.</span> 
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
