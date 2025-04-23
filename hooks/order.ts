import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderPagination, updateOrders } from "@/redux/slices/orderslice";
import { toast } from "./use-toast";
import { resetState } from "@/redux/slices/userslice";

const useOrder = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getOrders = async (search?: string, page: number = 1) => {
    setLoading(true);
    try {
      const endpoint = search
      ? `${base_url}/orders?query=${search}&page=${page}`
      : `${base_url}/orders?page=${page}`;
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      dispatch(updateOrders(response?.data?.data));
 
        const pagination = response.data.meta;
       
        dispatch(
         updateOrderPagination({
           current_page: pagination.current_page,
           from: pagination.from,
           last_page: pagination.last_page,
           per_page: pagination.per_page,
           to: pagination.to,
           total: pagination.total,
         })
       );

    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      }else{
        toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || 'An unexpected error occurred.', 
      })
      }
      
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (name?: string, image?: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/categories`,
        {
          category_name: name,
          image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      }else{
        toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || 'An unexpected error occurred.', 
      })
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
          },
        }
      );
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      }else{
        toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || 'An unexpected error occurred.', 
      })
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId: any) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${base_url}/orders/${orderId}`,  {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      toast({
        variant: "default",
        title: "Successfully Deleted",
      });
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      }else{
        toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.message || 'An unexpected error occurred.', 
      })
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    getOrders,
    createCategory,
    toggleCategoryStatus,
    loading,
    deleteOrder
  };
};

export default useOrder;
