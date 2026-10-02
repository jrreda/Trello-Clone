"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, user } = useUser();

  return (
    <header className="top-0 z-50 sticky bg-white/80 backdrop-blur-sm border-b">
      <div className="flex justify-between items-center mx-auto px-4 py-3 sm:py-4 container">
        <div className="flex items-center space-x-2">
          <Image
            src="/trello-icon.svg"
            alt="Trello Icon"
            width={24}
            height={24}
            className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600"
          />
          <span className="font-bold text-gray-900 text-xl sm:text-2xl">
            Trello Clone
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {isSignedIn ? (
            <div className="flex sm:flex-row flex-col items-end sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
              <span className="hidden sm:block text-gray-600 text-xs sm:text-sm">
                Welcome, {user.firstName ?? user.emailAddresses[0].emailAddress}
              </span>
              <Link href="/dashboard">
                <Button size="sm" className="text-xs sm:text-sm">
                  Go to Dashboard <ArrowRight />
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <SignInButton>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button size="sm" className="text-xs sm:text-sm">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
