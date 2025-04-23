import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTicketDetails, updateSupportPagination, updateSupportTickets } from "@/redux/slices/supportslice";
import { toast } from "./use-toast";
import { resetState } from "@/redux/slices/userslice";

const useSupport = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getSupportTickets = async (status?: string, search?: string, page: number = 1) => {
    setLoading(true);
    try {
      const endpoint = `${base_url}/support-tickets${
        status || search || page
          ? "?" +
            [
              status ? `status=${status}` : null,
              search ? `query=${search}` : null,
              page ? `page=${page}` : null,
            ]
              .filter(Boolean)
              .join("&")
          : ""
      }`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      dispatch(updateSupportTickets(response?.data?.data));
      
      const pagination = response.data;
           
            dispatch(
             updateSupportPagination({
               current_page: pagination.current_page,
               last_page: pagination.last_page,
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
  const getSupportTicketDetails = async (ticketId: any) => {
    setLoading(true);
    try {
      
      const response = await axios.get(`${base_url}/support-tickets/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
   dispatch(updateActiveTicketDetails(response.data.messages))      
     
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

  const replyTicket = async (ticketId: any, formData: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/support-tickets/${ticketId}/reply`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      toast({
        variant: "default",
        title: "Successfully Replied",
      });
      router.push("/support");
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

  const deleteTicket = async (ticketId: any) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${base_url}/support-tickets/${ticketId}`,  {
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

  const updateTicketStatus = async (ticketId: any, status: any) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${base_url}/support-tickets/${ticketId}/status`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      toast({
        variant: "default",
        title: "Successfully updated",
      });
      router.push("/support");
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
    getSupportTickets,
    replyTicket,
    updateTicketStatus,
    deleteTicket,
    loading,
    getSupportTicketDetails
  };
};

export default useSupport;
