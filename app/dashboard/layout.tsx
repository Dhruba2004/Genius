"use client";
import Sidenav from "./_components/Sidenav";
import { useState } from "react";
import Header from "./_components/Header";
import { useRouter } from "next/navigation";
import { TotalUsageContext } from "../(context)/TotalUsageContext";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const router = useRouter();
  return (
    <TotalUsageContext value={{totalUsage,setTotalUsage}}>
     
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 fixed hidden md:block">
        <Sidenav />
      </div>
      <div className="md:ml-64 bg-white p-4">
        <Header />

        {children}
      </div>
    </div>
    </TotalUsageContext>
  );
}
