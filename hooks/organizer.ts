import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveOrganizer, updateOrganizerCount, updateOrganizerPagination, updateOrganizers } from "@/redux/slices/organizerslice";
import { resetState } from "@/redux/slices/userslice";
import { toast } from "./use-toast";

const useOrganizer = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);
  const [oneLoading, setOneLoading] = useState(false);


  const addOrganizer = async ({
    username,
    organization_name,
    first_name,
    last_name,
    email,
    phone_number,
    address,
    city,
    state,
    zipcode,
    country,
    password,
    password_confirmation,
    mobile_verification,
    two_factor_auth,
    kyc_verification,
  }: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/users`,
        {
          username,
          organization_name,
          first_name,
          last_name,
          email,
          phone_number,
          address,
          city,
          state,
          zipcode,
          country,
          password,
          password_confirmation,
          mobile_verification,
          two_factor_auth,
          kyc_verification,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      toast({
        variant: "default",
        description:'Organizer Added Successfully', 
      })
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

  const updateOrganizer = async ({
    userId,
    username,
    organization_name,
    first_name,
    last_name,
    email,
    phone_number,
    address,
    city,
    state,
    zipcode,
    country,
    mobile_verification,
    two_factor_auth,
    kyc_verification,
  }: any) => {
    setLoading(true);
  
    const payload = {
      username,
      organization_name,
      first_name,
      last_name,
      email,
      phone_number,
      address,
      city,
      state,
      zipcode,
      country,
      mobile_verification,
      two_factor_auth,
      kyc_verification,
    };
  
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== "")
    );
  
    try {
      const response = await axios.put(
        `${base_url}/users/${userId}`,
        filteredPayload,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      toast({
        variant: "default",
        description: "Update Successful",
      });
    } catch (error: any) {
      if (error.response?.data?.message === "Unauthenticated.") {
        dispatch(resetState());
      } else {
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
  

  const getOrganizer = async (filter?: string, search?: string, page: number = 1) => {
    setLoading(true);
    try {
      const endpoint = `${base_url}/users${
        filter || search || page
          ? "?" +
            [
              filter ? `filter=${filter}` : null,
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
      
      dispatch(updateOrganizers(response?.data?.data));
     const pagination = response.data.meta;
     
      dispatch(
       updateOrganizerPagination({
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

  const getOneOrganizer = async (userId: any) => {
    setOneLoading(true);
    try {     
      const response = await axios.get(`${base_url}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      dispatch(updateActiveOrganizer(response?.data?.data));
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
      setOneLoading(false);
    }
  };

  const addBalance = async (userId: any, amount: any, remark: any) => {
    setLoading(true);
    try {     
      const response = await axios.post(`${base_url}/users/${userId}/add-balance`,{
        amount: amount,
        remark: remark,
      }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      // dispatch(updateActiveOrganizer(response?.data?.data));
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

  const subtractBalance = async (userId: any, amount: any, remark: any) => {
    setLoading(true);
    try {     
      const response = await axios.post(`${base_url}/users/${userId}/subtract-balance`,{
        amount: amount,
        remark: remark,
      }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      // dispatch(updateActiveOrganizer(response?.data?.data));
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

  const toggleFeature = async (organizerId: number) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${base_url}/user/${organizerId}/toggle-feature`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      // await getOrganizer();
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

  const toggleRestriction = async (organizerId: number) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${base_url}/user/${organizerId}/toggle-activity`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      // await getOrganizer();
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

  const getOneWithdrawalCount = async (userId: any) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${base_url}/users/${userId}/withdrawals/get-withdrawal-counts`,
        
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
            
      dispatch(updateOrganizerCount(response.data))
      
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
    addOrganizer,
    getOrganizer,
    toggleFeature,
    loading,
    toggleRestriction,
    getOneOrganizer,
    updateOrganizer,
    oneLoading,
    addBalance, 
    subtractBalance,
    getOneWithdrawalCount
  };
};

export default useOrganizer;
