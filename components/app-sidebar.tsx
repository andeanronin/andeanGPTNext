"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  User,
  FileText,
  BrickWall,
  DessertIcon,
  Zap,
  Lamp,
} from "lucide-react";

// Menu items.
const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Hello", url: "/hello", icon: User },
  { title: "Neobrutalism", url: "/neobrutalism", icon: BrickWall },
  { title: "Design", url: "/design", icon: DessertIcon },
  { title: "Chat FastApi", url: "/chat-fast", icon: Zap },
  { title: "Chat SKD", url: "/chat-sdk", icon: Lamp },
  { title: "Documents", url: "#", icon: FileText },
];

export function AppSidebar() {
  const { open, setOpen, isMobile } = useSidebar();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile && !open) {
      setIsHovering(true);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && isHovering) {
      setIsHovering(false);
      setOpen(false);
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarHeader className="border-b border-sidebar-border bg-sidebar">
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link href="/">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Home className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Andean Ronin</span>
                <span className="truncate text-xs">Demo App</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border bg-sidebar">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <User className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">User</span>
                  <span className="truncate text-xs">user@example.com</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
