import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "@/redux/slices/orderslice";

const useOrder = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/orders`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      dispatch(updateOrders(response?.data?.data));
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error);
        // Uncomment if you want to use toast notifications
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Something went wrong.",
        //   description: error.response?.data?.message || "An unexpected error occurred.",
        // });
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
      console.log(response);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error);
        // Uncomment if you want to use toast notifications
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Something went wrong.",
        //   description: error.response?.data?.message || "An unexpected error occurred.",
        // });
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
      console.log(response);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error);
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
  };
};

export default useOrder;
