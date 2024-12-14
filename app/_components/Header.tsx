import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="container mx-auto shadow-sm border border-b">
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-4">
          <Image src={"/logo.png"} height={50} width={50} alt="logo" />
        </div>
        <div>
          <Link href={"/dashboard"}>
            <Button className="bg-violet-600 text-white hover:bg-violet-700">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
