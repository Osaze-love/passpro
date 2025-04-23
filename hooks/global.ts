import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateEvents, updatePaginationData } from "@/redux/slices/eventslice";
import { resetState } from "@/redux/slices/userslice";
import { updateDashboardData, updateGlobalSearch } from "@/redux/slices/searchslice";

const useGlobal = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken, usersDetail } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const getResults = async (query?: string) => {
    setLoading(true);
    try {
      const endpoint = query
      ? `${base_url}/global-search?query=${query}`
      : `${base_url}/global-search`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      dispatch(updateGlobalSearch(response.data.data))
     
     
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || 'An unexpected error occurred.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const getDashboardData = async (query?: string) => {
    setLoading(true);
    try {
          const response = await axios.get(`${base_url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });      
      dispatch(updateDashboardData(response.data))    
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || 'An unexpected error occurred.',
        });
      }
    } finally {
      setLoading(false);
    }
  };
  

  return {
    getResults,
    loading,
    getDashboardData
  };
};

export default useGlobal;
