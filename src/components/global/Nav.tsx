"use client";

import React from "react";
import Logo from "@/components/global/Logo";
import Link from "next/link";
import { MdDashboard, MdMessage, MdSend } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { usePathname } from "next/navigation";
import { IoLogOut, IoMenu } from "react-icons/io5";

const Nav = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [activeNav, setActiveNav] = React.useState(false);
  const path = usePathname();

  const handleActiveNav = () => {
    setActiveNav((prev) => !prev);
  };

  console.log(activeNav);

  return (
    <div className="flex flex-row h-full transition-all w-full items-start justify-start">
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 bg-default-light t:w-6/12 flex-col items-start justify-start
                     l-s:static l-s:z-0 font-header gap-4 transition-all flex ${
                       activeNav
                         ? "translate-x-0 l-s:w-72 l-s:min-w-72 l-s:max-w-72"
                         : "-translate-x-full l-s:translate-x-0 l-s:w-20 l-s:min-w-20 l-s:max-w-20"
                     }`}
      >
        <div
          className={`text-primary-main border-b-2 w-full p-3 flex flex-row items-center transition-all ${
            activeNav ? "justify-between" : "justify-center"
          }`}
        >
          <div className={`${activeNav ? "flex" : "hidden"}`}>
            <Logo link="/tm" />
          </div>

          <button
            onClick={handleActiveNav}
            className="text-2xl hover:bg-accent-light/30 p-2 rounded-md transition-all"
          >
            <IoMenu />
          </button>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start gap-2 text-default-dark p-4 transition-all">
          <Link
            href="/"
            className={`w-full p-4 rounded-md flex flex-row gap-2 items-center justify-center hover:bg-accent-light/30 hover:text-primary-main transition-all
                      ${
                        path === "/tm"
                          ? "font-bold bg-gradient-to-br from-primary-light to-secondary-light text-primary-dark"
                          : "font-normal"
                      }`}
          >
            <MdDashboard />
            <p className={`${activeNav ? "l-s:flex" : "l-s:hidden"} mr-auto`}>
              Dashboard
            </p>
          </Link>

          <Link
            href="/tm/task"
            className={`w-full p-4 rounded-md flex flex-row gap-2 items-center justify-center hover:bg-accent-light/30 hover:text-primary-main transition-all
                    ${
                      path === "/tm/task"
                        ? "font-bold bg-gradient-to-br from-primary-light to-secondary-light text-primary-dark"
                        : "font-normal"
                    }`}
          >
            <SiTask />
            <p className={`${activeNav ? "l-s:flex" : "l-s:hidden"} mr-auto`}>
              Task
            </p>
          </Link>

          <Link
            href="/tm/message"
            className={`w-full p-4 rounded-md flex flex-row gap-2 items-center justify-center hover:bg-accent-light/30 hover:text-primary-main transition-all
                    ${
                      path === "/tm/message"
                        ? "font-bold bg-gradient-to-br from-primary-light to-secondary-light text-primary-dark"
                        : "font-normal"
                    }`}
          >
            <MdMessage />
            <p className={`${activeNav ? "l-s:flex" : "l-s:hidden"} mr-auto`}>
              Message
            </p>
          </Link>

          <Link
            href="/tm/invite"
            className={`w-full p-4 rounded-md flex flex-row gap-2 items-center justify-center hover:bg-accent-light/30 hover:text-primary-main transition-all
                    ${
                      path === "/tm/invite"
                        ? "font-bold bg-gradient-to-br from-primary-light to-secondary-light text-primary-dark"
                        : "font-normal"
                    }`}
          >
            <MdSend />
            <p className={`${activeNav ? "l-s:flex" : "l-s:hidden"} mr-auto`}>
              Invite
            </p>
          </Link>

          <button
            className="mt-auto w-full flex flex-row items-center justify-center gap-2 p-4 hover:bg-accent-light/30 
                      hover:text-primary-main transition-all hover:shadow-none rounded-md text-default-dark"
          >
            <IoLogOut />
            <p className={`${activeNav ? "l-s:flex" : "l-s:hidden"} mr-auto`}>
              Logout
            </p>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-default-black/20 z-40 hidden l-s:hidden ${
          activeNav ? "hidden t:flex animate-fade" : "hidden"
        }`}
      />

      <div className="flex flex-col flex-1 gap-4">
        <div className="text-primary-main border-b-2 w-full p-3 l-s:p-4 flex flex-row items-center justify-between">
          <div className="t:hidden">
            <Logo link="/tm" />
          </div>

          <button
            onClick={handleActiveNav}
            className="text-2xl hover:bg-accent-light/30 p-1 rounded-md transition-all l-s:hidden"
          >
            <IoMenu />
          </button>

          <div className="w-8 h-8 min-w-8 min-h-8 bg-accent-main rounded-full hidden ml-auto l-s:flex"></div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Nav;
