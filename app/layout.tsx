import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Outfit} from "next/font/google";
import "./globals.css";

const outfit = Outfit({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Content Generator",
};

export default function RootLayout(
  {

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
