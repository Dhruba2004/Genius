import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="p-3 flex items-center shadow-lg justify-between">
     
        <div className="flex items-center gap-2">
          <Image src={"/logo.png"} height={30} width={30} alt="logo" />
          <h2 className="text-2xl font-bold cursor-pointer">Genius</h2>
        </div>
        <div>
          <Link href={"/dashboard"}>
            <Button className="bg-violet-600 text-white hover:bg-violet-700">
              Go to Dashboard
            </Button>
          </Link>
        </div>
    </div>
  );
}

export default Header;
