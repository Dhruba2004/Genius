import Header from "./_components/Header";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen">
      
      <Header />
      <div className="relative flex flex-col gap-5 w-full items-center justify-center overflow-hidden rounded-lg g-background p-4 mt-[12rem]">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
           AI Content Generator
        </span>
        <h2 className="text-gray-500 max-w-3xl text-center text-xl">
          Revolutionize your content creation with our AI-powered app,
          delivering engaging and high-quality text in seconds.
        </h2>
        <Link href="/dashboard"><Button className="bg-violet-600 text-white hover:bg-violet-700 max-w-5xl">Get started</Button></Link>
      </div>
    </section>
  );
}
