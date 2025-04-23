import { updateCountData, updateWithdrawals, updateWithdrawPagination } from "@/redux/slices/withdrawslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast"; // Assuming you use a toast library
import { resetState } from "@/redux/slices/userslice";

const useWithdraw = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getWithdrawals = async (search?: string, query?: string, page: number = 1) => {
    setLoading(true);
    try {
      const endpoint = `${base_url}/transactions${
        search || query || page
          ? "?" +
            [
              search ? `search=${search}` : null,
              query ? `query=${query}` : null,
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
      dispatch(updateWithdrawals(response?.data?.data));
     
      const pagination = response.data.meta;
      
       dispatch(
        updateWithdrawPagination({
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

  const approveWithdrawal = async (transactionId: any, transaction_reference: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/admin/approve/${transactionId}/withdrawal`,
        {
          transaction_reference: transaction_reference
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      // await axios.post(`${base_url}/transfer/callback?reference=${transaction_reference}`)

      toast({
        variant: "default",
        title: "Withdrawal Approved",
      });
      router.push('/withdrawals')

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

  const rejectWithdrawal = async (transactionId: any, remark: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/admin/reject/${transactionId}/withdrawal`,
        {
          remark: remark 
        },
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
      router.push('/withdrawals')
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

  const getWithdrawalCount = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${base_url}/admin/withdrawals/get-all-withdrawal-counts`,
        
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      
      dispatch(updateCountData(response.data))
      
      // router.push('/withdrawals')
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
    getWithdrawals,
    loading,
    approveWithdrawal,
    rejectWithdrawal,
    getWithdrawalCount,
  };
};

export default useWithdraw;
