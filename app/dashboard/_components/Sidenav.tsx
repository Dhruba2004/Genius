"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";

function Sidenav() {
  const menu = [
    {
      name: "Home",
      icon: Home,
      path: "/",
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
  const path = usePathname();
  return (
    <div className="h-screen relative p-5 shadow-sm border justify-between bg-white">
      <div className="flex justify-center items-center">
        <Image src={"/logo.png"} height={50} width={50} alt="logo" />
      </div>
      <div className="mt-5">
        {menu.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:text-white hover:bg-violet-600 cursor-pointer rounded-lg items-center ${
              path == item.path && "bg-violet-600 text-white"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default Sidenav;
