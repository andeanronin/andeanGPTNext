"use client";

import { Bitcount_Prop_Single_Ink } from "next/font/google";
import { Button } from "@/components/ui/button";
// import { Button as NeoButton } from "@/components/neobrutalism/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import NeoDropdownMenuDemo from "@/components/neobrutalism/dropdown-menu";
import { ThemeDropdown } from "@/components/theme-dropdown";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useTheme } from "@/components/theme-provider";

import { FloatingNavDemo } from "../hello/floating-navbar";
// import { NeobrutalismScope } from "@/components/neobrutalism/scope";

const bitcountPropSingleInk = Bitcount_Prop_Single_Ink({
  weight: "400",
  subsets: ["latin"],
});

// Section component for better organization
function ComponentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-5xl px-6">
      <h2 className="text-xl font-medium text-foreground mb-6 border-b pb-2">
        {title}
      </h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

// Demo row component for labeled examples
function DemoRow({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <div>
          <h3 className="text-sm font-medium text-foreground">{label}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-3 items-center">{children}</div>
    </div>
  );
}

export default function Design() {
  const { isDark, setIsDark } = useTheme();
  return (
    <div className="flex min-h-screen flex-col items-center py-10 gap-12">
      <FloatingNavDemo></FloatingNavDemo>

      <div className="flex flex-col gap-12 w-full max-w-5xl px-6">
        {/* Header */}
        <header className="flex flex-col w-full gap-3 pb-4 border-b">
          <h1
            className={`text-4xl font-extralight text-foreground ${bitcountPropSingleInk.className}`}
          >
            design
          </h1>
          <div className="flex items-center gap-4">
            <ThemeDropdown />
            <div className="flex items-center gap-2">
              <Switch
                id="dark-mode-toggle"
                checked={isDark}
                onCheckedChange={setIsDark}
              />
              <label
                htmlFor="dark-mode-toggle"
                className="text-sm text-muted-foreground"
              >
                {isDark ? "Dark" : "Light"} Mode
              </label>
            </div>
          </div>
        </header>

        {/* Controls Section */}
        <ComponentSection title="Controls">
          <DemoRow label="Slider" description="Adjustable value control">
            <div className="w-full max-w-md">
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
          </DemoRow>
        </ComponentSection>

        {/* Standard Buttons */}
        <ComponentSection title="Buttons">
          <DemoRow label="Variants" description="Different button styles">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </DemoRow>

          <DemoRow label="Sizes" description="Different button sizes">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </DemoRow>
        </ComponentSection>

        {/* Bubbly Buttons */}
        <ComponentSection title="Bubbly Buttons">
          <DemoRow
            label="Variants"
            description="Bubbly style with playful aesthetics"
          >
            <Button variant="default-bubbly" size="default-bubbly">
              Default
            </Button>
            <Button variant="secondary-bubbly" size="default-bubbly">
              Secondary
            </Button>
            <Button variant="destructive-bubbly" size="default-bubbly">
              Destructive
            </Button>
            <Button variant="outline-bubbly" size="default-bubbly">
              Outline
            </Button>
            <Button variant="ghost-bubbly" size="default-bubbly">
              Ghost
            </Button>
            <Button variant="link-bubbly" size="default-bubbly">
              Link
            </Button>
          </DemoRow>

          <DemoRow label="Sizes" description="Bubbly button sizes">
            <Button variant="default-bubbly" size="sm-bubbly">
              Small
            </Button>
            <Button variant="default-bubbly" size="default-bubbly">
              Default
            </Button>
            <Button variant="default-bubbly" size="lg-bubbly">
              Large
            </Button>
          </DemoRow>
        </ComponentSection>

        {/* Haptic Buttons */}
        <ComponentSection title="Haptic Buttons">
          <DemoRow
            label="Standard Haptic"
            description="Buttons with tactile feedback"
          >
            <Button variant="hapticDefault">Primary</Button>
            <Button variant="hapticSecondary">Secondary</Button>
            <Button variant="hapticDestructive">Destructive</Button>
            <Button variant="hapticOutline">Outline</Button>
          </DemoRow>

          <DemoRow
            label="Haptic Bubbly"
            description="Combined haptic and bubbly styles"
          >
            <Button variant="hapticBubblyDefault" size="haptic-bubbly">
              Primary
            </Button>
            <Button variant="hapticBubblySecondary" size="haptic-bubbly">
              Secondary
            </Button>
            <Button variant="hapticBubblyDestructive" size="haptic-bubbly">
              Destructive
            </Button>
            <Button variant="hapticBubblyOutline" size="haptic-bubbly">
              Outline
            </Button>
          </DemoRow>
        </ComponentSection>

        {/* Dropdown Menus */}
        <ComponentSection title="Dropdown Menus">
          <DemoRow label="Standard" description="Classic dropdown menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DemoRow>

          <DemoRow label="Bubbly" description="Dropdown with bubbly styling">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline-bubbly" size="default-bubbly">
                  Open Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent bubbly>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator bubbly />
                <DropdownMenuItem bubbly>Profile</DropdownMenuItem>
                <DropdownMenuItem bubbly>Settings</DropdownMenuItem>
                <DropdownMenuItem bubbly>Team</DropdownMenuItem>
                <DropdownMenuSeparator bubbly />
                <DropdownMenuItem bubbly>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DemoRow>
        </ComponentSection>

        {/* Textarea */}
        <ComponentSection title="Text Areas">
          <DemoRow label="Standard" description="Classic text input area">
            <div className="w-full max-w-md">
              <Textarea placeholder="Enter your text here..." />
            </div>
          </DemoRow>

          <DemoRow label="Bubbly" description="Text area with bubbly styling">
            <div className="w-full max-w-md">
              <Textarea bubbly placeholder="Enter your text here..." />
            </div>
          </DemoRow>
        </ComponentSection>

        {/* Card */}
        <ComponentSection title="Cards">
          <DemoRow
            label="Card Component"
            description="Versatile container with theme adaptation"
          >
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a sample card component that adapts to the selected
                  theme.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards are versatile containers that can hold any content. They
                  automatically adjust their colors based on the active theme.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="hapticBubblyOutline">Cancel</Button>
                <Button variant="hapticBubblyDefault">Save Changes</Button>
              </CardFooter>
            </Card>
          </DemoRow>
        </ComponentSection>
      </div>
    </div>
  );
}
