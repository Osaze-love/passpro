import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default MainLayout;
