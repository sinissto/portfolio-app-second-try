"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "@/components/navigation/NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
          className={`w-10 h-8 flex flex-col items-center justify-between z-10 relative `}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <div
            className={`w-10 h-1 bg-black rounded ${
              mobileNavOpen ? "bg-white" : ""
            }`}
          ></div>
          <div
            className={`w-10 h-1 bg-black rounded ${
              mobileNavOpen ? "bg-white" : ""
            }`}
          ></div>
          <div
            className={`w-10 h-1 bg-black rounded ${
              mobileNavOpen ? "bg-white" : ""
            }`}
          ></div>
        </button>

        {/*MENU LIST*/}
        {mobileNavOpen && (
          <div
            className={`absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl `}
          >
            {links.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
