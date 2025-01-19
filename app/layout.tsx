import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Passpro Admin",
  description: "List, manage and purchase event tickets seamlessly on PassPro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <ClientProvider>{children}
      <Toaster />
        </ClientProvider>
      </body>
    </html>
  );
}
