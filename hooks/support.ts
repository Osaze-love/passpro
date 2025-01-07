import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSupportTickets } from "@/redux/slices/supportslice";
import { toast } from "./use-toast";

const useSupport = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getSupportTickets = async (status?: string) => {
    setLoading(true);
    try {
      const endpoint = status
        ? `${base_url}/support-tickets?status=${status}`
        : `${base_url}/support-tickets`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      dispatch(updateSupportTickets(response?.data?.data));
      console.log(response);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
        console.error(error);
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
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
        console.error(error);
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
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    getSupportTickets,
    replyTicket,
    updateTicketStatus,
    loading,
  };
};

export default useSupport;
