import { Bitcount_Prop_Single_Ink } from "next/font/google";
import { AnimateTooltipDemo } from "./TooltipDemo";
import { AnimateTabsDemo } from "./AnimateTabsDemo";
import { ScrollProgressProvider } from "@/components/animate-ui/primitives/animate/scroll-progress";
import { ScrollProgress } from "@/components/animate-ui/primitives/animate/scroll-progress";
import { ScrollProgressContainer } from "@/components/animate-ui/primitives/animate/scroll-progress";
import { BaseDialogDemo } from "./AnimateDialogDemo";
import { BaseMenuDemo } from "./AnimateMenuDemo";
import { Switch } from "@/components/animate-ui/components/base/switch";
import { RadixCheckboxDemo } from "./CheckboxDemo";
import { RadixAccordionDemo } from "./AccordionDemo";
import ButtonDemo from "./ButtonDemo";
import { Button } from "@/components/animate-ui/components/buttons/button";
import CopyButtonDemo from "./CopyButtonDemo";

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
      <div>
        <h3 className="text-sm font-medium text-foreground">{label}</h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-3 items-center">{children}</div>
    </div>
  );
}

export default function Hello() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <ScrollProgressProvider global={false}>
        {/* Position the scroll progress bar at the top */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <ScrollProgress className="bg-primary h-1" />
        </div>

        <ScrollProgressContainer className="w-full h-full overflow-y-auto">
          <div className="flex min-h-screen flex-col items-center py-10 gap-12">
            {/* Header */}
            <header className="flex flex-col w-full items-center pb-4">
              <h1
                className={`text-4xl font-extralight text-foreground ${bitcountPropSingleInk.className}`}
              >
                andean ronin
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                Animate-UI Component Library
              </p>
            </header>

            {/* Buttons Section */}
            <ComponentSection title="Buttons">
              <DemoRow
                label="Button Variants"
                description="Different visual styles for various contexts"
              >
                <Button>Animate Button</Button>
                <ButtonDemo variant="default" size="default" />
                <ButtonDemo variant="secondary" size="default" />
                <ButtonDemo variant="outline" size="default" />
                <CopyButtonDemo variant={"default"} size={"default"} />
              </DemoRow>
            </ComponentSection>

            {/* Form Controls Section */}
            <ComponentSection title="Form Controls">
              <DemoRow label="Switch" description="Toggle between two states">
                <Switch />
              </DemoRow>

              <DemoRow
                label="Checkbox"
                description="Select or deselect options"
              >
                <RadixCheckboxDemo
                  checked={false}
                  variant="default"
                  size="default"
                />
              </DemoRow>
            </ComponentSection>

            {/* Overlays Section */}
            <ComponentSection title="Overlays & Popovers">
              <DemoRow
                label="Tooltip"
                description="Contextual information on hover"
              >
                <AnimateTooltipDemo />
              </DemoRow>

              <DemoRow label="Menu" description="Dropdown menu with actions">
                <BaseMenuDemo />
              </DemoRow>

              <DemoRow label="Dialog" description="Modal overlay with content">
                <BaseDialogDemo from="top" showCloseButton={true} />
              </DemoRow>
            </ComponentSection>

            {/* Navigation & Content Section */}
            <ComponentSection title="Navigation & Content">
              <DemoRow label="Tabs" description="Organize content into tabs">
                <AnimateTabsDemo />
              </DemoRow>

              <DemoRow
                label="Accordion"
                description="Collapsible content sections"
              >
                <RadixAccordionDemo />
              </DemoRow>
            </ComponentSection>
          </div>

          {/* Footer */}
          <footer className="w-full h-96 bg-secondary rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">
              Animate-UI Components with Radix & Base Primitives
            </p>
          </footer>
        </ScrollProgressContainer>
      </ScrollProgressProvider>
    </div>
  );
}
