"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div
      className="h-screen px-[20px] md:px-[70px] lg:px-[100px] py-[50px]"
      style={{
        background: `linear-gradient(to right, #fdf7f4 75%, #FC6435 25%)`,
      }}
    >
      <Image
        src="/logo/logored.svg"
        height={47}
        width={202}
        alt="passprologo"
      />
      <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center space-x-0 lg:space-x-[100px]">
        <div>
          <h3 className="text-[32px] font-bold mb-[59px] text-center">
            Welcome Back, Admin
          </h3>
          <div className="space-y-[20px] w-full">
            <Input
              id="organizationName"
              placeholder="Email"
              className=" py-[25px] focus-visible:ring-0 focus-visible:ring-transparent placeholder:text-[#8F8F8F] placeholder:text-[14px] px-[20px] shadow-sm"
            />
            <Input
              id="organizationName"
              placeholder="Password"
              className=" py-[25px] focus-visible:ring-0 focus-visible:ring-transparent placeholder:text-[#8F8F8F] placeholder:text-[14px] px-[20px] shadow-sm"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
              <p className="text-[#FF8458] cursor-pointer transition-all active:scale-95">
                Forgot Password
              </p>
            </div>
            <Button
              type="submit"
              className="w-full py-[24px] shadow-sm font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="hidden lg:block h-[100%] w-[100%] lg:w-[80%]">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/feec/15ec/5fd2c3c836c27474214870920ec016ee?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4dsXyd4okZ7yJ9tSVrAZ4Rh1~Cjpgi9QU13K7ec3CRmpMMQRBNWLiiZKs~iRs4OUKkQZohcBwykiXoWkvLIak6AM7IcuOgq3qJL63bGBuD98C49HLVd6u5LfD3un8v6eEafw6ifqM8vSaEm3OHJirTRyHbxDoRJvOuwOaQ19Njoi9XhKrVIHwpZnXdrzE29A5xXGRp1OV9qdrhHvBRUTxPfzr~Fbb7XrUHOsOEW2SrYR3Wft8wEa2KuQfF-Vv5vZfQZG65AWjPQpftTYzDQSrGJpM6Du1MrHSTUB7lUSSR9YEaoLklFyJNKsfyxRBUBO5YBTMkXTamF7nQzWtjn4A__"
            }
            className="h-full w-full rounded-md object-cover"
            alt="loginImage"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
