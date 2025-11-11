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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Home,
  User,
  FileText,
  BrickWall,
  Zap,
  Lamp,
  Component,
  Wand,
  ChevronRight,
} from "lucide-react";
import { Layers } from "./animate-ui/icons/layers";
import { LayoutDashboard } from "./animate-ui/icons/layout-dashboard";

// Menu items.
const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Hello", url: "/hello", icon: User },
  { title: "Neobrutalism", url: "/neobrutalism", icon: BrickWall },
  {
    title: "Design",
    url: "/design",
    icon: Layers,
    subItems: [
      { title: "Components", url: "/design", icon: LayoutDashboard },
      { title: "Motion", url: "/design-motion", icon: Component },
      { title: "Animation", url: "/design-animation", icon: Wand },
      { title: "AnimateUI", url: "/animate-ui", icon: Wand },
    ],
  },
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
              {items.map((item) =>
                item.subItems ? (
                  // if the item has subitems, then display sub-items inside collapsible.
                  <Collapsible
                    key={item.title}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton bubbly tooltip={item.title}>
                          {item.icon === Layers ? (
                            <Layers animateOnHover className="size-4" />
                          ) : item.icon === LayoutDashboard ? (
                            <LayoutDashboard
                              animateOnHover
                              className="size-4"
                            />
                          ) : (
                            <item.icon className="size-4" />
                          )}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton bubbly asChild>
                                <Link href={subItem.url}>
                                  {subItem.icon === Layers ? (
                                    <Layers animateOnHover className="size-4" />
                                  ) : subItem.icon === LayoutDashboard ? (
                                    <LayoutDashboard
                                      animateOnHover
                                      className="size-4"
                                    />
                                  ) : (
                                    <subItem.icon className="size-4" />
                                  )}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  // render sidebarmenu item directly if no sub-items
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton bubbly asChild tooltip={item.title}>
                      <Link href={item.url}>
                        {item.icon === Layers ? (
                          <Layers animateOnHover className="size-4" />
                        ) : item.icon === LayoutDashboard ? (
                          <LayoutDashboard animateOnHover className="size-4" />
                        ) : (
                          <item.icon className="size-4" />
                        )}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border bg-sidebar">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton bubbly asChild>
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
