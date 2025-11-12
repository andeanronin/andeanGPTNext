"use client";
import { Bitcount_Prop_Single_Ink } from "next/font/google";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import AppWithStyles from "./bounceToggle";
import { Switch } from "@/components/ui/switch";
import LayoutAnimation from "./toggleAnimation";
const bitcountPropSingleInk = Bitcount_Prop_Single_Ink({
  weight: "400",
  subsets: ["latin"],
});
import { FloatingNavDemo } from "../hello/floating-navbar";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};

export default function DesignMotion() {
  return (
    <div className="flex flex-col justify-center px-10 gap-5">
      <FloatingNavDemo></FloatingNavDemo>
      <div className="flex flex-col w-full mt-15">
        <h1
          className={`text-3xl font-extralight text-black ${bitcountPropSingleInk.className}`}
        >
          motion
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <Switch bubbly />
        <Switch />
        <LayoutAnimation />
      </div>
      <div className="py-5 flex flex-col gap-4">
        <motion.div
          style={{
            width: 200,
            height: 100,
            backgroundColor: "red",
            borderRadius: 10,
            padding: 10,
          }}
          initial={{ boxShadow: "0px 0px #000" }}
          whileHover={{ boxShadow: "10px 10px #000" }}
        ></motion.div>
        <motion.p>Motion p </motion.p>
        <motion.button
          style={{
            width: 60,
            height: 40,
            backgroundColor: "mediumorchid",
            borderRadius: 4,
            padding: 0,
          }}
        >
          Button
        </motion.button>
        <motion.div
          style={box}
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          style={{
            width: 120,
            height: 120,
            backgroundColor: "#ff0088",
            borderRadius: 5,
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        />
      </div>
      <AppWithStyles />
    </div>
  );
}
