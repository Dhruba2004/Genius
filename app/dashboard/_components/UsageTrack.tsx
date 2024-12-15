import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function UsageTrack() {
  return (
    <div className="m-5">
      <div className="bg-violet-600 p-3 rounded-lg text-white">
        <h2>Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-md mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: "30%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">350/10,000 credit used</h2>
      </div>
      <Link href={'/dashboard/billing'}>
      <Button className="w-full my-3 text-violet-600" variant={"outline"}>Upgrade</Button>
      </Link>
      
    </div>
  );
}

export default UsageTrack;
