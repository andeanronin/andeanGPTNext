"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, MessageCircle, User } from "lucide-react";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Hello",
      link: "/hello",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Chat",
      link: "/chat-fast",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Design",
      link: "/design",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
