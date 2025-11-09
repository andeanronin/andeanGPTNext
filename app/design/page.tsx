import { Bitcount_Prop_Single_Ink } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Button as NeoButton } from "@/components/neobrutalism/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NeoDropdownMenuDemo from "@/components/neobrutalism/dropdown-menu";

import { NeobrutalismScope } from "@/components/neobrutalism/scope";

const bitcountPropSingleInk = Bitcount_Prop_Single_Ink({
  weight: "400",
  subsets: ["latin"],
});

export default function Design() {
  return (
    <div className="flex justify-left min-h-screen py-8 px-10">
      <div className="flex flex-col gap-6">
        <h1
          className={`text-3xl font-extralight text-black ${bitcountPropSingleInk.className}`}
        >
          design
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>

          <h2 className="text-xl font-light pt-4">Bubbly Variants</h2>
          <div className="flex gap-4">
            <Button variant="default-bubbly" size="default-bubbly">
              Default Bubbly
            </Button>
            <Button variant="secondary-bubbly" size="default-bubbly">
              Secondary Bubbly
            </Button>
            <Button variant="destructive-bubbly" size="default-bubbly">
              Destructive Bubbly
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="outline-bubbly" size="default-bubbly">
              Outline Bubbly
            </Button>
            <Button variant="ghost-bubbly" size="default-bubbly">
              Ghost Bubbly
            </Button>
            <Button variant="link-bubbly" size="default-bubbly">
              Link Bubbly
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="default-bubbly" size="sm-bubbly">
              Small
            </Button>
            <Button variant="default-bubbly" size="default-bubbly">
              Default
            </Button>
            <Button variant="default-bubbly" size="lg-bubbly">
              Large
            </Button>
          </div>

          {/* Neobrutalism Styles */}
          <h2 className="text-xl font-light pt-4">Neobrutalistism Variant</h2>
          <NeobrutalismScope>
            <NeoButton>Button</NeoButton>
          </NeobrutalismScope>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-light">Dropdown Menu</h2>
          <div className="flex gap-4">
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
          </div>

          <h2 className="text-xl font-light pt-4">Dropdown Menu - Bubbly</h2>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline-bubbly" size="default-bubbly">
                  Open Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent bubbly>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem bubbly>Profile</DropdownMenuItem>
                <DropdownMenuItem bubbly>Settings</DropdownMenuItem>
                <DropdownMenuItem bubbly>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem bubbly>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <h2 className="text-xl font-light pt-4">
            Dropdown Menu - Neobrutalism
          </h2>
          <div className="flex gap-4">
            <NeobrutalismScope>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NeoButton>Open Menu</NeoButton>
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
            </NeobrutalismScope>
          </div>
        </div>
        <div className="flex gap-4">
          <NeobrutalismScope>
            <NeoDropdownMenuDemo />
          </NeobrutalismScope>
        </div>
        <div>
          <h2 className="text-xl font-light">Text Area</h2>
          <Textarea></Textarea>
        </div>

        <div>
          <h2 className="text-xl font-light">Text Area - Bubbly</h2>
          <Textarea bubbly></Textarea>
        </div>
      </div>
    </div>
  );
}
