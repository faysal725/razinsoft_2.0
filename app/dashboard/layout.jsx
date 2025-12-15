'use client'

import Navbar from "@/components/Navbar/Navbar";
// 🎯 FIX: Change the import path from "next/router" to "next/navigation"
import { useRouter } from "next/navigation"; 
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardLayout({ children }) {

    const { authenticated } = useSelector((state) => state.auth); 
    const router = useRouter();

    useEffect(() => {
        // This runs AFTER the client JS loads and Redux state is checked.
        if (authenticated === false) {
            // Optional: Add a query parameter to tell the login page where to redirect back to
            router.push('/login?from=' + window.location.pathname); 
        }
    }, [authenticated, router]);

    if (!authenticated) {
        // Show a loading screen while the state is confirmed or redirection happens
        return <div>Loading session...</div>;
    }

  
  return (
    <div className="relative">
        <Navbar />

        <main className="min-h-[90vh]">
            protected
            {children}
        </main>


        <footer>
            footer
        </footer>
    </div>
  );
}