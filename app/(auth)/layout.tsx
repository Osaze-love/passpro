"use client"
import { Toaster } from "@/components/ui/toaster";
import { RootState } from "@/redux/store";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useSelector((state: RootState) => state.user.userToken);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);
  return (
      <div className={raleway.className}>
      {children}
            <Toaster />
      
      </div>
  );
}
