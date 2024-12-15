"use client";
import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface PROPS {
  aiOutput: any;
}
function OutputSection({aiOutput}:PROPS) {
  const editorRef:any = useRef(null)

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance()
    editorInstance.setMarkdown(aiOutput)
  },[aiOutput])

  
  
  const copy =()=>{
    navigator.clipboard.writeText(aiOutput);
    toast("Copied to clipboard")
  }
  const handleChange = (content: string) => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };
  return (
    <div className=" bg-white mb-[15rem] shadow-lg rounded-lg border">
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
