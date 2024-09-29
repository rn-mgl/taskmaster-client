"use client";

import Input from "@/components/form/Input";
import { useGlobalContext } from "@/context";
import registration from "@/images/Register.svg";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

interface RegisterDataProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Register = () => {
  const [registerData, setRegisterData] = React.useState<RegisterDataProps>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { url } = useGlobalContext();

  const handleRegisterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data: token } = await axios.get(`${url}/csrf_token`, {
        withCredentials: true,
      });

      if (token.csrf_token) {
        const { data: register } = await axios.post(
          `${url}/register`,
          { ...registerData },
          {
            headers: { "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") },
            withCredentials: true,
          }
        );

        if (register.success) {
          console.log("Registered");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen min-h-screen flex flex-col items-center justify-start bg-default-white relative">
      <div
        className="hidden w-6/12 bg-primary-main h-full absolute left-0 top-0 p-8
                 text-default-light l-s:flex flex-col items-center justify-center text-center"
      >
        <Link
          href="/"
          className="mr-auto p-2 rounded-full aspect-square hover:bg-primary-dark"
        >
          <FaArrowLeftLong />
        </Link>

        <div className="my-auto flex flex-col items-center justify-center w-full">
          <p className="font-header font-black text-2xl">
            Welcome to TaskMaster!
          </p>
          <p>Get started on building your most productive self!</p>
          <Image
            src={registration}
            alt="registration"
            className="drop-shadow-md animate-float w-96"
          />
        </div>
      </div>

      <div
        className="w-full h-full flex flex-col items-center justify-center my-auto max-w-screen-l-l p-4 gap-4 t:p-8 t:gap-8
                  absolute l-s:w-6/12 l-s:right-0 "
      >
        <Link
          href="/"
          className="mr-auto p-2 rounded-full text-default-black aspect-square hover:bg-primary-light l-s:hidden"
        >
          <FaArrowLeftLong />
        </Link>
        <form
          onSubmit={(e) => submitRegister(e)}
          className="flex flex-col items-start justify-center w-full h-full gap-2 font-body
                    rounded-lg backdrop-blur-md border-primary-main text-default-black max-w-screen-m-l"
        >
          <div className="w-full flex flex-col mb-4">
            <p className="font-extrabold text-primary-main font-header text-2xl">
              Get Started
            </p>
            <p className="text-sm">Welcome to TaskMaster!</p>
          </div>

          <Input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            required={true}
            value={registerData.first_name}
            onChange={handleRegisterData}
            Icon={<CiUser />}
          />

          <Input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required={true}
            value={registerData.last_name}
            onChange={handleRegisterData}
            Icon={<CiUser />}
          />

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
            value={registerData.email}
            onChange={handleRegisterData}
            Icon={<CiMail />}
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required={true}
            value={registerData.password}
            onChange={handleRegisterData}
            Icon={<CiLock />}
          />

          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
            required={true}
            value={registerData.password_confirmation}
            onChange={handleRegisterData}
            Icon={<CiLock />}
          />

          <button className="font-header mt-2 p-2 rounded-md bg-primary-main w-full font-bold text-default-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
