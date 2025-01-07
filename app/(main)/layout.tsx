"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { RootState } from "@/redux/store";
import { Raleway } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.userToken);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  return (
    <body className={raleway.className}>
     <div className=" min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <div className="hidden md:flex sticky top-0 w-[278px]  h-screen  overflow-y-scroll scrollbar-hide">
          {/* <div className="overflow-y-scroll overflow-x-hidden h-full scrollbar-hide"> */}
          <Sidebar />
          {/* </div> */}
        </div>
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </div>  
    </body>
    
  );
};

export default MainLayout;
