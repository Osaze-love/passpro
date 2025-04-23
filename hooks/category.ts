import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateCategories, updateCategoryPaginationData } from "@/redux/slices/categoryslice";
import { resetState } from "@/redux/slices/userslice";

const useCategory = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getCategories = async (page: number = 1) => {
    setLoading(true);
    try {
      const endpoint =  `${base_url}/categories?page=${page}`;
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      dispatch(updateCategories(response?.data?.data));

      const pagination = response.data.meta;
      
       dispatch(
        updateCategoryPaginationData({
          current_page: pagination.current_page,
          from: pagination.from,
          last_page: pagination.last_page,
          per_page: pagination.per_page,
          to: pagination.to,
          total: pagination.total,
        }))

    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
              dispatch(resetState());
            } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (formData: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/categories`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      toast({
        variant: "default",
        description: "Added Successfully",
      });
      await getCategories();
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const updateCategory = async (categoryId: any, categoryImage: any, formData: FormData) => {
    setLoading(true);
    const formDataImage = formData.get("image");
   
  let formDataImageName: string | null = null;
  if (formDataImage instanceof File) {
    formDataImageName = formDataImage.name;
  }

  const categoryImageName = categoryImage.split("/").pop(); 

  if (formDataImageName && formDataImageName === categoryImageName) {
    formData.delete("image");
  }
    

    try {
      const response = await axios.post(`${base_url}/categories/${categoryId}`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      
      await getCategories();
    } catch (error: any) {
      
      if (error.response?.data?.message === "Unauthenticated.") {
        // dispatch(resetState());
      } else {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (categoryId: any) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${base_url}/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      await getCategories();
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleCategoryStatus = async (categoryId: any) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${base_url}/categories/${categoryId}/toggle-status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/json",
          },
        }
      );
      toast({
        description: response?.data?.message || "Status toggled successfully.",
      });
      await getCategories();
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      }else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    getCategories,
    toggleCategoryStatus,
    updateCategory,
    createCategory,
    deleteCategory,
    loading,
  };
};

export default useCategory;
