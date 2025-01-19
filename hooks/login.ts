
  import { AppDispatch, RootState } from "@/redux/store";
  import axios from "axios";
  import { useRouter } from "next/navigation";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { resetState, updateUserDetail, updateUserToken } from "@/redux/slices/userslice";
import { toast } from "./use-toast";
// import { updateUser } from "@/redux/slices/adminslice";
  
  const useLogin = () => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL_LOGIN;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const {userToken, usersDetail} = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
  
    const [loading, setLoading] = useState(false);
    
    const login = async (email:string, password:string, remember: boolean ) => {
      setLoading(true);
      try {  
        const response = await axios.post(`${base_url}/admin/login`, {
          identifier: email,
          password: password,
          remember_me: remember,
      });    
      dispatch(updateUserDetail(response?.data?.user))
      dispatch(updateUserToken(response?.data?.token))
      
      toast({
        description: 'Login Successful', 
      })
      router.push('/dashboard')      
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.response?.data?.message || 'An unexpected error occurred.', 
        })
       
      } finally {
        setLoading(false);
      }
    };

    const updateProfile = async (first_name?:string, last_name?:string, username?: string, email?: string, phone_number?: string ) => {
      setLoading(true);
      try {  
        const response = await axios.put(`${BASE_URL}/profile/personal-info`,  {
          "first_name": first_name,
          "last_name": last_name,
          "username": username,
          "email": email,
          "phone_number": phone_number,
        }, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });  
          
      dispatch(updateUserDetail(response?.data?.data))
      // dispatch(updateUserToken(response?.data?.token))
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

    const updateContact = async (address?:string, city?:string, state?: string, zipcode?: string, country?: string ) => {
      setLoading(true);
      try {  
        const response = await axios.put(`${BASE_URL}/profile/contact-info`,  
          {
            "address": address,
            "city": city,
            "state": state,
            "zipcode": zipcode,
            "country": country
          }
        , {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });  
          
      dispatch(updateUserDetail(response?.data?.data))
      // dispatch(updateUserToken(response?.data?.token))
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
     login,
     loading, 
     updateProfile, 
     updateContact
    };
  };
  
  export default useLogin;
  