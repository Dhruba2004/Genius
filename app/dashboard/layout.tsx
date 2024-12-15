"use client";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 fixed hidden md:block">
        <Sidenav />
      </div>
      <div className="md:ml-64 bg-white p-4">
        <Header />

        {children}
      </div>
    </div>
  );
}
