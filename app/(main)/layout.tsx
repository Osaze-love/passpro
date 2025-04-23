"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
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
    <div className={raleway.className}>
     <div className=" min-h-screen flex flex-col">
     <div className="flex">
  {/* Sidebar */}
  <div className="hidden md:flex sticky top-0 h-screen w-[240px] flex-shrink-0 overflow-y-scroll scrollbar-hide">
    <Sidebar />
  </div>

  {/* Main Content */}
  <div className="flex-grow w-full">
    <Navbar />
    {children}
    <Toaster />
  </div>
</div>

    </div>  
    </div>
    
  );
};

export default MainLayout;
