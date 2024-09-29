"use client";

import Input from "@/components/form/Input";
import login from "@/images/Login.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

interface LoginDataProps {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = React.useState<LoginDataProps>({
    email: "",
    password: "",
  });

  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="w-full h-screen min-h-screen flex flex-col items-center justify-start bg-default-white relative">
      <div
        className="hidden w-6/12 bg-secondary-main h-full absolute right-0 top-0 p-8
                 text-default-light l-s:flex flex-col items-center justify-center text-center"
      >
        <div className="my-auto flex flex-col items-center justify-center w-full text-primary-dark">
          <p className="font-header font-black text-2xl">
            Welcome back to TaskMaster!
          </p>
          <p>Your tasks are waiting; let&apos;s get things done!</p>
          <Image
            src={login}
            alt="login"
            className="drop-shadow-md animate-float w-96"
          />
        </div>
      </div>

      <div
        className="w-full h-full flex flex-col items-center justify-center my-auto max-w-screen-l-l p-4 gap-4 t:p-8 t:gap-8
                  absolute l-s:w-6/12 l-s:left-0 "
      >
        <Link
          href="/"
          className="mr-auto p-2 rounded-full text-default-black aspect-square hover:bg-secondary-light"
        >
          <FaArrowLeftLong />
        </Link>

        <form
          onSubmit={(e) => register(e)}
          className="flex flex-col items-start justify-center w-full h-full gap-2 font-body
                    rounded-lg backdrop-blur-md border-secondary-main text-default-black max-w-screen-m-l"
        >
          <div className="w-full flex flex-col mb-4">
            <p className="font-extrabold text-secondary-main font-header text-2xl">
              Glad You&apos;re Here!
            </p>
            <p className="text-sm">Let&apos;s start working!</p>
          </div>

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
            value={loginData.email}
            onChange={handleLoginData}
            Icon={<CiUser />}
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required={true}
            value={loginData.password}
            onChange={handleLoginData}
            Icon={<CiLock />}
          />

          <button className="font-header mt-2 p-2 rounded-md bg-secondary-main w-full font-bold text-default-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
