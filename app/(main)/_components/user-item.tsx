"use client";

import { ChevronsLeftRight } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, SignUpButton, useUser } from "@clerk/clerk-react";

export const UserItem = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s Dotion
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 bg-secondary shadow-xl"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-3 py-2">
          <p className="text-xs leading-none text-muted-foreground px-2">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2 cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-md px-3 py-1">
            <Avatar className="h-7 w-7 rounded-md">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.fullName}&apos;s Dotion
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Free Plan - 1 member
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <SignUpButton>
            <span className="cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-md w-full px-2 py-1.5 text-xs text-neutral-600 dark:text-neutral-400">
              Add another account
            </span>
          </SignUpButton> */}
          <SignOutButton>
            <span className="cursor-pointer dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-md w-full px-2 py-1.5 text-xs text-neutral-600 dark:text-neutral-400">
              Log out
            </span>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
