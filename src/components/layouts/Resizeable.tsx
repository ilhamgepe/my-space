"use client";
import {
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@radix-ui/react-scroll-area";
import { PropsWithChildren, useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { Button, buttonVariants } from "../ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import { cn } from "@/lib/utils";
import Link from "next/link";
import UserButton from "../buttons/UserButton";
import { ThemeToggle } from "../toogles/ThemeToggle";
import Sidebar from "./Sidebar";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

const Resizeable = ({ children }: PropsWithChildren) => {
  const [navbarShow, setNavbarShow] = useState<boolean>(true);

  const handleNavbarShow = (show: boolean) => {
    setNavbarShow(show);
  };
  return (
    <ResizablePanelGroup direction="horizontal" autoSaveId="resizable">
      {navbarShow && (
        <>
          <ResizablePanel
            id="resizable-sidebar"
            key="resizable-sidebar"
            order={1}
            defaultSize={20}
            minSize={10}
            maxSize={20}
          >
            <ScrollArea className="rounded-md border p-4 h-svh">
              <ClerkLoading>
                <div className="flex items-center justify-between gap-2 w-full min-w-full mb-5">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className={`w-1/2 h-10`} />

                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
              </ClerkLoading>
              <ClerkLoaded>
                <div className="flex items-center justify-between gap-2 w-full mb-5">
                  <UserButton />
                  <Link
                    href="/dashboard"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "font-bold tracking-widest text-lg"
                    )}
                  >
                    My Space
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleNavbarShow(false)}
                  >
                    <BiChevronsLeft />
                  </Button>
                </div>
              </ClerkLoaded>
              <Sidebar />
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
        </>
      )}
      <ResizablePanel
        id="resizable-main-content"
        key="resizable-main-content"
        order={2}
        defaultSize={80}
      >
        <ScrollArea className="h-svh p-2">
          <ScrollAreaViewport>
            {!navbarShow && (
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleNavbarShow(true)}
                >
                  <BiChevronsRight />
                </Button>
                <div className="flex items-center gap-2">
                  <UserButton />
                  <ThemeToggle />
                </div>
              </div>
            )}
            {children}
          </ScrollAreaViewport>
          <ScrollBar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollBar>
          <ScrollBar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollBar>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Resizeable;
