import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
import { updateEvents, updatePaginationData } from "@/redux/slices/eventslice";
import { resetState } from "@/redux/slices/userslice";

const useEvent = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken, usersDetail } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const getEvents = async (search?: string, page: number = 1) => {
    setLoading(true);
    try {
      const endpoint = search
      ? `${base_url}/events?search=${search}&page=${page}`
      : `${base_url}/events?page=${page}`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      
      dispatch(updateEvents(response?.data?.data));
      const pagination = response.data.meta;

 dispatch(
  updatePaginationData({
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

  const createEvent = async (formData: FormData, setIsPublished: any) => {
    setAddLoading(true);
    try {
      const response = await axios.post(`${base_url}/events`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accept: "application/json",
        },
      });
      setIsPublished(true);      
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      } else {
        // Optional: Add toast for other error types
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || 'An unexpected error occurred.',
        });
      }
    } finally {
      setAddLoading(false);
    }
  };

  const deleteEvent = async (eventId: any) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${base_url}/events/${eventId}`,  {
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
    getEvents,
    createEvent,
    loading,
    deleteEvent,
    addLoading
  };
};

export default useEvent;
