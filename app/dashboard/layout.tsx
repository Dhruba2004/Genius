import { UserButton } from "@clerk/nextjs";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 fixed hidden md:block">
        <Sidenav />
      </div>
      <div className="md:ml-64">
        {children}
        </div>
    </div>
  );
}
