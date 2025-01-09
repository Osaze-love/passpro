import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveOrganizer, updateOrganizers } from "@/redux/slices/organizerslice";

const useOrganizer = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userToken } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

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
      console.log(response);
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error.response?.data || error.message);
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
    // setLoading(true);
    // try {
    //   const response = await axios.put(
    //     `${base_url}/users/${userId}`,
    //     {
    //       username,
    //       organization_name,
    //       first_name,
    //       last_name,
    //       email,
    //       phone_number,
    //       address,
    //       city,
    //       state,
    //       zipcode,
    //       country,
    //       mobile_verification,
    //       two_factor_auth,
    //       kyc_verification,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${userToken}`,
    //       },
    //     }
    //   );
    //   console.log(response);
    // } catch (error: any) {
    //   if (error.response?.status === 403) {
    //     router.push("/login");
    //   } else {
    //     console.error(error.response?.data || error.message);
    //   }
    // } finally {
    //   setLoading(false);
    // }
    console.log({
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
    });
    
  };

  const getOrganizer = async (filter?: string) => {
    setLoading(true);
    try {
      const endpoint = filter
        ? `${base_url}/users?filter=${filter}`
        : `${base_url}/users`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      dispatch(updateOrganizers(response?.data?.data));
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error.response?.data || error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getOneOrganizer = async (userId: any) => {
    setLoading(true);
    try {     
      const response = await axios.get(`${base_url}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response);
      
      dispatch(updateActiveOrganizer(response?.data?.data));
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error.response?.data || error.message);
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
      console.log(response);
      // await getOrganizer();
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error.response?.data || error.message);
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
      console.log(response);
      // await getOrganizer();
    } catch (error: any) {
      if (error.response?.status === 403) {
        router.push("/login");
      } else {
        console.error(error.response?.data || error.message);
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
    updateOrganizer
  };
};

export default useOrganizer;
