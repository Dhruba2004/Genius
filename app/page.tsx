'use client';

import { ArrowRight, Sparkles, Brain, Zap, Clock, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Header from './_components/Header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Writing",
      description: "Create compelling content with state-of-the-art AI technology"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate content in seconds, not hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Create content whenever inspiration strikes"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Smart Templates",
      description: "Pre-built templates for various content types"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header/>
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className={cn(
          "transform transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-violet-600/10 text-violet-600">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>AI-Powered Content Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]">
            Generate Amazing Content
            <br />
            with AI Intelligence
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your ideas into engaging content using our advanced AI technology.
            Write blogs, social media posts, and more in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-violet-600 text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                "opacity-0 translate-y-10",
                isVisible && "animate-[slideUp_0.5s_ease-out_forwards]"
              )}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}