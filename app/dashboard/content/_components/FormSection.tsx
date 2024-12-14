"use client";
import React from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  useFormInput: any;
}

function FormSection({ selectedTemplate,useFormInput }: PROPS) {
  const [formData, setFormData] = React.useState<any>();
  
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    useFormInput(formData);
  };
  return (
    <div className="p-5 shadow-md border rounded-md bg-white mt-[5rem]">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} width={70} height={70} alt="logo" />
      <h2 className="font-bold text-violet-600 text-2xl mb-2">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6">
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={item.field}
            >
              {item.label}
            </label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button
        onClick={onSubmit}
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 w-full text-white"
        >
          Generate
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
