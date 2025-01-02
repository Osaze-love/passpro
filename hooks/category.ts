
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateUserDetail, updateUserToken } from "@/redux/slices/userslice";
import { updateCategories } from "@/redux/slices/categoryslice";
// import { updateUser } from "@/redux/slices/adminslice";

const useCategory = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  
  const getCategories = async () => {
    setLoading(true);
    try {      
      const response = await axios.get(`${base_url}/categories`);  
    dispatch(updateCategories(response?.data?.data))    
    } catch (error: any) {
      // toast({
      //   variant: "destructive",
      //   title: "Uh oh! Something went wrong.",
      //   description: error.response?.data?.message || 'An unexpected error occurred.', 
      // })
      // console.error(error);
     
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (name?:string, image?:any ) => {
    setLoading(true);
    try {      
      const response = await axios.post(`${base_url}/categories`, {
        "category_name": name,
        "image": image,
      });  
      console.log(response);
      
    // dispatch(updateCategories(response?.data?.data))    
    } catch (error: any) {
      // toast({
      //   variant: "destructive",
      //   title: "Uh oh! Something went wrong.",
      //   description: error.response?.data?.message || 'An unexpected error occurred.', 
      // })
      console.error(error);
     
    } finally {
      setLoading(false);
    }
  };

  const toggleCategoryStatus  = async (categoryId: any) => {
    setLoading(true);
    try {
       const response = await axios.patch(`${base_url}/categories/${categoryId}/toggle-status`);
       console.log(response);
       
    }catch(err: any) {
      console.log(err);
      
    }finally{
       setLoading(false);
    }
  }
 



  return {
    getCategories,
    toggleCategoryStatus,
    createCategory,
   loading, 
  };
};

export default useCategory;
