"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <span className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Projects, Content, & Goals. Simplified.
      </span>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Dotion is the smart workspace for productive teams.
        <br />
        It helps you organize your notes, tasks, and docs.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-10 w-28 rounded" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Dotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
