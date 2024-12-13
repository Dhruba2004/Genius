"use client"
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function Sidenav() {
  const menu = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  const path = usePathname()
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src={"/logo.png"} height={50} width={50} alt="logo" />
      </div>
      <div className="mt-5">
        {menu.map((item, index) => (
          <div key={index} className={`flex gap-2 mb-2 p-3 hover:text-white hover:bg-violet-600 cursor-pointer rounded-lg items-center ${path == item.path && 'bg-violet-600 text-white'}`}>
            <item.icon className="h-6 w-6" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;
