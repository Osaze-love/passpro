import { updateWithdrawals } from "@/redux/slices/withdrawslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast"; // Assuming you use a toast library

const useWithdraw = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getWithdrawals = async (search?: string) => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${base_url}/transactions?search=${search}`
        : `${base_url}/transactions`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      dispatch(updateWithdrawals(response?.data?.data));
      console.log(response.data.data);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Error fetching withdrawals",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const approveWithdrawal = async (transactionId: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/admin/approve/${transactionId}/withdrawal`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      toast({
        variant: "default",
        title: "Withdrawal Approved",
      });
      console.log(response.data);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Error approving withdrawal",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const rejectWithdrawal = async (transactionId: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/admin/reject/${transactionId}/withdrawal`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      toast({
        variant: "default",
        title: "Withdrawal Rejected",
      });
      console.log(response.data);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Error rejecting withdrawal",
          description: error.response?.data?.message || "An unexpected error occurred.",
        });
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    getWithdrawals,
    loading,
    approveWithdrawal,
    rejectWithdrawal,
  };
};

export default useWithdraw;
