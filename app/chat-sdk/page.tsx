import { Bitcount_Prop_Single_Ink } from "next/font/google";

const bitcountPropSingleInk = Bitcount_Prop_Single_Ink({
  weight: "400",
  subsets: ["latin"],
});

export default function ChatSdk() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-200">
      <div className="flex flex-col">
        <h1
          className={`text-3xl font-extralight text-black ${bitcountPropSingleInk.className}`}
        >
          chat - fast sdk
        </h1>
      </div>
    </div>
  );
}
