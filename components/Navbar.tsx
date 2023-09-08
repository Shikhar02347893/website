import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const lineOneControls = useAnimationControls();
  const lineTwoControls = useAnimationControls();
  const lineThreeControls = useAnimationControls();
  const menuControls = useAnimationControls();

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      lineOneControls.start(
        { rotate: "0deg" },
        { duration: 0.3, type: "spring" },
      );
      lineTwoControls.start(
        { opacity: 1, transform: "translateX(0)" },
        { duration: 0.12 },
      );
      lineThreeControls.start(
        { rotate: "0deg" },
        { duration: 0.3, type: "spring" },
      );
      menuControls.start(
        { opacity: 0.5, left: "100vw", pointerEvents: "none" },
        { duration: 0.21, type: "spring" },
      );

      setMobileMenu(false);
    } else {
      lineOneControls.start(
        { rotate: "45deg" },
        { duration: 0.3, type: "spring" },
      );
      lineTwoControls.start(
        { opacity: 0, transform: "translateX(1)" },
        { duration: 0.12 },
      );
      lineThreeControls.start(
        { rotate: "-45deg" },
        { duration: 0.3, type: "spring" },
      );
      menuControls.start(
        { opacity: 1, left: "0", pointerEvents: "all" },
        { duration: 0.21, type: "spring" },
      );

      setMobileMenu(true);
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-50 mb-28 flex h-28 w-full items-center justify-between border-b border-b-neutral-800 bg-neutral-900 bg-opacity-90 backdrop-blur-sm">
      <div className="ml-8 flex items-center xl:ml-[17vw]">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/Logo.svg"
              className="rounded-full"
              alt="Would You Logo"
              width="50"
              height="50"
              priority
            />
            <p className="ml-4 text-2xl font-bold text-white">Would You</p>
          </div>
        </Link>
        <div className="ml-24 hidden items-center md:flex">
          <Link
            href="/commands"
            className="mr-6 text-lg text-neutral-300 transition-all hover:text-neutral-100"
          >
            Commands
          </Link>
          <Link
            href="/blog"
            className="mr-6 text-lg text-neutral-300 transition-all hover:text-neutral-100"
          >
            Blog
          </Link>
          <Link
            href="/vote"
            target="_blank"
            className="mr-6 text-lg text-neutral-300 transition-all hover:text-neutral-100"
          >
            Vote
          </Link>
        </div>
      </div>
      <div className="z-50 mr-8 flex items-center xl:mr-[17vw]">
        <Link href="/discord" target="_blank" className="hidden md:block">
          <Button className="">Support</Button>
        </Link>
        <div
          className="relative ml-6 flex h-6 w-8 flex-col items-center justify-between md:hidden"
          onClick={() => toggleMobileMenu()}
        >
          <motion.span
            className="h-[3px] w-[30px] origin-left rounded-full bg-neutral-300"
            initial={{ rotate: "0deg" }}
            animate={lineOneControls}
          />
          <motion.span
            className="menu-line line-1 h-[3px] w-[30px] rounded-full bg-neutral-300"
            initial={{ opacity: 1 }}
            animate={lineTwoControls}
          />
          <motion.span
            className="menu-line line-1 h-[3px] w-[30px] origin-left rounded-full bg-neutral-300"
            initial={{ rotate: "0deg" }}
            animate={lineThreeControls}
          />
        </div>
      </div>

      <motion.div
        className="fixed left-0 top-0 z-40 h-[100vh] w-[100vw] bg-neutral-900"
        transition={{ duration: 0.21, type: "easeInOut" }}
        initial={{ opacity: 0.5, left: "100vw", pointerEvents: "none" }}
        animate={menuControls}
      >
        <div className="absolute top-36 flex w-full flex-col items-center">
          <Link
            href="/"
            className="mt-8 text-center text-3xl text-white"
            onClick={() => toggleMobileMenu()}
          >
            Home
          </Link>
          <Link
            href="/commands"
            className="mt-8 text-center text-3xl text-white"
            onClick={() => toggleMobileMenu()}
          >
            Commands
          </Link>
          <Link
            href="/blog"
            className="mt-8 text-center text-3xl text-white"
            onClick={() => toggleMobileMenu()}
          >
            Blog
          </Link>
          <Link
            href="/vote"
            target="_blank"
            className="mt-8 text-center text-3xl text-white"
            onClick={() => toggleMobileMenu()}
          >
            Vote
          </Link>
          <Link
            href="/discord"
            target="_blank"
            className="mt-8 text-center text-2xl"
          >
            <Button>Support</Button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
