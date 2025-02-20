"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className={"h-full"}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%", transition: { duration: 1 } }}
    >
      <div
        className={
          "flex flex-col lg:flex-row gap-8 h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
        }
      >
        {/*IMAGE CONTAINER*/}
        <div className={"h-1/2 lg:h-full lg:w-1/2 relative"}>
          <Image
            src={"/hero.png"}
            alt={"Hero image"}
            fill
            className={"object-contain"}
          />
        </div>

        {/*TEXT CONTAINER*/}
        <div
          className={
            "h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-8"
          }
        >
          <h1 className={"text-4xl md:text-6xl font-bold"}>
            Craft Digital Experience, Designing Tomorrow
          </h1>
          <p className={"md:text-xl"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            eligendi facere nobis, officiis provident tenetur? A assumenda
            debitis dolor eos facere impedit iure labore nulla officia, suscipit
            temporibus veniam voluptates.
          </p>
          <div className={"w-full flex gap-4"}>
            <button
              className={
                "px-4 py-3 ring-1 ring-black rounded-lg bg-black text-white hover:bg-gray-900"
              }
            >
              View My Work
            </button>
            <button className={"px-4 py-3 ring-1 ring-black rounded-lg"}>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
