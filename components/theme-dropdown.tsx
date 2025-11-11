"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "default", label: "Default", color: "bg-gray-900" },
    { value: "amber", label: "Amber", color: "bg-amber-200" },
    { value: "emerald", label: "Emerald", color: "bg-emerald-200" },
    { value: "blue", label: "Blue", color: "bg-blue-200" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="hapticBubblyOutline" size={"haptic-bubbly"}>
          {themes.find((t) => t.value === theme)?.label || "Default"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent bubbly>
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator bubbly />
        {themes.map((t) => (
          <DropdownMenuItem
            bubbly
            key={t.value}
            onClick={() =>
              setTheme(t.value as "default" | "amber" | "emerald" | "blue")
            }
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full ${t.color} border border-gray-300`}
              />
              <span>{t.label}</span>
              {theme === t.value && <span className="ml-auto">✓</span>}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
