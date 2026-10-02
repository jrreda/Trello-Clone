'use client'

import Navbar from "@/components/navbar";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="mx-auto px-4 py-6 sm:py-8 container">
        <div className="mb-6 sm:mb-8">
          <h1 className="mb-2 font-bold text-gray-900 text-2xl sm:text-3xl">
            Welcome back,{" "}
            {user?.firstName ?? user?.emailAddresses[0].emailAddress}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your boards today.
          </p>
        </div>
      </main>
    </div>
  );
}
