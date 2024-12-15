"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Header() {
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
      <div className="mb-4">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
