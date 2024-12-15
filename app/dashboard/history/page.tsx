"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";

export interface HISTORY{
  id:Number,
  formData:string,
  aiResponse:string,
  templateSlug:string,
  createdAt:Date
  createdBy:string
}
const History = () => {
  const [history, setHistory] = React.useState<any[]>([]);

  const fetchDbRecords = async () => {
    const result = await db.select().from(AIOutput);
    console.log(result);

    setHistory(result);
  };

  useEffect(() => {
    fetchDbRecords();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg border p-3">
      <div className="bg-white">
        <h1 className="text-2xl font-bold">History</h1>
        <h2>Search Your Previously AI Generated Content</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px] font-bold">Template</TableHead>
            <TableHead className="font-bold w-[300px]">AI Response</TableHead>
            <TableHead className="font-bold">Timestamp</TableHead>

            <TableHead className="font-bold">Words</TableHead>

            <TableHead className="font-bold">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
  {history.map((record, index) => {
    const templateDetails = Templates.find((template) => template.slug === record.templateSlug);
    return (
      <TableRow key={index}>
        <TableCell className="flex items-center gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              {templateDetails?.icon && (
                <Image
                  src={templateDetails.icon}
                  alt={templateDetails.name || "Template Icon"}
                  width={24}
                  height={24}
                />
              )}
              <span className="font-medium text-lg hover:underline">
                {templateDetails?.name || "Unknown Template"}
              </span>
            </div>
        </TableCell>
        <TableCell>
          {record.aiResponse?.split(" ").slice(0, 50).join(" ")}
          {record.aiResponse?.split(" ").length > 50 ? "..." : ""}
        </TableCell>
        <TableCell>{record.createdAt}</TableCell>
        <TableCell>{record.aiResponse?.split(" ").length || 0}</TableCell>
        <TableCell>
          <Button
            className="bg-violet-600 hover:bg-violet-700 text-white"
            onClick={() => navigator.clipboard.writeText(record.aiResponse)}
          >
            Copy
          </Button>
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

        {/* <TableBody>
          {history.map((record, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2">
                {record.templateSlug}
              </TableCell>
              <TableCell>
                {record.aiResponse?.split(" ").slice(0, 50).join(" ")}
                {record.aiResponse?.split(" ").length > 50 ? "..." : ""}
              </TableCell>
              <TableCell>{record.createdAt}</TableCell>
              <TableCell>{record.aiResponse?.split(" ").length || 0}</TableCell>
              <TableCell>
                <Button
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                  onClick={() =>
                    navigator.clipboard.writeText(record.aiResponse)
                  }
                >
                  Copy
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </div>
  );
};

export default History;
