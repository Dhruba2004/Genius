"use client";
import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

function OutputSection() {
  const editorRef:any = useRef(null)

  const copy =()=>{
    navigator.clipboard.writeText(editorRef.current.getInstance().getMarkdown());
  }
  const handleChange = (content: string) => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };
  return (
    <div className=" bg-white mt-[5rem] shadow-lg rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={copy} className="gap-2 bg-violet-600 hover:bg-violet-700">
          {" "}
          <Copy className="w-4 h-4"/>
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here"
        height="600px"
        initialEditType="wywsiwyg"
        useCommandShortcut={true}
        onChange={handleChange}
      />
    </div>
  );
}

export default OutputSection;
