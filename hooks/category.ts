import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateCategories } from "@/redux/slices/categoryslice";

const useCategory = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/categories`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      dispatch(updateCategories(response?.data?.data));
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
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

  const createCategory = async (formData: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/categories`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      await getCategories();
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
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

  const updateCategory = async (categoryId: any, formData: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/categories/${categoryId}`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      await getCategories();
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
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
      if (error.response?.status === 403) {
        router.push("/login");
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

  return {
    getCategories,
    toggleCategoryStatus,
    updateCategory,
    createCategory,
    loading,
  };
};

export default useCategory;
