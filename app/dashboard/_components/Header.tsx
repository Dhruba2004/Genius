"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { AlignJustify,FileClock, Home, Settings, WalletCards } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
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
  const router = useRouter();
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center">
        <Button
          className="bg-violet-600 hover:bg-violet-700 text-white mb-4"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </div>
      <div className="mb-4 gap-3 flex items-center">
      <UserButton />
      <Sheet>
          <SheetTrigger className="lg:hidden sm:block">
            {" "}
            <AlignJustify height={30} width={30}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-7 justify-center items-center mt-[10rem]">
                  {menu.map((item, index) => (
                    <ul className="flex gap-5 items-center" key={index}>
                      <li className="">
                        <Link
                          className="text-3xl text-black dark:text-white  dark:hover:text-violet-700  hover:text-violet-700 transition-all"
                          href={item.path}
                        >
                          {item.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
       
      </div>
    </div>
  );
}

export default Header;
