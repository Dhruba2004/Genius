"use client";
import React, { useState, use, useContext } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { toast } from "sonner";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

interface PROPS {
  params: Promise<{
    templateSlug: string;
  }>;
}

export default function CreateNewContent(props: PROPS) {
  const router = useRouter()
  
  const {totalUsage}= useContext(TotalUsageContext)
  const params = use(props.params);

  const { user } = useUser();
  const [aiOutput, setAiOutput] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == params["templateSlug"]
  );

  const saveInDB = async (formData: any, slug: any, aiOutput: any) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
  };
  const GenerateAIContent = async (formData: any) => {
    if(totalUsage>10000){
      toast("You have reached your maximum usage limit")
      router.push("/dashboard/billing")

    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const FinalPrompt = JSON.stringify(formData) + " ," + selectedPrompt;
    try {
      const result = await chatSession.sendMessage(FinalPrompt);
      setAiOutput(result?.response.text());

      if (result) {
        toast("Content Generated Successfully");
      }
      await saveInDB(formData, selectedTemplate?.slug, result?.response.text());

      console.log(result?.response.text());
    } catch (error) {
      console.log(error);
      toast("Failed to generate");
    }

    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 bg-white">
      <FormSection
        selectedTemplate={selectedTemplate}
        useFormInput={(v: any) => GenerateAIContent(v)}
        loading={loading}
      />
      <div className="col-span-2">
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
}
