"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define model options as a constant object for better maintainability
export const MODEL_OPTIONS = {
  "gpt-4.1": "GPT 4.1",
  "gpt-4.1-mini": "GPT 4.1 mini",
  "gpt-4.1-nano": "GPT 4.1 nano",
};

export type ModelType = keyof typeof MODEL_OPTIONS;

type ModelsMenuProps = {
  selectedModel: ModelType;
  onModelChange: (model: ModelType) => void;
};

export function ModelsMenu({ selectedModel, onModelChange }: ModelsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="hapticBubblyOutline" size={"haptic-bubbly"}>
          {MODEL_OPTIONS[selectedModel]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" bubbly>
        <DropdownMenuLabel>Choose Model</DropdownMenuLabel>
        <DropdownMenuSeparator bubbly />
        <DropdownMenuRadioGroup
          value={selectedModel}
          onValueChange={(value) => onModelChange(value as ModelType)}
        >
          {Object.entries(MODEL_OPTIONS).map(([id, name]) => (
            <DropdownMenuRadioItem bubbly key={id} value={id}>
              {name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
