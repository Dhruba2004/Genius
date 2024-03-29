import React from "react";
import {
  ArrowRight,
  Code2,
  ImageDown,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-700",
      bgColor: "bg-violet-500/10",
      href: "/conversation",
    },
    {
      label: "Image Generation",
      icon: ImageDown,
      color: "text-pink-700",
      bgColor: "bg-pink-500/10",
      href: "/image",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-500/10",
      href: "/video",
    },
    {
      label: "Music Generation",
      icon: Music,
      color: "text-emerald-700",
      bgColor: "bg-emerald-500/10",
      href: "/music",
    },
    {
      label: "Code Generation",
      icon: Code2,
      color: "text-green-700",
      bgColor: "bg-green-500/10",
      href: "/code",
    },
  ];
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl md:text-2xl font-bold">
          Explore the power of AI
        </h2>

        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Expereince the power
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8 ", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            
            <ArrowRight className="w-5 h-5"/>
           
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
