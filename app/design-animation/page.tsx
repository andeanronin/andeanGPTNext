import { Bitcount_Prop_Single_Ink } from "next/font/google";
import GooeyNav from "@/components/GooeyNav";

const bitcountPropSingleInk = Bitcount_Prop_Single_Ink({
  weight: "400",
  subsets: ["latin"],
});

// update with your own items
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function DesignAnimation() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-4">
      <div className="pt-5">
        <h1
          className={`text-3xl font-extralight text-black ${bitcountPropSingleInk.className}`}
        >
          animation
        </h1>
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
}
