import React from "react";
import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";

export default function LoggedInLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50 border-b bg-white md:h-[65px]"> <Navbar /></div>

            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
