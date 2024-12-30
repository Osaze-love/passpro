"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/login";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useLogin();

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
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className=" py-[25px] focus-visible:ring-0 focus-visible:ring-transparent placeholder:text-[#8F8F8F] placeholder:text-[14px] px-[20px] shadow-sm"
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
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
              onClick={async() => {
                await login(email, password)
                // router.push("/dashboard");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="hidden lg:block h-[100%] w-[100%] lg:w-[80%]">
          <img
            src={
              "/icons/Intersect.svg"
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
