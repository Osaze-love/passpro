
  import { AppDispatch, RootState } from "@/redux/store";
  import axios from "axios";
  import { useRouter } from "next/navigation";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { toast } from "./use-toast";
// import { updateUser } from "@/redux/slices/adminslice";
  
  const useLogin = () => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL_LOGIN;
    // const broadcast = useSelector((state: RootState) => state.broadcast);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
  
    const [loading, setLoading] = useState(false);
    
    const login = async (email?:string, password?:string ) => {
      setLoading(true);
      try {
        const response = await axios.post(`${base_url}/login`, {
          "email": email,
          "password": password
      });
    //   dispatch(updateUser(response?.data?.response?.admin));
      } catch (error: any) {
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Something went wrong.",
        //   description: error.response?.data?.message || 'An unexpected error occurred.', 
        // })
        // console.error(error);
       
      } finally {
        setLoading(false);
      }
    };
   
 
  

    return {
     login,
     loading, 
    };
  };
  
  export default useLogin;
  