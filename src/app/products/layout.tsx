import React from "react";
import Navbar from "@/components/layouts/navbar/navbar";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 border-b bg-white md:h-[65px]">
        {" "}
        <Navbar />
      </div>

      {children}
    </div>
  );
}
