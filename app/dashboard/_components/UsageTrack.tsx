"use client"
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { HISTORY } from "../history/page";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

function UsageTrack() {
  const {totalUsage, setTotalUsage} = useContext<any>(TotalUsageContext);
  const {updateCreditUsage,setUpdateCreditUsage}= useContext(UpdateCreditUsageContext)
  
  const {user} = useUser();

  useEffect(()=>{
    user && GetData()
  },[user])

  useEffect(()=>{
   user && GetData()
  },[updateCreditUsage])
  
  const GetData = async()=>{
    // @ts-ignore
    const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
    GetTotalUsage(result)
  }

  const GetTotalUsage =(result:HISTORY[])=>{
    let total:number = 0;
    result.forEach(element =>{
      total = total + Number(element.aiResponse?.split(" ").length || 0)
    })
    setTotalUsage(total)
    console.log(total)
  }


  return (
    <div className="m-5">
      <div className="bg-violet-600 p-3 rounded-lg text-white">
        <h2>Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-md mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: totalUsage/10000*100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 credit used</h2>
      </div>
      <Link href={'/dashboard/billing'}>
      <Button className="w-full my-3 text-violet-600" variant={"outline"}>Upgrade</Button>
      </Link>
      
    </div>
  );
}

export default UsageTrack;
