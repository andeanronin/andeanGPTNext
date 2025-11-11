"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);
  const { theme, isDark } = useTheme();

  const toggleSwitch = () => setIsOn(!isOn);

  // Define theme-specific colors
  const themeColors = {
    default: isDark ? "#9911ff" : "#7c3aed",
    amber: isDark ? "#f59e0b" : "#d97706",
    emerald: isDark ? "#10b981" : "#059669",
    blue: isDark ? "#3b82f6" : "#2563eb",
  };

  const handleColor = themeColors[theme as keyof typeof themeColors];

  // Helper function to lighten or darken a color
  const adjustColor = (color: string, percent: number): string => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
    return (
      "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)
    );
  };

  const containerBgColor = isDark
    ? adjustColor(handleColor, -30) // darker shade in dark mode
    : adjustColor(handleColor, 40); // lighter shade in light mode

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        backgroundColor: containerBgColor,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={{ ...handle, backgroundColor: handleColor }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  width: 100,
  height: 50,
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 10,
};

const handle = {
  width: 30,
  height: 30,
  backgroundColor: "#9911ff",
  borderRadius: "50%",
};
