"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "@/components/navigation/NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "-100vw",
      opacity: 0,
    },
    opened: {
      x: 0,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const listItemVariants = {
    closed: {
      y: -10,
      // opacity: 0,
    },
    opened: {
      y: -100,
      opacity: 1,
    },
  };

  return (
    <div
      className={
        "h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
      }
    >
      {/*LINKS*/}
      <div className={"hidden md:flex gap-4 w-1/3 z-10"}>
        {links.map((link) => (
          <NavLink key={link.url} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className={"md:hidden lg:flex xl:justify-center xl:w-1/3"}>
        <Link
          href={"/"}
          className={
            "text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          }
        >
          <span className={"text-white mr-1"}>Sinisa</span>
          <span
            className={
              "w-12 h-8 rounded bg-white text-black flex items-center justify-center"
            }
          >
            .dev
          </span>
        </Link>
      </div>

      <div className={"hidden md:flex items-center justify-end gap-4 w-1/3"}>
        <Link href={"#"}>
          <Image
            src={"/social_icons/github.png"}
            alt={"Github icon"}
            width={24}
            height={24}
          ></Image>
        </Link>

        <Link href={"#"}>
          <Image
            src={"/social_icons/dribbble.png"}
            alt={"Dribble icon"}
            width={24}
            height={24}
          ></Image>
        </Link>

        <Link href={"#"}>
          <Image
            src={"/social_icons/instagram.png"}
            alt={"Instagram icon"}
            width={24}
            height={24}
          ></Image>
        </Link>

        <Link href={"#"}>
          <Image
            src={"/social_icons/facebook.png"}
            alt={"Facebook icon"}
            width={24}
            height={24}
          ></Image>
        </Link>

        <Link href={"#"}>
          <Image
            src={"/social_icons/pinterest.png"}
            alt={"Pinterest icon"}
            width={24}
            height={24}
          ></Image>
        </Link>

        <Link href={"#"}>
          <Image
            src={"/social_icons/linkedin.png"}
            alt={"LinkedIn icon"}
            width={24}
            height={24}
          ></Image>
        </Link>
      </div>

      {/*RESPONSIVE MENU*/}
      <div className={"md:hidden"}>
        {/*MENU BUTTON*/}
        <button
          className={`w-10 h-8 flex flex-col items-center justify-between z-50 relative `}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <motion.div
            variants={topVariants}
            animate={mobileNavOpen ? "opened" : "closed"}
            className={`w-10 h-1 bg-black rounded origin-left`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={mobileNavOpen ? "opened" : "closed"}
            className={`w-10 h-1 bg-black rounded`}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={mobileNavOpen ? "opened" : "closed"}
            className={`w-10 h-1 bg-black rounded origin-left`}
          ></motion.div>
        </button>

        {/*MENU LIST*/}
        {mobileNavOpen && (
          <motion.div
            variants={listVariants}
            // initial={"close"}
            animate={mobileNavOpen ? "opened" : "closed"}
            className={`absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10`}
          >
            {links.map((link) => (
              <motion.div key={link.url} variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
