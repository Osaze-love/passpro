import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateEvents } from "@/redux/slices/eventslice";

const useEvent = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken, usersDetail } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getEvents = async (search?: string) => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${base_url}/events?search=${search}`
        : `${base_url}/events`;
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      dispatch(updateEvents(response?.data?.data));
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push('/login');
      } else {
        console.error(error);
        // Optional: Add toast for other error types
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

  const createCategory = async (formData: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/categories`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      await getEvents();
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push('/login');
      } else {
        console.error(error);
        // Optional: Add toast for other error types
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
    getEvents,
    createCategory,
    loading,
  };
};

export default useEvent;
